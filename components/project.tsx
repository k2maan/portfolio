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
      <section className="max-w-[44rem] border rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] transition border-white/20 text-white bg-black">

      <Image
          src={imageUrl}
          alt={title}
          quality={95}
          priority
          className="object-contain absolute hidden sm:block -top-1 -right-40 w-[30.25rem] rounded-none shadow-2xl
          transition 
          group-hover:scale-[1.03]
          group-hover:-translate-x-2
          group-hover:translate-y-2
          "
        />

        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <ul className="flex flex-wrap gap-2 mt-2 mb-4">
            {tags.map((tag, index) => (
              <li
                className="bg-white/10 px-3 py-1 text-[0.6rem] tracking-wider rounded-sm flex flex-wrap justify-center gap-2 text-xs text-white/90"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>

          <p className="mt-2 mb-6 leading-relaxed text-white/70">
            {description}
          </p>
          <div className="flex items-center gap-3">
            {githubUrl && (
              <a
                className="text-[1.2rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border bg-black text-white/80 border-white/10"
                href={githubUrl}
                target="_blank"
              >
                <FiGithub />
              </a>
            )}
            {liveUrl && (
              <a
                className="text-[1.2rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border bg-black text-white/80 border-white/10"
                href={liveUrl}
                target="_blank"
              >
                <GoLinkExternal />
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
