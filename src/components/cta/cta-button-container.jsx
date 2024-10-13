"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export const CTAButtonContainer = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center gap-2">
      <Link href={pathname == "/" ? "/contact" : "/"}>
        <Button
          variant="cta"
          size="cta"
          className="text-center text-lg font-bold text-[#EEF4F9]"
        >
          {pathname == "/" ? "Contact Us" : "Home"}
        </Button>
      </Link>
      <Button
        variant="default"
        size="lg"
        className="hover:border-input bg-[#FBFDFE] text-center text-lg font-bold text-[#026295] hover:border hover:bg-transparent hover:text-[#FBFDFE]"
      >
        Learn More
      </Button>
    </div>
  );
};
