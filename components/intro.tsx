"use client";
import Image from "next/image";
import React from "react";
import profileImg from "@/public/profile.jpg";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Intro() {
  return (
    <section
      id="home"
      className="mb-[20rem] max-w-[50rem] mt-[8rem] sm:mt-0 sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              className="w-32 rounded-full object-cover"
              quality={90}
              priority={true}
              src={profileImg}
              alt="Ketuman's profile image"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl lg:text-5xl flex flex-col justify-items-start"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold uppercase">Ketuman Vishwakarma</span>
        <span className="text-center italic text-sm sm:text-xl underline decoration-[#45578d]">
          Software Engineer / Frontend Developer
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-nowrap sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="p-4 flex items-center gap-2 rounded-full focus:scale-[1.10] hover:scale-[1.10] active:scale-105 transition cursor-pointer border bg-black text-white/80 border-white/10"
          href="https://linkedin.com/in/k2maan"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="p-4 text-[1.3rem] flex items-center gap-2 rounded-full focus:scale-[1.10] hover:scale-[1.10] active:scale-105 transition cursor-pointer border bg-blacktext-white/80 border-white/10"
          href="https://github.com/k2maan"
          target="_blank"
        >
          <BsGithub />
        </a>

        <a
          className="p-4 flex items-center gap-2 rounded-full focus:scale-[1.10] hover:scale-[1.10] active:scale-105 transition cursor-pointer border bg-black text-white/80 border-white/10"
          href="mailto:ketuman333@gmail.com"
          target="_blank"
        >
          <MdEmail />
        </a>
      </motion.div>
    </section>
  );
}
