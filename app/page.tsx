import Image from "next/image";
import JobTitle from "./_components/job-title";
import JobPanel from "./_components/job-panel";
import JobRequirements from "./_components/job-requirements";
import AboutJob from "./_components/about-job";
import CompanyDetails from "./_components/company-details";
import Tab from "./_components/tab";

export default function Home() {
  return (
    <main className="max-w-[1700px] md:pt-[100px] mx-auto w-full">
      <Tab />
      <div className="lg:grid grid-cols-[1fr,auto] w-full border border-border">
        <div className="flex-1 flex flex-col">
          <JobTitle
            title="Senior Product Designer"
            location="Delaware, USA"
            posted="posted 2 days ago"
            salary="$200k - $300k"
            status
          />
          <JobRequirements
            skills={["Figma", "Illustrator", "XD"]}
            language="English"
            type="Full Time"
            yearsOfExperience={3}
          />
          <AboutJob />
          <CompanyDetails />
        </div>
        <JobPanel />
      </div>
    </main>
  );
}
