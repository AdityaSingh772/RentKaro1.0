import React from "react";

const OurTeam = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center text-white">
      <h1 className="text-blue-500 text-4xl font-bold my-8">Our-Team</h1>
      <div className="flex flex-col items-center flex-grow">
        <p className=" max-w-2xl text-justify">
          Welcome to RentKaro, your ultimate platform for renting, lending,
          selling, or buying items on college campuses. This app was developed
          by NIT Rourkela batchmates Jeet Chandak, Aditya Singh, and Dinesh
          Jangid. Utilizing the MERN Stack, we evenly divided our tasks and set
          clear goals. Our determination has resulted in creating a highly
          useful application for our college, aimed at helping fellow students
          efficiently manage their needs.
        </p>
      </div>
    </div>
  );
};

export default OurTeam;
