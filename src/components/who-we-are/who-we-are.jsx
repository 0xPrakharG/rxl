import { WhoWeAreDescription } from "@/components/who-we-are/who-we-are-description";
import { WhoWeAreContainer } from "@/components/who-we-are/who-we-are-container";

export const WhoWeAreSection = () => {
  return (
    <div className="bg-heroImage bg-cover bg-no-repeat">
      <div className="flex h-full w-full flex-col items-center justify-between gap-14 bg-[#02629580]">
        <WhoWeAreDescription />
        <WhoWeAreContainer />
      </div>
    </div>
  );
};
