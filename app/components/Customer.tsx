import React from "react";
import Image from "next/image";
import starIcon from "../Assets/testeniol-star.svg";
import customerImg1 from "../Assets/customerImg1.svg";
import cutomerImg2 from "../Assets/customerImg2.svg";
import customerImg3 from "../Assets/customerImg3.svg";
import leftArrow from "../Assets/leftArrow.svg";
import rightArrow from "../Assets/rightArrow.svg";

export default function CustomerTestimonials() {
  return (
    <section
      id="Customer Testimonial"
      className="h-full bg-[#F7F7F7] py-[112px] flex flex-col gap-[80px] items-start"
    >
      <div className="w-full max-w-[1280px] px-4 flex flex-col gap-[24px]">
        <h2 className="text-[48px] font-bold leading-[57.6px] text-left ml-14">
          Customer testimonials
        </h2>
        <p className="text-[18px] leading-[27px] text-left ml-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="w-full max-w-[1280px] px-4 flex flex-col gap-[48px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          <div className="h-[auto] w-full p-[16px] sm:p-[32px] flex flex-col gap-[24px] border-[1px] border-solid border-black ml-10">
            <div className="w-full flex gap-[4px]">
              <Image className="w-[20px]" src={starIcon} alt="star icon" />
              <Image className="w-[20px]" src={starIcon} alt="star icon" />
              <Image className="w-[20px]" src={starIcon} alt="star icon" />
              <Image className="w-[20px]" src={starIcon} alt="star icon" />
              <Image className="w-[20px]" src={starIcon} alt="star icon" />
            </div>
            <div className="w-full flex flex-col gap-[24px]">
              <p className="text-[18px] leading-[27px]">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.&quot;
              </p>
              <div className="w-full flex gap-[20px]">
                <Image
                  className="w-[56px] h-[56px] rounded-full"
                  src={customerImg1}
                  alt="customer Image-1"
                />
                <div className="w-full">
                  <p className="text-[16px] font-semibold">James Nduku</p>
                  <p className="text-[16px]">Software Developer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[auto] w-full p-[16px] sm:p-[32px] flex flex-col gap-[24px] border-[1px] border-solid border-black ml-8">
            <div className="w-full flex gap-[4px]">
              <Image className="w-[20px]" src={starIcon} alt="star icon" />
              <Image className="w-[20px]" src={starIcon} alt="star icon" />
              <Image className="w-[20px]" src={starIcon} alt="star icon" />
              <Image className="w-[20px]" src={starIcon} alt="star icon" />
              <Image className="w-[20px]" src={starIcon} alt="star icon" />
            </div>
            <div className="w-full flex flex-col gap-[24px]">
              <p className="text-[18px] leading-[27px]">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.&quot;
              </p>
              <div className="w-full flex gap-[20px]">
                <Image
                  className="w-[56px] h-[56px] rounded-full"
                  src={cutomerImg2}
                  alt="customer Image-2"
                />
                <div className="w-full">
                  <p className="text-[16px] font-semibold">Erick Kipkemboi</p>
                  <p className="text-[16px]">Scrum Master</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[auto] w-full p-[16px] sm:p-[32px] flex flex-col gap-[24px] border-[1px] border-solid border-black xl:flex ml-8">
            <div className="w-full flex gap-[4px]">
              <Image className="w-[20px]" src={starIcon} alt="star icon" />
              <Image className="w-[20px]" src={starIcon} alt="star icon" />
              <Image className="w-[20px]" src={starIcon} alt="star icon" />
              <Image className="w-[20px]" src={starIcon} alt="star icon" />
              <Image className="w-[20px]" src={starIcon} alt="star icon" />
            </div>
            <div className="w-full flex flex-col gap-[24px]">
              <p className="text-[18px] leading-[27px]">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.&quot;
              </p>
              <div className="w-full flex gap-[20px]">
                <Image
                  className="w-[56px] h-[56px] rounded-full"
                  src={customerImg3}
                  alt="customer Image-3"
                />
                <div className="w-full">
                  <p className="text-[16px] font-semibold">Stephen Kerubo</p>
                  <p className="text-[16px]">UI/UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[48px] w-full flex justify-between items-center mt-8">
          <div className="w-[72px] h-[8px] flex gap-[8px] my-5">
            <div className="rounded-full h-2 w-2 bg-black"></div>
            <div className="rounded-full h-2 w-2 bg-[#8D8D8D]"></div>
            <div className="rounded-full h-2 w-2 bg-[#8D8D8D]"></div>
            <div className="rounded-full h-2 w-2 bg-[#8D8D8D]"></div>
            <div className="rounded-full h-2 w-2 bg-[#8D8D8D]"></div>
          </div>
          <div className="w-[111px] h-[48px] flex gap-[15px]">
            <button className="w-12 h-12">
              <Image src={rightArrow} alt="right arrow" />
            </button>
            <button className="w-12 h-12">
              <Image src={leftArrow} alt="left arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
