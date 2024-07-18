import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Aditya Singh",
    position: "Contributor",
    image: "/adi.jpg",
    description: "Aditya has been the driving force behind our project, leading the team with his innovative ideas and dedication. His leadership skills and passion for technology have been crucial in guiding us towards our goals.",
  },
  {
    name: "Dinesh Jangid",
    position: "Contributor",
    image: "/dinesh.jpg",
    description: "Dinesh has played a supportive role in our project with his strategic thinking and hard work. His ability to handle challenges and his understanding of key aspects have made him a valuable member of our team.",
  },
  {
    name: "Jeet Chandak",
    position: "Contributor",
    image: "/jeet.jpg",
    description: "Jeet has been a key contributor to our project, bringing his enthusiasm and support to the table. His positive attitude and willingness to assist have greatly benefited our team’s progress.",
  },
];



const OurTeam = () => {
  return (
    <div className="bg-black mt-[5rem] min-h-screen flex flex-col items-center text-white pb-[2rem]">
      <h1 className="text-blue-500 text-4xl font-bold my-8">Our Team</h1>
      <div className="flex flex-col items-center space-y-8 px-4 sm:px-8 lg:px-16">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg p-6 md:p-8 w-full max-w-4xl hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={500}
              height={500}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-4 md:mb-0 md:mr-8 hover:scale-105 transform transition-transform duration-300"
            />
            <div className="text-center md:text-left">
              <h2 className="text-blue-500 text-2xl font-bold">{member.name}</h2>
              <h3 className="text-blue-300 text-xl mb-2">{member.position}</h3>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
