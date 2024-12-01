"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[#FFFFFF] border border-gray-400 shadow-lg mt-4 flex items-center justify-between px-4 md:px-6 lg:px-10">
      <div className="flex-shrink-0">
        <Image
          src="/images/image-1.png"
          alt="header image"
          width={180}
          height={70}
        />
      </div>

      <div className="flex-grow flex items-center justify-end space-x-4 md:space-x-8">
        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#8801;
        </button>

        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 text-sm md:text-base font-medium z-50`}
        >
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 items-start md:items-center pl-4 md:pl-0">
            <li className="flex items-center border-b-2 md:border-b-0 border-black">
              <Link href="/">Home</Link>
            </li>
            <li className="flex items-center">
              <Link href="/courses">Courses</Link>
            </li>
            <li className="flex items-center">
              <Link href="/services">Services</Link>
            </li>
            <li className="flex items-center">
              <Link href="/achievement">Achievement</Link>
            </li>
            <li className="flex items-center">
              <Link href="/about">About Us</Link>
            </li>
            <li className="flex items-center">
              <Link href="/testimonial">Testimonial</Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex space-x-4">
          <button className="text-[#000000] bg-[#FFFFFF] px-4 py-2 text-sm font-medium rounded-md border border-black">
            Login
          </button>
          <button className="text-[#FFFFFF] bg-[#000000] px-4 py-2 text-sm font-medium rounded-md">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
