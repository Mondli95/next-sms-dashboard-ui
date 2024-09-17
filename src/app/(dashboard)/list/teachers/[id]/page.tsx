import Image from "next/image";

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      <div className="w-full xl:w-2/3">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-sky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="">
              <Image
                src="/profilePhoto.png"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1>Madge Thornton</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                facere dolor illum sequi, itaque provident distinctio suscipit
                adipisci placeat deleniti odio nesciunt! Harum mollitia rerum
                voluptate consectetur perferendis nam iste!
              </p>
            </div>
          </div>
          <div className="flex"></div>
        </div>
        <div className="">Teachers Schedule</div>
      </div>
      <div className="w-full xl:w-1/3">right</div>
    </div>
  );
};

export default SingleTeacherPage;
