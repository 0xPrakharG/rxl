import Image from "next/image";
import logo from "../../../public/assets/logo.svg";
import { Navbar } from "@/components/navbar/Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed left-[50%] top-0 z-50 mx-auto flex h-[87px] w-full max-w-screen-2xl -translate-x-[50%] items-center justify-between bg-[#026295] pl-5">
      <div className="flex items-center">
        <Image src={logo} alt="RXL logo" height={100} width={100} />
      </div>
      <Navbar />
      <Link
        href="/contact"
        className="flex h-full items-center justify-center bg-[#ffffff] px-16 text-[18px] font-bold leading-6 text-[#026295]"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default Header;
