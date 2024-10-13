import Link from "next/link";

export const FooterCopyrights = () => {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="text-left text-lg font-normal text-[#FFFFFF]">
          Copyright &copy;
        </p>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-left text-lg font-normal text-[#FFFFFF]">
          All Rights Reserved
        </p>
        <hr className="h-5 border-[0.5px]" />
        <Link
          className="text-left text-lg font-normal text-[#FFFFFF] underline"
          href=""
        >
          Terms and Conditions
        </Link>
        <hr className="h-5 border-[0.5px]" />
        <Link
          className="text-left text-lg font-normal text-[#FFFFFF] underline"
          href=""
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};
