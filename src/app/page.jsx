import { ApproachSection } from "@/components/approach/approach";
import Hero from "@/components/hero/hero";
import { Testimonials } from "@/components/testimonials/testimonials";
import { WhatWeDoSection } from "@/components/what-we-do/what-we-do";
import { WhoWeAreSection } from "@/components/who-we-are/who-we-are";
import { WhyUsSection } from "@/components/why-us/why-us";

export const metadata = {
  title: "RXL Group",
  description:
    "RXL Group, Finance & Accounting Software Services, Data Transformation, QuickBooks Desktop, QuickBooks Online, Compliance and Risk management Services",
};

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <Hero />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <WhyUsSection />
      <ApproachSection />
      <Testimonials />
    </div>
  );
}
