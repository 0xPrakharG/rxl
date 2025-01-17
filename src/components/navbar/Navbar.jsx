"use client";

// import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { NavButton } from "@/components/navbar/nav-button";

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/industries",
    label: "Industries",
  },
  {
    href: "/about",
    label: "About Us",
  },
];

export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const router = useRouter();
  const pathname = usePathname();
  //   const isMobile = useMedia("(max-width: 1024px)", false);

  //   const onClick = (href) => {
  //     router.push(href);
  //     setIsOpen(false);
  //   };

  //   if (isMobile) {
  //     return (
  //       <Sheet open={isOpen} onOpenChange={setIsOpen}>
  //         <SheetTrigger>
  //           <Button
  //             variant="outline"
  //             size="sm"
  //             className="border-none bg-white/10 font-normal text-white outline-none transition hover:bg-white/20 hover:text-white focus:bg-white/30 focus-visible:ring-transparent focus-visible:ring-offset-0"
  //           >
  //             <Menu className="size-4" />
  //           </Button>
  //         </SheetTrigger>
  //         <SheetContent side="left" className="px-2">
  //           <nav className="flex flex-col gap-y-2 pt-6">
  //             {routes.map((route) => (
  //               <Button
  //                 key={route.href}
  //                 variant={route.href === pathname ? "secondary" : "ghost"}
  //                 onClick={() => onClick(route.href)}
  //                 className="w-full justify-start"
  //               >
  //                 {route.label}
  //               </Button>
  //             ))}
  //           </nav>
  //         </SheetContent>
  //       </Sheet>
  //     );
  //   }

  return (
    <nav className="hidden items-center gap-x-2 overflow-x-auto lg:flex">
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={pathname === route.href}
        />
      ))}
    </nav>
  );
};
