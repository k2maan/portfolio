import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ketuman Vishwakarma",
  description:
    "Software Engineer with a strong passion for creating web experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative pt-28 sm:pt-36 bg-black text-gray-50 text-opacity-90 font-poppins`}
      >
        <div className="absolute top-[-6rem] -z-10 right-[11rem] h-[25.25rem] w-[31.25rem] rounded-full blur-[14rem] sm:blur-[16rem] sm:w-[34.75rem] bg-[#773966]"></div>
        <div className="absolute top-[-1rem] -z-10 left-[-35rem] h-[41.25rem] sm:h-[31.25rem] w-[50rem] rounded-full blur-[14rem] sm:blur-[16rem] sm:w-[48.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#3c2c5a]"></div>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
