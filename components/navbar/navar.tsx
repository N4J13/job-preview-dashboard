import NavList from "./nav-list";
import { BellIcon, ChevronDownIcon } from "../icons";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function NavBar() {
  return (
    <nav
      className={cn(
        "h-[88px] flex md:fixed z-10 top-0 bg-white justify-between items-center w-full max-w-[1700px] mx-auto px-6  shadow-md shadow-shadow/10",
        // mobile design
        "relative"
      )}
    >
      <Image src="/logo.svg" width={80} height={80} alt="logo" />
      <NavList />
      <div className="flex items-center">
        <Button
          variant={"ghost"}
          size={"icon"}
          className="relative mr-[2px] rounded-full"
        >
          <div className=" relative after:w-[5px] after:h-[5px] after:bg-primary after:absolute after:rounded-full after:top-0 after:right-1 ">
            <BellIcon className="size-[22px] " />
          </div>
        </Button>
        <Avatar>
          <AvatarImage src="/atlassion.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ChevronDownIcon className="size-[10px] ml-2" />
      </div>
    </nav>
  );
}
