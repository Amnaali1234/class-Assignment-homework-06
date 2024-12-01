import React from "react";
import Image from "next/image";
import penTool from "../Assets/pen-tool-2.svg";
import volume from "../Assets/volume-high.svg";
import group from "../Assets/group.svg";
import microphone from "../Assets/microphone.svg";
import link from "../Assets/link.svg";
import arrows from "../Assets/arrow-2.svg";
import briefcase from "../Assets/briefcase.svg";
import book1 from "../Assets/book(1).svg";
import book from "../Assets/book.svg";

const categories = [
  {
    name: "Design & Development",
    courses: "50+ Courses Available",
    image: penTool,
  },
  {
    name: "Marketing",
    courses: "50+ Courses Available",
    image: volume,
  },
  {
    name: "Development",
    courses: "50+ Courses Available",
    image: group,
  },
  {
    name: "Communication",
    courses: "50+ Courses Available",
    image: microphone,
  },
  {
    name: "Digital Marketing",
    courses: "50+ Courses Available",
    image: link,
  },
  {
    name: "Self Development",
    courses: "50+ Courses Available",
    image: arrows,
  },
  {
    name: "Business",
    courses: "50+ Courses Available",
    image: briefcase,
  },
  {
    name: "Finance",
    courses: "50+ Courses Available",
    image: book1,
  },
  {
    name: "Consulting",
    courses: "50+ Courses Available",
    image: book,
  },
];

const CourseCategories: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Explore Courses By Category</h2>
        <p className="text-gray-600 mt-2">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center justify-around border rounded-lg p-6 hover:shadow-md transition duration-300 bg-[#F7F7F7]"
          >
            <div className="w-[100px] h-[100px] bg-white flex items-center justify-center">
              <Image
                src={category.image}
                alt={category.name}
                width={32}
                height={32}
              />
            </div>
            <div>
              <h3 className="text-lg font-bold">{category.name}</h3>
              <p className="text-gray-500 text-sm">{category.courses}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 border-black">
        <button className="px-6 py-2 border border-black bg-white text-black rounded-md">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default CourseCategories;
