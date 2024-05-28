import React from "react";
import Image from "next/image";

interface ResultPageProps {
    Size:any,
    college:any,
}


const Result:React.FC<ResultPageProps> = ({Size , college}) => {
  return (
    <div className="  h-96 w-full flex flex-col justify-center items-center bg-slate-200">
      <div className=" h-1/5 w-full font-sans flex justify-start items-center my-1 border-y-2-gray-800">
        <span className="text-xl font-medium mx-8 ">{Size} Result found</span>
        {
          college &&
          <span className="text-xl font-normal mx-1">from {college}</span>
        }
       
      </div>
      <div className=" h-4/5 w-full container flex justify-center items-center text-8xl font-serif font-normal ">
            {/* <Image src="/Nitr.jpeg" fill alt="" className="my-16 mx-4"/> */}
            <h1>Rent or Buy </h1>
      </div>
    </div>
  );
};

export default Result;
