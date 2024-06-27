"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

const tabs = ["Job Preview", "Applicants", "Match", "Messages"];

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
  customID?: string;
}

const Tab = ({ text, selected, setSelected, customID }: TabProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected ? "text-primary font-semibold" : "hover:text-gray-600"
      } relative rounded-md px-2 py-1  font-medium text-gray-200 transition-colors duration-300 focus-within:outline-primary/50`}
    >
      <span className="relative text-nowrap ">{text}</span>
      {selected && (
        <motion.div
          className="absolute left-0 top-3 flex size-full h-full w-full items-end justify-center"
          layoutId={customID + "linetab"}
          transition={{ type: "spring", duration: 0.4, bounce: 0, delay: 0.1 }}
        >
          <span className=" h-[2px] w-[50%] rounded-t-full bg-primary"></span>
        </motion.div>
      )}
    </button>
  );
};

interface LineTabProps {
  center?: boolean;
  customID?: string;
}

const LineTabs = ({ center, customID }: LineTabProps) => {
  const [selected, setSelected] = useState<string>(tabs[0]);
  return (
    <div className="2xl:max-w-[1650px] max-w-[88rem] px-5 border-border border-b mx-auto flex flex-col ">
      <div
        className={cn(
          "py-3 flex  items-center w-full h-full overflow-x-auto gap-8 lg:gap-[50px]",
          center && "justify-center"
        )}
      >
        {tabs.map((tab) => (
          <Tab
            text={tab}
            selected={selected === tab}
            setSelected={setSelected}
            key={tab}
            customID={customID}
          />
        ))}
      </div>
    </div>
  );
};

export default LineTabs;
