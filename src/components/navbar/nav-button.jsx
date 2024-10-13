import Link from "next/link";

import { cn } from "@/lib/utils.js";
import { Button } from "@/components//ui/button";
import { FaCaretDown } from "react-icons/fa";

export const NavButton = ({ href, label, isActive }) => {
  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn(
        "w-full justify-between border-none text-[18px] font-bold leading-6 text-white outline-none transition hover:bg-white/20 hover:text-white focus:bg-white/30 focus-visible:ring-transparent focus-visible:ring-offset-0 lg:w-auto",
        isActive ? "bg-white/10 text-white" : "bg-transparent",
      )}
    >
      <Link href={href} className="flex items-center justify-center gap-2">
        {label}
        {(label == "Industries" || label == "Services") && <FaCaretDown />}
      </Link>
    </Button>
  );
};
