import { Faqs } from "@/components/faq/faqs";

export const FaqSection = () => {
  return (
    <div className="mx-auto flex w-[70%] flex-col items-center justify-center pt-20 pb-40">
      <h1 className="text-center text-3xl font-semibold leading-[59px] tracking-wide text-[#14293E]">
        Frequently Asked Questions
      </h1>
      <p className="text-center text-lg font-medium text-[#0C384F]">
        Answers to Common Inquiries About <br />
        Our Services
      </p>
      <Faqs />
    </div>
  );
};
