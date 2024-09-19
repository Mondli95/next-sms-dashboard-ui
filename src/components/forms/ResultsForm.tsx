"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";

const schema = z.object({
  subject: z.string().min(2, { message: "Subject name is required!" }),
  student: z.string().min(2, { message: "Student name is required!" }),
  score: z.number().min(0, { message: "Score mark is required!" }),
  teacher: z.string().min(2, { message: "Teacher is required!" }),
  className: z.string().min(2, { message: "Class name is required!" }),
  date: z.date({ message: "Class name is required!" }),
});

type Inputs = z.infer<typeof schema>;

const ResultsForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {});

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">{`${
        type === "create" ? "Add Student Results" : "Update Student Results"
      }`}</h1>
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Subject Name"
          name="subject"
          defaultValue={data?.subject}
          register={register}
          error={errors?.subject}
        />
        <InputField
          label="Student Name"
          name="subject"
          defaultValue={data?.subject}
          register={register}
          error={errors?.subject}
        />

        <InputField
          label="Mark Score"
          name="score"
          defaultValue={data?.score}
          register={register}
          error={errors?.score}
        />
        <InputField
          label="Teacher"
          name="teacher"
          defaultValue={data?.teacher}
          register={register}
          error={errors?.teacher}
        />
        <InputField
          label="Class Name"
          name="class"
          defaultValue={data?.class}
          register={register}
          error={errors?.className}
        />
        <InputField
          label="Exam date"
          name="date"
          defaultValue={data?.date}
          register={register}
          error={errors?.date}
        />
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default ResultsForm;
