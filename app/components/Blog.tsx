import React from "react";
import Image from "next/image";
const Blog = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Courses
        </h2>
        <p className="text-center text-[#000000] text-lg mb-10">
          Your Ultimate Guide To Learning
        </p>
        <div className="flex space-x-8 justify-center items-center">
          <ol className="flex text-lg font-medium space-x-8">
            <li className="border-black border-b-2">Popular</li>
            <li>Recommended</li>
            <li>Best Price</li>
          </ol>
        </div>
        <section className=" bg-gray-100 py-12 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border-gray-200 w-96 ">
              <div className="relative">
                <Image
                  src="/images/Blog-image-1.jpeg"
                  alt="UI/UX Design 201"
                  width={416}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <div className="w-full h-auto bg-white"></div>
              </div>
              <div className="p-4">
                <h2 className="text-xl text-black font-medium">Design</h2>
                <h3 className="text-2xl font-bold text-gray-800">
                  UI/UX Design 201
                </h3>
                <p className="text-[#000000] text-sm mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  suspendesse varius enim in eros!
                </p>
                <div className="flex justify-start items-start">
                  <button className="text-black rounded-md border border-black text-lg font-medium px-5 py-2 mt-3 bg-white">
                    Enroll now
                  </button>
                  <span className="text-lg px-10 py-2 mt-3 flex justify-end items-end ">
                    $400
                  </span>
                </div>
              </div>
            </div>

            {/*card 2*/}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border-gray-200 w-96 ">
              <div className="relative">
                <Image
                  src="/images/Blog-image-2.jpeg"
                  alt="UI/UX Design 201"
                  width={1312}
                  height={534}
                  className="w-full h-auto object-cover"
                />
                <div className="w-full h-auto bg-white"></div>
              </div>
              <div className="p-4">
                <h2 className="text-xl text-black font-medium">Programming</h2>
                <h3 className="text-2xl font-bold text-gray-800">
                  Introduction to Python
                </h3>
                <p className="text-[#000000] text-sm mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  suspendesse varius enim in eros!
                </p>
                <div className="flex justify-start items-start">
                  <button className="text-black rounded-md border border-black text-lg font-medium px-5 py-2 mt-3 bg-white">
                    Enroll now
                  </button>
                  <span className="text-lg px-10 py-2 mt-3 flex justify-end items-end ">
                    $400
                  </span>
                </div>
              </div>
            </div>

            {/*card 3*/}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border-gray-200 w-96 ">
              <div className="relative">
                <Image
                  src="/images/Blog-image-3.jpeg"
                  alt="UI/UX Design 201"
                  width={1312}
                  height={534}
                  className="w-full h-auto object-cover"
                />
                <div className="w-full h-auto bg-white"></div>
              </div>
              <div className="p-4">
                <h2 className="text-xl text-black font-medium">Buisness</h2>
                <h3 className="text-2xl font-bold text-gray-800">
                  Data Analysis for Beginners
                </h3>
                <p className="text-[#000000] text-sm mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  suspendesse varius enim in eros!
                </p>
                <div className="flex justify-start items-start">
                  <button className="text-black rounded-md border border-black text-lg font-medium px-5 py-2 mt-3 bg-white">
                    Enroll now
                  </button>
                  <span className="text-lg px-10 py-2 mt-3 flex justify-end items-end ">
                    $400
                  </span>
                </div>
              </div>
            </div>

            {/*card 4 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border-gray-200 w-96 mt-12 ">
              <div className="relative">
                <Image
                  src="/images/Blog-image-4.jpeg"
                  alt="UI/UX Design 201"
                  width={1312}
                  height={534}
                  className="w-full h-auto object-cover"
                />
                <div className="w-full h-auto bg-white"></div>
              </div>
              <div className="p-4">
                <h2 className="text-xl text-black font-medium">Art</h2>
                <h3 className="text-2xl font-bold text-gray-800">
                  Art Specialization
                </h3>
                <p className="text-[#000000] text-sm mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  suspendesse varius enim in eros!
                </p>
                <div className="flex justify-start items-start">
                  <button className="text-black rounded-md border border-black text-lg font-medium px-5 py-2 mt-3 bg-white">
                    Enroll now
                  </button>
                  <span className="text-lg px-10 py-2 mt-3 flex justify-end items-end ">
                    $400
                  </span>
                </div>
              </div>
            </div>

            {/*card 5 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border-gray-200 w-96 mt-12">
              <div className="relative">
                <Image
                  src="/images/Blog-image-5.jpeg"
                  alt="UI/UX Design 201"
                  width={1312}
                  height={534}
                  className="w-full h-auto object-cover"
                />
                <div className="w-full h-auto bg-white"></div>
              </div>
              <div className="p-4">
                <h2 className="text-xl text-black font-medium">Law</h2>
                <h3 className="text-2xl font-bold text-gray-800">
                  Rule Of Law
                </h3>
                <p className="text-[#000000] text-sm mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  suspendesse varius enim in eros!
                </p>
                <div className="flex justify-start items-start">
                  <button className="text-black rounded-md border border-black text-lg font-medium px-5 py-2 mt-3 bg-white">
                    Enroll now
                  </button>
                  <span className="text-lg px-10 py-2 mt-3 flex justify-end items-end ">
                    $400
                  </span>
                </div>
              </div>
            </div>

            {/*card 6 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border-gray-200 w-96 mt-12">
              <div className="relative">
                <Image
                  src="/images/Blog-image-1.jpeg"
                  alt="UI/UX Design 201"
                  width={1312}
                  height={534}
                  className="w-full h-auto object-cover"
                />
                <div className="w-full h-auto bg-white"></div>
              </div>
              <div className="p-4">
                <h2 className="text-xl text-black font-medium">Tech</h2>
                <h3 className="text-2xl font-bold text-gray-800">
                  Introduction to webflow
                </h3>
                <p className="text-[#000000] text-sm mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  suspendesse varius enim in eros!
                </p>
                <div className="flex justify-start items-start">
                  <button className="text-black rounded-md border border-black text-lg font-medium px-5 py-2 mt-3 bg-white">
                    Enroll now
                  </button>
                  <span className="text-lg px-10 py-2 mt-3 flex justify-end items-end ">
                    $400
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center mt-8 border-black flex justify-center w-full">
          <button className="px-6 py-3 border border-black bg-white text-black text-lg rounded-md sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-3 md:text-lg lg:px-6 lg:py-4 lg:text-xl">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
