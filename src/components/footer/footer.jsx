import { FooterCompanyInfo } from "@/components/footer/footer-company-info";
import { FooterCopyrights } from "@/components/footer/footer-copyrights";

export const Footer = () => {
  return (
    <div className="flex w-full bg-[#026295] pt-14">
      <div className="mx-auto flex w-[90%] flex-col items-start justify-between gap-28">
        <FooterCompanyInfo />
        <div className="flex w-full flex-col">
          <hr className="border-[0.5px] border-white" />
          <FooterCopyrights />
        </div>
      </div>
    </div>
  );
};
