"use client";

import { navList } from "@/data/nav-links";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavList() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        "border border-border flex rounded-full py-[5px] px-2 gap-4 items-center justify-between",
        // mobile design
        "fixed bottom-4 left-1/2 -translate-x-1/2 bg-white max-w-[calc(100vw-20px)] ",
        // desktop design
        "md:static w-[415px] max-w- md:translate-x-0",
        // hide on scroll
        !isVisible &&
          "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto transition-opacity duration-200 ease-linear"
      )}
    >
      {navList.map((item, index) => {
        const isActive = item.href === pathname;
        const isMessage = item.title === "Messages";
        return (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "flex  items-center gap-2 w-max h-full   px-3 py-3",
              "text-gray-100",
              // active state
              isActive &&
                "text-white  bg-primary border-2 border-border-secondary rounded-full"
            )}
          >
            <div className="relative">
              {isMessage && (
                <span
                  className={cn(
                    "absolute -top-[2px] -right-[1px] h-1 w-1 bg-primary rounded-full",
                    isActive && "bg-white"
                  )}
                />
              )}
              {item.icon}
            </div>
            <span className="text-sm">{item.title}</span>
          </Link>
        );
      })}
    </div>
  );
}
