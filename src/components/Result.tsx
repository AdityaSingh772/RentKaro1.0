import React from "react";
import Image from "next/image";

interface ResultPageProps {
    Size:any,
    college:any,
}


const Result:React.FC<ResultPageProps> = ({Size , college}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-black pt-3">
      <div className="w-full font-sans flex justify-start items-center my-1 border-y-2-gray-800">
        <span className="text-xl font-medium ml-[3.5rem] "><span className=" font-bold">{Size}</span> results found</span>
        {
          college &&
          <span className="text-xl font-normal mx-1">from {college}</span>
        }
       
      </div>
      
    </div>
  );
};

export default Result;
