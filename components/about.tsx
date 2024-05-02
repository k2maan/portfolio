"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import aboutImg from "@/public/aboutImg.jpg";

export default function About() {
  return (
    <div className="relative">
      <SectionHeading>About</SectionHeading>
      <section
        className="mb-6 max-w-[45rem] lg:flex items-center text-center leading-7 sm:mb-12 scroll-mt-28 relative"
        id="about"
      >
        <div className="m-5 ml-2">
          <p className="mb-5 text-lg lg:text-left">
            Currently employed at{" "}
            <span className="underline font-bold text-[#6cbcf6]">
              <a href="https://bluecore.com">Bluecore</a>
            </span>{" "}
            as a <span className="font-bold">Forward Deployed Engineer</span>, working
            with the FDE team, managing product integrations for numerous clients.
          </p>

          <p className="mb-5 text-lg lg:text-left">
            <span className="font-bold text-[#efefab]">JavaScript</span> and the
            web continually fuel my passion for{" "}
            <span className="font-bold">creation</span>.
          </p>

          <p className="mb-6 text-lg lg:text-left">
            When I'm not coding, I'm either immersed in{" "}
            <span className="font-bold">movies and animes</span>, capturing{" "}
            <span className="font-bold">self-portraits</span>, or reading{" "}
            <span className="font-bold">something</span>.
          </p>

          <p className="mb-6 text-lg lg:text-left">
            I also consistently post JS and web dev related content on my{" "}
            <span className="underline font-bold text-[#9eb8d6]">
              <a href="https://www.linkedin.com/in/k2maan/">LinkedIn</a>
            </span>.
          </p>
        </div>
        <div className="flex justify-center items-center relative">
          <Image
            src={aboutImg}
            alt="Ketuman Vishwakarma"
            quality={95}
            priority
            className="w-[200px] mb-20 lg:mb-0 lg:w-[500px] rounded-xl"
          />
        </div>
      </section>
    </div>
  );
}
