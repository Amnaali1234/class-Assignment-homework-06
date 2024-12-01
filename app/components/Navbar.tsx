import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w[1280px] h-[54x] bg-[#F7F7F7]">
      <div
        className="px-[62px] mr-[64x] flex sm:flex-row flex-col bg-[#F7F7F7] h-[54x] sm:justify-between justify-between items-center sm:px-8 md:px-16 lg:px-24 mb-[16px]
"
      >
        <div className="flex space-x-6 text-xl font-medium">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-lg font-medium text-center space-x-2">
            <span className=" ml-10">Phone Number:956 742 455 678 </span>
          </div>
          <span className="hidden sm:block">|</span>
          <span> Email:info@addsgnr.com</span>
        </div>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <Link href="https://facebook.com" target="-blank">
            {" "}
            <FaFacebook size={24} />
          </Link>
          <Link href="https://instagram.com" target="-blank">
            {" "}
            <FaInstagram size={24} />
          </Link>
          <Link href="https://twitter.com" target="-blank">
            {" "}
            <FaTwitter size={24} />
          </Link>
          <Link href="https://linkedin.com" target="-blank">
            {" "}
            <FaLinkedin size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
