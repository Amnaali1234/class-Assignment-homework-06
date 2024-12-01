import Image from "next/image";
export default function LogoSection() {
  return (
    <div className="h-auto w-full flex flex-row">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center items-center border-r-4 border-white px-5 py-6 mt-0">
        <div className="flex flex-col text-center md:text-start justify-center">
          <h3 className="text-[#000000] bg-[#FFFF] font-bold text-3xl px-0 py-2">
            Trusted by 2000+ companies
          </h3>
          <h3 className="text-[#000000] bg-[#FFFF] font-bold text-3xl px-0 py-2">
            worldwide.
          </h3>
        </div>
        <div className="flex justify-end items-between">
          <Image
            src="/images/footer-image-2.png"
            alt="logo image-1"
            width={1280}
            height={228}
            className="logo image"
          />
        </div>
      </div>
    </div>
  );
}
