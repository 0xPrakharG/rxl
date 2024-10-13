import Image from "next/image";
import card1 from "../../../public/assets/what-we-do-1.svg";
import card4 from "../../../public/assets/what-we-do-4.svg";
import card5 from "../../../public/assets/what-we-do-5.svg";
import Link from "next/link";

export const WhatWeDoCard = () => {
  return (
    <div className="mt-10 grid w-[80%] grid-cols-6">
      <div className="relative -z-20 col-span-2 overflow-hidden bg-[#026295] p-8">
        <Image
          src={card1}
          alt="Global-Talent-and-Offshoring"
          className="absolute -left-14 -top-16 -z-10"
        />
        <div className="flex flex-col gap-16">
          <h2 className="text-left text-3xl font-bold leading-[44px] text-[#FBFDFE]">
            Global Talent and Offshoring
          </h2>
          <div className="flex flex-col gap-5">
            <p className="text-left text-sm font-semibold text-[#FFFFFF]">
              Access to cost-effective, highly trained resources to help manage
              peak seasons.
            </p>
            <Link
              href=""
              className="text-left text-sm font-bold text-[#F4F8FB]"
            >
              Discover Strategic Solutions
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-2 overflow-hidden bg-[#F4F8FB] p-8">
        <div className="flex flex-col gap-16">
          <h2 className="text-left text-3xl font-bold leading-[44px] text-[#14293E]">
            QuickBlocks Excellence
          </h2>
          <div className="flex flex-col gap-5">
            <p className="text-left text-sm font-semibold text-[#6F6C90]">
              End-to-end management of QuickBooks, from data migration to
              optimization.
            </p>
            <Link
              href=""
              className="text-left text-sm font-bold text-[#026295]"
            >
              Discover Strategic Solutions
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-2 overflow-hidden bg-[#026295] p-8">
        <div className="flex flex-col gap-16">
          <h2 className="text-left text-3xl font-bold leading-[44px] text-[#FBFDFE]">
            Data Driven Transformation
          </h2>
          <div className="flex flex-col gap-5">
            <p className="text-left text-sm font-semibold text-[#FFFFFF]">
              Unlock the power of your data with our comprehensive data
              management solutions
            </p>
            <Link
              href=""
              className="text-left text-sm font-bold text-[#F4F8FB]"
            >
              Discover Strategic Solutions
            </Link>
          </div>
        </div>
      </div>
      <div className="relative -z-20 col-span-2 col-start-2 overflow-hidden bg-[#F4F8FB] p-8">
        <Image
          src={card4}
          alt="Global-Talent-and-Offshoring"
          className="absolute -left-7 -top-7 -z-10"
        />
        <div className="flex flex-col gap-16">
          <h2 className="text-left text-3xl font-bold leading-[44px] text-[#14293E]">
            Technology Solutions & IT Management
          </h2>
          <div className="flex flex-col gap-5">
            <p className="text-left text-sm font-semibold text-[#6F6C90]">
              We ensure seamless IT infrastructure integration and optimal
              performance
            </p>
            <Link
              href=""
              className="text-left text-sm font-bold text-[#026295]"
            >
              Discover Strategic Solutions
            </Link>
          </div>
        </div>
      </div>
      <div className="relative -z-20 col-span-2 col-start-4 overflow-hidden bg-[#026295] p-8">
        <Image
          src={card5}
          alt="Global-Talent-and-Offshoring"
          className="absolute -left-40 top-14 -z-10"
        />
        <div className="flex flex-col gap-16">
          <h2 className="text-left text-3xl font-bold leading-[44px] text-[#FBFDFE]">
            Compliance & Risk Management
          </h2>
          <div className="flex flex-col gap-5">
            <p className="text-left text-sm font-semibold text-[#FFFFFF]">
              Streamline your audit processes with cutting-edge automation
              solutions.
            </p>
            <Link
              href=""
              className="text-left text-sm font-bold text-[#F4F8FB]"
            >
              Discover Strategic Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
