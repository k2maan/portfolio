import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="mb-24 sm:mb-8 px-4 text-center text-gray-500 relative">
      <section className="flex flex-nowrap sm:flex-row items-center m-8 justify-center gap-2">
      <a
          className="p-4 flex items-center gap-2 rounded-full focus:scale-[1.10] hover:scale-[1.10] active:scale-105 transition cursor-pointer border bg-black text-white/100 dark:text-white/80 border-white/10"
          href="https://linkedin.com/in/k2maan"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="p-4 text-[1.3rem] flex items-center gap-2 rounded-full focus:scale-[1.10] hover:scale-[1.10] active:scale-105 transition cursor-pointer border bg-black text-white/100 dark:text-white/80 border-white/10"
          href="https://github.com/k2maan"
          target="_blank"
        >
          <BsGithub />
        </a>

        <a
          className="p-4 flex items-center gap-2 rounded-full focus:scale-[1.10] hover:scale-[1.10] active:scale-105 transition cursor-pointer border bg-black text-white/100 dark:text-white/80 border-white/10"
          href="mailto:ketuman333@gmail.com"
          target="_blank"
        >
          <MdEmail />
        </a>
      </section>
      <small className="mb-2 block text-xs">
        &copy; 2023 k2maan. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold"></span> Built with React & Next.js (App
        Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion.
      </p>
      <div className="bg-[#869be8] -z-10 absolute bottom-10 sm:left-[14rem] left-[3rem] right-0 top-0 h-full w-[20rem] overflow-hidden opacity-50 rounded-full blur-[9rem] sm:w-[70.75rem] dark:bg-[#3b4775]"></div>
    </footer>
  );
}
