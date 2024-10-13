import Image from "next/image";
import market from "../../../public/assets/markets-point.svg";

export const WhoWeAreMarkets = ({ label }) => {
  return (
    <div className="flex h-full items-center gap-2 rounded-xl bg-[#FFFFFF] p-3">
      <div className="rounded-xl bg-[#026295]/10 p-2">
        <Image
          src={market}
          alt="offices-of-cfo-markets-small-to-mid-sized-accounting-firms-businesses"
          className="h-8 w-8"
        />
      </div>
      <p className="w-[70%] text-left text-base font-semibold leading-[22px] text-[#026295]">
        {label}
      </p>
    </div>
  );
};
