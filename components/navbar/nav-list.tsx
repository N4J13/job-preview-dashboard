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
        "border border-border flex w-full  rounded-full py-2 px-2 gap-4 items-center justify-between",
        // mobile design
        "fixed bottom-4 left-1/2 -translate-x-1/2 bg-white max-w-[calc(100vw-20px)] ",
        // desktop design
        "md:static md:max-w-max md:translate-x-0",
        // hide on scroll
        !isVisible && "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto transition-opacity duration-200 ease-linear"
      )}
    >
      {navList.map((item, index) => {
        const isActive = item.href === pathname;
        return (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "flex  items-center gap-3 w-max h-full  px-4 py-4",
              "text-gray-100",
              // active state
              isActive && "text-white  bg-primary rounded-full"
            )}
          >
            {item.icon}
            <span className="text-sm">{item.title}</span>
          </Link>
        );
      })}
    </div>
  );
}
