import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full bg-[#FFFFFF] border border-gray-400 shadow-lg mt-4 flex items-center justify-between px-6">
      <div
        className=" flex-shrink-0 pl-4 
"
      >
        <Image
          src="/images/image-1.png"
          alt="header image"
          width={180}
          height={70}
        />
      </div>

      <div className="flex-grow flex space-x-8 justify-center items-center pl-10 ml-96 mr-0">
        <Link className="text-4xl md:hidden" href="/">
          &#8801;
        </Link>
        <nav>
          <ul className="hidden md:flex flex-wrap xl:space-x-8 space-x-4 text-sm xl:text-lg font-medium justify-center">
            <li className=" flex items-center border-b-2 border-black">Home</li>
            <li className="flex items-center">Courses</li>
            <li className="flex items-center">Services</li>
            <li className="flex items-center">Achievement</li>
            <li className="flex items-center">About Us</li>
            <li className="flex items-center">Testimonial</li>
          </ul>
        </nav>

        <div className="hidden md:flex space-x-4">
          <button className="text-[#000000] bg-[#FFFFFF] px-4 py-2 text-sm xl:text-lg font-medium rounded-md border border-black">
            Login
          </button>
          <button className="text-[#FFFFFF] bg-[#000000] px-4 py-2 text-sm xl:text-lg font-medium rounded-md">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
