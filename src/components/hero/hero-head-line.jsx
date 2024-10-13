import { Button } from "@/components/ui/button";

export const HeroHeadLine = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 pb-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-6xl font-bold leading-relaxed text-[#14293E]">
          Make the Move
        </h1>
        <p className="h-14 text-center text-2xl font-normal text-[#1C3A57]">
          Shift accounting & finance from reactive to proactive.
        </p>
      </div>
      <Button
        variant="default"
        size="xl"
        className="bg-[#026295] text-2xl font-bold text-[#F1F3F5] hover:border hover:border-[#026295] hover:bg-transparent hover:text-[#026295]"
      >
        Learn More
      </Button>
    </div>
  );
};
