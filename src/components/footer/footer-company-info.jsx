import Image from "next/image";
import logo from "../../../public/assets/logo.svg";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

import { FooterLinks } from "@/components/footer/footer-links";
import { FooterContact } from "@/components/footer/footer-contact";

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Case Studies", "Reviews", "Updates"],
  },
  {
    title: "Company",
    links: ["About", "Contact Us", "Careers", "Culture", "Blog"],
  },
  {
    title: "Support",
    links: [
      "Getting Started",
      "Help Center",
      "Server Status",
      "Report a Bug",
      "Chat Supoort",
    ],
  },
];

export const FooterCompanyInfo = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex w-[23%] flex-col items-start gap-5">
        <Image src={logo} alt="rxl-logo" />
        <p className="w-full text-left text-lg font-medium leading-[30px] text-[#FFFFFF]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
        </p>
        <div className="flex items-center gap-5">
          <FaFacebookF className="size-8 text-[#FFFFFF]" />
          <FaXTwitter className="size-8 text-[#FFFFFF]" />
          <RiInstagramFill className="size-8 text-[#FFFFFF]" />
          <FaLinkedinIn className="size-8 text-[#FFFFFF]" />
          <FaYoutube className="size-8 text-[#FFFFFF]" />
        </div>
      </div>
      {footerLinks.map((footerLink, index) => (
        <FooterLinks
          key={index}
          title={footerLink.title}
          links={footerLink.links}
        />
      ))}
      <FooterContact />
    </div>
  );
};
