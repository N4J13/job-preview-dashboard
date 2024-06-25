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
        "h-[100px] flex md:fixed top-0 bg-white justify-between items-center w-full max-w-[1700px] mx-auto px-6  shadow-md shadow-shadow/10",
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
          className="relative mr-3 rounded-full"
        >
          <div className=" relative after:w-[6px] after:h-[6px] after:bg-primary after:absolute after:rounded-full after:top-0 after:right-0 ">
            <BellIcon className="size-5 " />
          </div>
        </Button>
        <Avatar>
          <AvatarImage height={10} width={10} src="/atlassion.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ChevronDownIcon className="size-3 ml-2" />
      </div>
    </nav>
  );
}
