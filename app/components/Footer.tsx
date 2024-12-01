import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logos from "../Assets/Logos.svg";
import facebookLogo from "../Assets/facebookLogo.svg";
import linkedinLogo from "../Assets/linkedinLogo.svg";
import twitterLogo from "../Assets/twitterLogo.svg";
import instaLogo from "../Assets/instaLogo.svg";

export default function Footer() {
  return (
    <footer className="px-4 py-8 lg:px-20 lg:py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="w-full lg:w-[500px]">
            <p className="text-lg font-semibold">Subscribe to our newsletter</p>
            <p className="text-sm text-[#000000uy7]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-full lg:w-[400px]">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
              <input
                className="h-[48px] w-full lg:w-[256px] border-solid border-[#000000] rounded px-3 placeholder-[#000000]"
                placeholder="Enter your email"
                type="text"
              />
              <button className="w-full lg:w-[119px] h-[48px] bg-[#FFFF] text-[#000000] rounded border border-black">
                Subscribe
              </button>
            </div>
            <p className="text-xs mt-2 text-[#000000]">
              By subscribing, you agree to our{" "}
              <Link className="underline text-[#000000]" href="/">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="flex justify-start items-center">
            <Image src={Logos} alt="Logo" />
          </div>
          <div>
            <p className="font-semibold text-lg">Courses</p>
            <ul className="text-sm space-y-2">
              <li>Business</li>
              <li>Development</li>
              <li>Technology</li>
              <li>Design</li>
              <li>Programming</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-lg">Resources</p>
            <ul className="text-sm space-y-2">
              <li>Career</li>
              <li>Resume</li>
              <li>Learning</li>
              <li>Interview Preparation</li>
              <li>Jobs</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-lg">About Us</p>
            <ul className="text-sm space-y-2">
              <li>Contact</li>
              <li>Help/Support</li>
              <li>FAQ</li>
              <li>Terms and Conditions</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-xs text-[#000000]">
              <p>2023 Ddsgnr. All rights reserved.</p>
              <div className="space-x-4 mt-2">
                <Link href="/" className="underline text-[#000000] text-xs">
                  Privacy Policy
                </Link>
                <Link href="/" className="underline text-[#000000] text-xs">
                  Cookies Settings
                </Link>
              </div>
            </div>
            <div className="flex space-x-4 mt-4 lg:mt-0">
              <Link
                href="/"
                className="w-6 h-6 flex items-center justify-center"
              >
                <Image src={facebookLogo} alt="Facebook" />
              </Link>
              <Link
                href="/"
                className="w-6 h-6 flex items-center justify-center"
              >
                <Image src={instaLogo} alt="Instagram" />
              </Link>
              <Link
                href="/"
                className="w-6 h-6 flex items-center justify-center"
              >
                <Image src={twitterLogo} alt="Twitter" />
              </Link>
              <Link
                href="/"
                className="w-6 h-6 flex items-center justify-center"
              >
                <Image src={linkedinLogo} alt="LinkedIn" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
