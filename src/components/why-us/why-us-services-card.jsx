import Image from "next/image";
import Link from "next/link";

export const WhyUsServicesCard = ({ title, desc, icon, cta }) => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 bg-[#FBFDFE] px-10 py-8">
      <div className="flex flex-col items-center gap-4">
        <div className="flex w-fit items-center justify-center rounded-md bg-[#EDF8F8] p-3">
          <Image src={icon} alt={[title, desc]} />
        </div>
        <div className="flex w-[85%] flex-col gap-4">
          <h3 className="text-center text-2xl font-bold text-[#14293E]">
            {title}
          </h3>
          <p className="text-center text-lg font-medium text-[#737373]">
            {desc}
          </p>
        </div>
      </div>
      <div>
        <Link
          href=""
          className="text-center text-base font-bold capitalize text-[#7F7F7F] underline"
        >
          {cta}
        </Link>
      </div>
    </div>
  );
};
