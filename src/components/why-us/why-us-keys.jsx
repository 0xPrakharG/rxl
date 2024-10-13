import { Check } from "lucide-react";

export const WhyUsKeys = ({ label }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center rounded-full bg-[#026295] p-3">
        <Check className="text-white" />
      </div>
      <p className="text-left text-xl font-semibold">{label}</p>
    </div>
  );
};
