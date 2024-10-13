import { SectionDescription } from "@/components/section-description";
import { SectionHeader } from "@/components/section-header";
import { SectionTitle } from "@/components/section-title";
import { WhyUsKeys } from "@/components/why-us/why-us-keys";
import { WhyUsServicesCard } from "@/components/why-us/why-us-services-card";
import chip from "../../../public/assets/chip.svg";
import shield from "../../../public/assets/shield.svg";
import library from "../../../public/assets/library.svg";
import cart from "../../../public/assets/cart.svg";

const whyUsKeys = [
  "Increased access and understanding of data",
  "Automations to make your teams’ lives easier",
  "Access to additional resources when your team is stretched",
];

const whyUsServices = [
  {
    name: "Industry Experience",
    desc: "Finance and accounting is our mission control and data is the fuel that powers us",
    cta: "Learn More About Industry Experience",
    icon: chip,
  },
  {
    name: "Tailored Solutions",
    desc: "We know from experience that no two teams face the same challenges. That’s why we’ve developed a flexible set of accounting and finance, data, IT and compliance solutions that you can mix and match at any time.",
    cta: "Discover Our Tailored Solutions",
    icon: library,
  },
  {
    name: "Proprietary Methodologies",
    desc: "Our semantic data models are built to understand the unique relationships in your data sets – so you can tell a story with data, not just organize it.",
    cta: "See Our Proprietary Methodologies",
    icon: cart,
  },
  {
    name: "Proven Culture",
    desc: "Our award-winning employee culture and Life at Work approach has attracted personnel from top financial professional and technology companies.",
    cta: "Explore Proven Culture",
    icon: shield,
  },
];

export const WhyUsSection = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 pt-20">
      <SectionHeader label="Why Us?" />
      <div className="flex w-[56%] flex-col items-center justify-center gap-3">
        <SectionTitle title="Why RXL?" />
        <SectionDescription desc="Data is the foundation of accounting and finance. When data is organized, accessible and understood, you can get your work done." />
      </div>
      <div className="mt-10 flex w-[80%] items-center justify-between gap-20">
        {whyUsKeys.map((whyUsKey, index) => (
          <WhyUsKeys key={index} label={whyUsKey} />
        ))}
      </div>
      <div className="bg-gradient relative mt-10 h-[645px] w-[90%]">
        <div className="absolute left-[50%] top-0 grid w-full -translate-x-[50%] grid-cols-2 gap-[3px]">
          {whyUsServices.map((whyUsService, index) => (
            <WhyUsServicesCard
              key={index}
              title={whyUsService.name}
              desc={whyUsService.desc}
              cta={whyUsService.cta}
              icon={whyUsService.icon}
            />
          ))}
        </div>
        <div className="absolute left-[50%] top-[50.7%] h-[20px] w-[20px] -translate-x-[50%] rotate-45 rounded-sm bg-[#026295]"></div>
      </div>
    </div>
  );
};
