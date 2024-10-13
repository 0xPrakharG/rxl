import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";

export const WhoWeAreDescription = () => {
  return (
    <div className="flex w-[95%] flex-col items-center gap-8 pt-10">
      <div className="cursor-default rounded-full bg-[#026295] p-5">
        <Check className="text-[#FFFFFF]" />
      </div>
      <p className="text-center text-[34px] font-semibold capitalize leading-[46px] text-[#FFFFFF]">
        Experts in Accounting, Data, and Technology here to solve immediate
        execution challenges while partnering with you to prepare for the future
        of finance
      </p>
    </div>
  );
};
