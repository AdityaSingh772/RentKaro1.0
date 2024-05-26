import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["rent, ", "sell, ", "buy, ", "earn money, "];

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4">
      <div className="text-7xl font-semibold mx-auto text-neutral-400 pb-[2rem]">
        <span className=" drop-shadow-lg">You can</span>
        <FlipWords words={words} /> <br />
        
      </div>
      <div className="text-4xl mx-auto font-normal text-neutral-400 dark:text-neutral-400">
      with <span className="bg-gradient-to-r font-bold from-[#2BC0E4] drop-shadow-lg to-[#EAECC6] inline-block text-transparent bg-clip-text">RentKaro</span>
      </div>
    </div>
  );
}
