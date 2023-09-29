"use client";

import React from "react";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <div className="relative">
      <section
        className="mb-6 max-w-[45rem] flex flex-col items-center text-center leading-7 sm:mb-12 scroll-mt-28 relative"
        id="about"
      >
        <SectionHeading>About</SectionHeading>
        <p className="mb-5 text-lg text-center">
          Currenly employed at <span className="font-bold text-[#d6af9e]"><a href="https://hotwax.co">HotWax Commerce</a></span>{" "} as an{" "}
          <span className="font-bold">Enterprise Software Engineer (Frontend)</span>,
          creating and enhancing their Shopify OMS product suite.
        </p>
        
        <p className="mb-6 text-lg text-center">
          <span className="font-bold text-[#efefab]">JavaScript</span> and the web continually
          ignite my passion for <span className="font-bold">innovation</span>{" "}
          and <span className="font-bold">creation</span>.
        </p>
      </section>
    </div>
  );
}
