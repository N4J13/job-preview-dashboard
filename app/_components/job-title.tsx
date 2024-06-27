import { MapPinIcon, CoinsIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";

type JobTitleProps = {
  title: string;
  location: string;
  posted: string;
  salary: string;
  status: boolean;
};

export default function JobTitle({
  title,
  location,
  posted,
  salary,
  status = false,
}: JobTitleProps) {
  return (
    <div className="w-full border-b  pt-10 pb-8 border-border">
      <div className="2xl:max-w-[1250px] max-w-5xl px-5  mx-auto flex flex-col gap-6">
        <div className="flex  flex-wrap items-center gap-[10px]">
          <h1 className="font-semibold text-gray-600 text-3xl lg:text-[32px]">
            {title}
          </h1>
          <div className="size-1 rounded-full bg-gray-50 " />
          <p className="text-gray-200 font-normal text-sm">{posted}</p>
          <Badge variant="success">
            <div className="size-[6px] rounded-full mr-1 bg-success-500 " />
            {status ? "Open" : "Closed"}
          </Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <MapPinIcon className="size-5 text-gray-400" />
            <p className="text-gray-400 text-lg">{location}</p>
          </div>
          <div className="size-1 rounded-full bg-gray-50 " />
          <div className="flex items-center gap-2">
            <CoinsIcon className="size-5 text-gray-400" />
            <p className="text-gray-400 text-lg">{salary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
