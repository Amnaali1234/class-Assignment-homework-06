import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full bg-[#FFFFFF] flex items-center justify-center px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between text-[#000000] font-bold w-full h-auto py-10">
        <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-[#000000] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4 py-2">
            Learn new skills
          </h1>
          <h2 className="text-[#000000] font-bold mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4">
            online with ease
          </h2>
          <div className="mt-4 px-4 md:px-0">
            <p className="font-normal text-lg sm:text-xl md:text-xl text-[#000000] leading-6 md:leading-7">
              Discover a wide range of courses covering a variety of
            </p>
            <p className="font-normal text-lg sm:text-xl md:text-xl text-[#000000] mt-2 leading-6 md:leading-7">
              subjects, taught by expert instructors.
            </p>
          </div>
          <div className="mt-6 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 px-4 md:px-0">
            <button className="text-[#FFFFFF] bg-[#000000] px-6 py-3 rounded-lg md:px-8 md:py-4">
              Start learning now
            </button>
            <button className="text-[#000000] bg-[#FFFFFF] px-6 py-3 rounded-lg border border-black md:px-8 md:py-4">
              Explore Courses
            </button>
          </div>
        </div>

        <div className="w-full md:w-[640px] flex justify-center items-center mt-8 md:mt-0">
          <Image
            src="/images/image-2.jpeg"
            alt="girl learning"
            width={640}
            height={400}
            className="rounded-lg shadow-lg object-cover"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
