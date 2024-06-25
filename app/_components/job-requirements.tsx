import { Figma, Illustrator, XD } from "@/components/logos";
import { Badge } from "@/components/ui/badge";

type JobRequirementsProps = {
  skills: string[];
  language: string;
  type: "Full Time" | "Part Time" | "Contract" | "Internship";
  yearsOfExperience: number;
};

export default function JobRequirements({
  skills,
  language,
  type,
  yearsOfExperience,
}: JobRequirementsProps) {
  return (
    <div className="w-full border-b  py-10 border-border">
      <div className="2xl:max-w-[1250px] max-w-5xl px-5  mx-auto flex flex-wrap gap-x-32">
        <div className="max-w-[62rem] w-full grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-1 flex-col gap-3">
            <h5 className="text-sm text-gray-300">Skills Required</h5>
            <div className="flex flex-col gap-2">
              {skills.map((skill: string) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="rounded-md px-[6px] py-1 w-min border-border-variant"
                >
                  <SkillIcon skill={skill} className="size-4 mr-2" />
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <h5 className="text-sm text-gray-300">Preffered Language</h5>
            <p className="text-gray-600 font-semibold">{language}</p>
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <h5 className="text-sm text-gray-300">Type</h5>
            <p className="text-gray-600 font-semibold">{type}</p>
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <h5 className="text-sm text-gray-300">Years of Experience</h5>
            <p className="text-gray-600 font-semibold">
              {yearsOfExperience}+ Years of Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const SkillIcon = ({
  skill,
  className,
}: {
  skill: string;
  className: string;
}) => {
  switch (skill) {
    case "Figma":
      return <Figma className={className} />;
    case "Illustrator":
      return <Illustrator className={className} />;
    case "XD":
      return <XD className={className} />;
    default:
      return null;
  }
};
