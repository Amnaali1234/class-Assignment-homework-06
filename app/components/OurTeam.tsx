import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareDribbble } from "react-icons/fa6";

const OurTeam = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold text-[#000000] mb-4">Our Team</h3>
        <p className="text-lg text-[#000000] font-medium mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {/* team member-1 */}
        <div className="flex flex-col items-center p-6">
          <div className="w-24 h-24 mb-4">
            <Image
              src="/images/team-img-1.png"
              alt="James Nudku"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
          <h2 className="font-bold text-xl mb-2">James Nudku</h2>
          <p className="text-[#000000]">Marketing Coordinator</p>

          <div className="flex space-x-4 mt-4">
            <Link href="https://Linkedin.com" target="-blank">
              {" "}
              <FaLinkedin size={20} />
            </Link>
            <Link href="https://Twitter.com" target="-blank">
              {" "}
              <FaTwitter size={20} />
            </Link>
            <Link href="https://Dribble.com" target="-blank">
              {" "}
              <FaSquareDribbble size={20} />
            </Link>
          </div>
        </div>

        {/*  team member-2 */}
        <div className="flex flex-col items-center p-6">
          <div className="w-24 h-24 mb-4">
            <Image
              src="/images/team-img-2.png"
              alt="Joseph Munyambu"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
          <h2 className="font-bold text-xl mb-2">Joseph Munyambu</h2>
          <p className="text-[#000000]">Nursing Assistant</p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://Linkedin.com" target="-blank">
              {" "}
              <FaLinkedin size={20} />
            </Link>
            <Link href="https://Twitter.com" target="-blank">
              {" "}
              <FaTwitter size={20} />
            </Link>
            <Link href="https://Dribble.com" target="-blank">
              {" "}
              <FaSquareDribbble size={20} />
            </Link>
          </div>
        </div>

        {/* team Member-3 */}
        <div className="flex flex-col items-center p-6">
          <div className="w-24 h-24 mb-4">
            <Image
              src="/images/team-img-3.png"
              alt="Joseph Ngumbau"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
          <h2 className="font-bold text-xl mb-2">Joseph Ngumbau</h2>
          <p className="text-[#000000]">Medical Assistant</p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://Linkedin.com" target="-blank">
              {" "}
              <FaLinkedin size={20} />
            </Link>
            <Link href="https://Twitter.com" target="-blank">
              {" "}
              <FaTwitter size={20} />
            </Link>
            <Link href="https://Dribble.com" target="-blank">
              {" "}
              <FaSquareDribbble size={20} />
            </Link>
          </div>
        </div>

        {/* team Member-4 */}
        <div className="flex flex-col items-center p-6">
          <div className="w-24 h-24 mb-4">
            <Image
              src="/images/team-img-4.png"
              alt="Erick Kipkembol"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
          <h2 className="font-bold text-xl mb-2">Erick Kipkembol</h2>
          <p className="text-[#000000]">Web Designer</p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://Linkedin.com" target="-blank">
              {" "}
              <FaLinkedin size={20} />
            </Link>
            <Link href="https://Twitter.com" target="-blank">
              {" "}
              <FaTwitter size={20} />
            </Link>
            <Link href="https://Dribble.com" target="-blank">
              {" "}
              <FaSquareDribbble size={20} />
            </Link>
          </div>
        </div>

        {/* team Member-5 */}
        <div className="flex flex-col items-center p-6">
          <div className="w-24 h-24 mb-4">
            <Image
              src="/images/team-img-5.png"
              alt="Stephen Kerubo"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
          <h2 className="font-bold text-xl mb-2">Stephen Kerubo</h2>
          <p className="text-[#000000]">President of Sales</p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://Linkedin.com" target="-blank">
              {" "}
              <FaLinkedin size={20} />
            </Link>
            <Link href="https://Twitter.com" target="-blank">
              {" "}
              <FaTwitter size={20} />
            </Link>
            <Link href="https://Dribble.com" target="-blank">
              {" "}
              <FaSquareDribbble size={20} />
            </Link>
          </div>
        </div>

        {/* team Member-6 */}
        <div className="flex flex-col items-center p-6">
          <div className="w-24 h-24 mb-4">
            <Image
              src="/images/team-img-6.png"
              alt="John Leboo"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
          <h2 className="font-bold text-xl mb-2">John Leboo</h2>
          <p className="text-[#000000]">Dog Trainer</p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://Linkedin.com" target="-blank">
              {" "}
              <FaLinkedin size={20} />
            </Link>
            <Link href="https://Twitter.com" target="-blank">
              {" "}
              <FaTwitter size={20} />
            </Link>
            <Link href="https://Dribble.com" target="-blank">
              {" "}
              <FaSquareDribbble size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
