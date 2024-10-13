import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export const FooterContact = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-left text-xl font-bold text-[#FFFFFF]">Contact us</h3>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-start gap-2">
          <Mail className="text-[#FFFFFF]" />
          <Link
            className="text-left text-lg font-normal text-[#FFFFFF]"
            href="mailto:"
          >
            contact@company.com
          </Link>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Phone className="text-[#FFFFFF]" />
          <Link
            className="text-left text-lg font-normal text-[#FFFFFF]"
            href="mailto:"
          >
            (91) 687 - 5892
          </Link>
        </div>
        <div className="flex items-center justify-start gap-2">
          <MapPin className="text-[#FFFFFF]" />
          <Link
            className="text-left text-lg font-normal text-[#FFFFFF]"
            href="mailto:"
          >
            India
          </Link>
        </div>
      </div>
    </div>
  );
};
