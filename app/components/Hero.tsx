import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full bg-[#FFFFFF] flex items-center justify-center">
      <div className="flex items-center justify-between text-[#000000] font-bold w-full h-auto py-10 md:flex-row flex-col">
        <div className="flex flex-col justify-end">
          <h1 className="text-[#000000] font-bold text-5xl px-4 py-2 ml-5">
            Learn new skills
          </h1>
          <h2 className="text-[#000000] font-bold mt-2 text-5xl px-4 ml-5">
            online with ease
          </h2>
          <div className="ml-5 mt-8">
            <p className="font-normal text-xl text-[#000000] px-4 leading-7 whitespace-nowrap">
              Discover a wide range of courses covering a veriety of{" "}
            </p>
            <p className="font-normal text-xl text-[#000000] mt-2 px-4 leading-7">
              subjects, taught by expert instructors.
            </p>
          </div>
          <div className="mt-6 flex space-x-4">
            <button className="text-[#FFFFFF] bg-[#000000] px-6 py-4 mt-7 ml-7 mb-4 rounded-lg">
              Start learning now
            </button>
            <button className="text-[#000000] bg-[#FFFFFF] px-4 py-4 mb-4 ml-7 mt-7 rounded-lg border border-black">
              Explore Courses
            </button>
          </div>
        </div>

        <div className="w-1/2 flex flex-row justify-end items-center mt-1 mb-36">
          <Image
            src="/images/image-2.jpeg"
            alt="girl learning"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
