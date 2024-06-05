import React from "react";


interface ResultPageProps {
    Size:any,
    college:any,
}


const Result:React.FC<ResultPageProps> = ({Size , college}) => {
  return (
    <div className=" w-full flex flex-col text-white font-semibold bg-black">
      <div className="w-full font-sans flex border-y-2-gray-800">
        <span className="text-xl  font-semibold ml-[4.0rem]">{Size} Result found</span>
        {
          college &&
          <span className="text-xl mx-1">from {college}</span>
        }
       
      </div>
      
    </div>
  );
};

export default Result;
