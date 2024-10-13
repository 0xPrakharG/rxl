import { CTAButtonContainer } from "@/components/cta/cta-button-container";

export const CTA = () => {
  return (
    <div className="bg-cta bg-cover bg-no-repeat">
      <div className="flex flex-col items-center justify-between gap-10 py-20">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <h1 className="text-center text-[40px] font-bold leading-[59px] tracking-wide text-[#FBFDFE]">
            Ready to Take off?
          </h1>
          <p className="w-[50%] text-center text-xl font-medium tracking-wide text-[#EEF4F9]">
            From fulfilling immediate execution gaps to preparing for evolving
            client expectations, we&apos;re here to help
          </p>
        </div>
        <CTAButtonContainer />
      </div>
    </div>
  );
};
