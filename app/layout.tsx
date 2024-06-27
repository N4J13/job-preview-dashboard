import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar/navar";

export const metadata: Metadata = {
  title: "Job Preview Dashboard",
  description: "Job Preview Dashboard Built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={"font-sans max-w-[1800px] mx-auto"}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
