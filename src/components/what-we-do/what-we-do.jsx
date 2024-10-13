import { SectionHeader } from "@/components/section-header";
import { SectionTitle } from "@/components/section-title";
import { SectionDescription } from "@/components/section-description";
import { WhatWeDoCard } from "@/components/what-we-do/what-we-do-card";

export const WhatWeDoSection = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 py-20">
      <SectionHeader label="What do we do?" />
      <div className="flex w-[56%] flex-col items-center justify-center gap-3">
        <SectionTitle title="Global expertise for local challenges" />
        <SectionDescription desc="Equipping you with flexible resources to move from reactive to proactive, from legacy to innovation, and from data silos to data autonomy." />
      </div>
      <WhatWeDoCard />
    </div>
  );
};
