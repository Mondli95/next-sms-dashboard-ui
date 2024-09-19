"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";

const schema = z.object({
  title: z.string().min(2, { message: "Subject name is required!" }),
  className: z.string().min(2, { message: "Class name is required!" }),
  date: z.date({ message: "Exam date is required!" }),
  startTime: z.string().min(2, { message: "Teacher is required!" }),
  endTime: z.string().min(2, { message: "Teacher is required!" }),
});

type Inputs = z.infer<typeof schema>;

const ExamForm = ({
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
        type === "create" ? "Create a new Event" : "Update Event"
      }`}</h1>
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Title"
          name="title"
          defaultValue={data?.title}
          register={register}
          error={errors?.title}
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
        <InputField
          label="Start Time"
          name="startTime"
          defaultValue={data?.startTime}
          register={register}
          error={errors?.startTime}
        />
        <InputField
          label="End Time"
          name="endTime"
          defaultValue={data?.endTime}
          register={register}
          error={errors?.endTime}
        />
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default ExamForm;
