import React from "react";
import Image from "next/image";


const Result = () => {
  return (
    <div className="  h-96 w-full flex flex-col justify-center items-center bg-slate-100">
      <div className=" h-1/5 w-full font-sans flex justify-start items-center my-1 border-y-2-gray-800">
        <h1 className="text-3xl font-medium mx-8 ">69 Result </h1>
        <p className="text-xl font-normal mx-1">from NIT Rourkela</p>
      </div>
      <div className=" h-4/5 w-full container flex justify-center items-center text-8xl font-serif font-normal ">
            {/* <Image src="/Nitr.jpeg" fill alt="" className="my-16 mx-4"/> */}
            <h1>Rent or Buy </h1>
      </div>
    </div>
  );
};

export default Result;
