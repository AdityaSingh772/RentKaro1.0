
"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import Link from "next/link";
import { FlipWordsDemo } from "./FlipWordsDemo";
export function Firstpage() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="w-screen h-screen relative flex flex-col gap-4 items-center justify-center px-4"
      >
       
        <FlipWordsDemo/>
        <div className="flex justify-evenly items-center gap-x-[2rem] h-[300px] px-0">
        <button className="btn text-white shadow-md shadow-[#EAECC6] hover:text-black py-4 px-10 rounded-md mr-4">
          <Link href="/api/auth/login">
            <span className="font-bold">Login</span>
           
          </Link>
          </button>
          <button className="btn text-white shadow-md shadow-[#EAECC6] hover:text-black py-4 px-10 rounded-md mr-4">
          <Link href="/api/auth/login">
            <span className="font-bold">Signup</span>
           
          </Link>
          </button>
      </div>
      </motion.div>
    </AuroraBackground>
  );
}
