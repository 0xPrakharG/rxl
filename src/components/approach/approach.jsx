import { SectionHeader } from "@/components/section-header";
import { ApproachCard } from "@/components/approach/approachCard";
import End2End from "../../../public/assets/end-2-end.svg";
import Agile from "../../../public/assets/agile.svg";

export const ApproachSection = () => {
  return (
    <div className="bg-approach mb-20 bg-no-repeat">
      <div className="mx-auto w-[90%] pt-52">
        <SectionHeader label="Our Approach" />
        <div className="grid grid-cols-3 gap-10">
          <div className="mt-5 flex flex-col items-start justify-start">
            <h1 className="text-left text-[40px] font-bold leading-[59px] tracking-wide text-[#252B42]">
              Meet RXL Genaisis
            </h1>
            <p className="mt-5 text-left text-xl font-medium tracking-wide text-[#737373]">
              At liftoff, NASA&apos;s Solid Rocket Boosters consume 11,000
              pounds of fuel per second. The time, cost, quality and most
              importantly - people - required to accelerate your client service
              requires no less effort. RXL Genaisis is our approach to getting
              you off the ground.
            </p>
          </div>
          <ApproachCard
            icon={End2End}
            title="End-to-End Support"
            desc="From initial consultation to implementation and beyond, we provide continuous support to ensure your success."
          />
          <ApproachCard
            icon={Agile}
            title="Agile and Adaptive"
            desc="We deploy the right mix of people, processes, data and technology to adapt to your evolving needs, ensuring long-term success."
          />
        </div>
      </div>
    </div>
  );
};
