"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { skillsData } from "@/lib/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function About() {
  return (
    <div className="relative">
      <motion.section
        className="mb-6 max-w-[45rem] flex flex-col items-center text-center leading-7 sm:mb-12 scroll-mt-28 relative"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
      >
        <SectionHeading>About</SectionHeading>
        <p className="mb-6 text-lg text-center">
          I'm a <span className="font-bold">2022 graduate</span>, currently
          working with <span className="font-bold">HotWax Commerce</span>, in
          Indore.{" "}
        </p>
        <p className="mb-5 text-lg text-center">
          As a{" "}
          <span className="font-bold">
            Enterprise Software Engineer
          </span>{" "}
          at HotWax Commerce, I've contributed significantly to the success of
          the product by{" "}
          <span className="font-bold">building multiple features</span> for the
          OMS product suite.{" "}
        </p>
        <p className="mb-4 text-lg text-center">Techs of my interest include:</p>
        <ul className="flex mb-2 flex-wrap justify-center gap-2 text-md text-gray-800 dark:text-white/90">
          {skillsData.proficient.map((skill, index) => (
            <motion.li
            className="rounded-sm px-2.5 py-2 bg-white dark:bg-black"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
        <ul className="flex mb-6 flex-wrap justify-center gap-2 text-sm text-gray-800 dark:text-white/90">
          {skillsData.canWorkWith.map((skill, index) => (
            <motion.li
              className="rounded-sm px-2.5 py-2 bg-white dark:bg-black"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
        <p className="mb-6 text-lg text-center">
          <span className="font-bold">JavaScript</span> and the web continually
          ignite my passion for <span className="font-bold">innovation</span>{" "}
          and <span className="font-bold">creation</span>.
        </p>
        <div className="bg-pink-200 -z-10 absolute bottom-0 -left-30 -right-10 top-4 overflow-hidden ease-in-out opacity-50 rounded-full blur-[12rem] dark:blur-[12rem] sm:w-[20.75rem] h-[35rem] dark:bg-[#253a4e]"></div>
        <div className="bg-blue-200 -z-10 absolute bottom-0 -left-14 right-0 top-10 h-full overflow-hidden ease-in-out opacity-50 rounded-full blur-[10rem] dark:blur-[13rem] sm:w-[30.75rem] dark:bg-[#4b254e]"></div>
        <p className="mb-6 text-lg text-center">
          To explore my <span className="font-bold">career, expertise and skillset</span> {" "} 
          you can check my resume:
        </p>
        <a
          className="mb-28 font-bold w-[16rem] bg-white px-4 py-2 flex items-center justify-center gap-2 rounded-md outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer  dark:bg-black"
          href="https://docs.google.com/document/d/1K-oCcUfy9ARQP7O6ag2bPBHmlScOQy4QlIVAG3xaCfc/edit?usp=sharing"
          target="_blank"
        >
          Resume <HiDownload className="opacity-80" />
        </a>
      </motion.section>
    </div>
  );
}
