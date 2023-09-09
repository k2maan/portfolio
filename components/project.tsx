"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { GoLinkExternal } from "react-icons/go";
import { FiGithub } from "react-icons/fi";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
}: ProjectProps) {
  return (
    <div
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-white max-w-[44rem] border border-black/20 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-100 transition dark:border-white/20 dark:text-white dark:bg-black  dark:hover:bg-white/5">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <ul className="flex flex-wrap gap-2 mt-2 mb-4">
            {tags.map((tag, index) => (
              <li
                className="bg-gray-200 dark:bg-white/10 px-3 py-1 text-[0.6rem] tracking-wider dark:text-white rounded-sm flex flex-wrap justify-center gap-2 text-xs dark:text-white/90"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>

          <p className="mt-2 mb-6 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <div className="flex items-center gap-3">
            {githubUrl && (
              <a
                className="text-[1.2rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border dark:bg-black dark:text-white/80 dark:border-white/10"
                href={githubUrl}
                target="_blank"
              >
                <FiGithub />
              </a>
            )}
            {liveUrl && (
              <a
                className="text-[1.2rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border dark:bg-black dark:text-white/80 dark:border-white/10"
                href={liveUrl}
                target="_blank"
              >
                <GoLinkExternal />
              </a>
            )}
          </div>
        </div>

        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          priority
          className="object-contain absolute hidden sm:block -top-1 -right-40 w-[30.25rem] rounded-none shadow-2xl
          transition 
          group-hover:scale-[1.05]
          group-hover:-translate-x-6
          group-hover:translate-y-3
          "
        />
        <div className="bg-blue-900 -z-10 absolute bottom-0 left-60 right-0 top-0 h-full w-full overflow-hidden ease-in-out opacity-50 rounded-full blur-[8rem] sm:w-[60.75rem] dark:bg-[#2c1f4a]"></div>
      </section>
    </div>
  );
}
