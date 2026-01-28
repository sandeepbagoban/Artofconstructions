import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10 sm:py-10 px-4 sm:px-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center md:text-left tracking-wide">
        {/* Address */}
        <div className="text-[#502B4C] space-y-1 order-2 md:order-1 text-lg sm:text-lg">
          <p>ART–Construction SRL</p>
          <p>Hermesstraat, 24</p>
          <p>1930 Zaventem</p>
        </div>

        {/* Logo & Contact */}
        <div className="flex flex-col items-center text-[#502B4C] order-1 md:order-2">
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            width={260}
            height={80}
            className="w-[300px] h-auto"
            priority
          />
          <p className="text-lg sm:text-lg mt-4 mb-1">0486 / 61 91 89</p>
          <p className="text-lg sm:text-lg">info@artconstruction.be</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end items-center gap-6 order-3">
          {[
            { icon: "facebook-f", link: "#" },
            { icon: "instagram", link: "#" },
            { icon: "twitter", link: "#" },
            { icon: "linkedin-in", link: "#" }
          ].map(({ icon, link }, index) => (
            <Link
              key={index}
              href={link}
              className="flex justify-center items-center rounded-full transition-all duration-300 text-[#1F2937] w-12 h-12 hover:bg-[#D9AC69] hover:text-white"
            >
              <i className={`fab fa-${icon} text-xl`} />
            </Link>
          ))}
        </div>
      </div>

      <hr className="my-6 border-gray-200" />

      {/* Bottom Note */}
      <div className="text-center text-[#502B4C] text-md sm:text-md md:text-lg space-y-1 tracking-wide">
        <p>ART – Construction SRL</p>
        <p>VAT No.: BE 0456.299.183</p>
      </div>

      {/* Copyright + Privacy Policy */}
      <div className="mt-6 text-center text-lg text-gray-600 tracking-wide">
        <p>
          © {new Date().getFullYear()} ART – Construction SRL. All rights reserved. |{" "}
          <Link href="/privacy-policy" className="text-[#502B4C] hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
