import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-[#F7F7F7]">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 py-2">
        <div className="flex flex-col sm:flex-row items-center sm:space-x-6 text-center sm:text-left text-[#000000] text-sm sm:text-base">
          <span className="block sm:inline">Phone: 956-742-455-678</span>
          <span className="hidden sm:block">|</span>
          <span className="block sm:inline">Email: info@addsgnr.com</span>
        </div>

        <div className="flex space-x-4 mt-2 sm:mt-0">
          <Link href="https://facebook.com" target="_blank">
            <FaFacebook size={20} className="text-[#000000]" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <FaInstagram size={20} className="text-[#000000]" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <FaTwitter size={20} className="text-[#000000]" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <FaLinkedin size={20} className="text-[#000000]" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
