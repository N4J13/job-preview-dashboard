export default function AboutJob() {
  return (
    <div className="w-full border-b  pt-8 pb-10 border-border">
      <div className="2xl:max-w-[1250px] max-w-5xl px-5  mx-auto ">
        <h5 className="text-gray-300 text-sm">About the job</h5>
        <div className="pt-3 flex flex-col text-[15px] gap-2 text-gray-600">
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-gray-600">Handle the UI/UX research design</li>
            <li>
              Work on researching on latest web applications designs & trends
            </li>
            <li>Work on conceptualizing and visualizing</li>
            <li>
              Work on creating graphics content and other graphic related works
            </li>
          </ol>
          <p>Benefits :</p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>Health insurance</li>
            <li>Provident Fund</li>
          </ul>
          <p>Schedule :</p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>Day shift</li>
          </ul>
          <p>Supplementry Pay Types :</p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>Performance bonus</li>
            <li>Yearly bonus</li>
          </ul>
          <p>Work Location: In person</p>
        </div>
      </div>
    </div>
  );
}
