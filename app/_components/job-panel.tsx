import {
  TrashIcon,
  PencilIcon,
  UsersIcon,
  PersonTickIcon,
  MessageIcon,
} from "@/components/icons";
import EyesIcon from "@/components/icons/eyes";
import { Button } from "@/components/ui/button";

export default function JobPanel() {
  return (
    <aside className="shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] h-full w-full flex flex-col gap-y-6 border-r border-border bg-neutral p-6">
      <div className="flex w-full items-center gap-4">
        <Button variant={"secondary"} className="w-full">
          <TrashIcon strokeWidth={1.5} className="size-[14px] mr-2" />
          Delete Job
        </Button>
        <Button className="w-full">
          <PencilIcon className="size-[14px] mr-2" />
          Edit Job
        </Button>
      </div>
      <div>
        {overview.map((item, index) => (
          <div key={index}>
            <div className="flex items-center p-4 justify-between gap-4">
              <div className="flex items-center gap-2">
                <item.icon className="size-4" />
                <div>
                  <p className="text-sm text-gray-500">{item.title}</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 font-semibold">
                {item.value}
              </p>
            </div>
            {index !== overview.length - 1 && (
              <div className="border-b border-border"></div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}

const overview = [
  {
    icon: UsersIcon,
    title: "Applicants",
    value: "400",
  },
  {
    icon: PersonTickIcon,
    title: "Matches",
    value: "100",
  },
  {
    icon: MessageIcon,
    title: "Messages",
    value: "147",
  },
  {
    icon: EyesIcon,
    title: "Views",
    value: "800",
  },
];
