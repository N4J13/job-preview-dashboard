import Image from "next/image";

export default function CompanyDetails() {
  return (
    <div className="w-full border-b  py-10 border-border">
      <div className="2xl:max-w-[1250px] max-w-5xl px-5  mx-auto flex flex-col gap-y-8">
        <div className="flex items-center gap-3">
          <Image
            alt="Company Logo"
            src="/atlassion.png"
            width={40}
            height={40}
            className="rounded-md"
          />
          <h5 className="text-xl text-gray-500">Atlassion</h5>
        </div>
        <div className="grid grid-cols-2 gap-y-6 w-full max-w-3xl ">
          <div className="flex flex-col gap-2">
            <h5 className="text-sm text-gray-300">Company size</h5>
            <p className="text-gray-600 ">1k - 2k Employees</p>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-sm text-gray-300">Type</h5>
            <p className="text-gray-600 ">Private</p>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-sm text-gray-300">Sector</h5>
            <p className="text-gray-600 ">
              Information Technology, Infrastructure
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-sm text-gray-300">Funding</h5>
            <p className="text-gray-600 ">Bootstrapped</p>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-sm text-gray-300">Founded In</h5>
            <p className="text-gray-600 ">2019</p>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-sm text-gray-300">Founded By</h5>
            <p className="text-gray-600 ">
              <a
                target="_blank"
                href="https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Scott+Farquhar&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgGn2U5_lv-iJKoEW9GGV3oQ_U1KzHM3grBvdDJw8AP9jrnXyCRK6qNSYCb3jHdJP2aGUh_HIEtaCjacARkKoOWECb-5Ob0Mv9e_MI4c_vMY8PVDZWA6-OO6yqvbV1TIRgm4P4FtNTbK6rHh3ojk0CXz_ZgaKdVf6VpRiXhZ7YUAy8LzI5HMyryDEBGhju5Ama_FvECG7_qGa4tSKw7XIbHa99s9btrbgRBy-6z85_2p6BPYPhA%3D%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAXoECDYQAw"
              >
                Scott Farquhar
              </a>
              {", "}
              <a
                target="_blank"
                href="https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Mike+Cannon-Brookes&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgJsvrQUWPOKZ8iETJQdvnbU2UFD7BVWUbHmvxqkn_X6fnbX-LLuIjmm9FYDOCdLoN8dDFvHE1HsZUhT6XIGTrbZRGGDIDstquY_yluK6YQX1NkHtmo0wsp8wVD7ouAbjfDvaQHjO4Iyd2AKnCQbPH8-Ah5otgNPwHcJ39HScqiWv6SVxYRXUiznwfdbns6uKnydurua8JyyTlcxFT3lPFMTAfAAzqy-x0DxflUh6aHFtCEgFOChGuNdxmDlND1wruAK7SbM%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAnoECDYQBA"
              >
                Mike Cannon-Brookes
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
