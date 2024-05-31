import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center text-white">
      <h1 className="text-blue-500 text-4xl font-bold my-8">About Us</h1>
      <div className="flex flex-col items-center flex-grow">
        <p className=" max-w-2xl text-justify">
          Welcome to our RentKaro app, your go-to platform for renting, lending, selling, or buying a items on college campuses.
          Whether you need a textbook for a semester, a bicycle for a week, or just some shirt for the weekend, 
          our app connects you with fellow students who have what you need. Our mission is to make college life 
          more affordable and convenient by fostering a community of sharing and sustainability. Join us in reducing 
          waste, saving money, and building connections within your college community. Support our mission by sharing this
          website with more people on the campus. 
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
