import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Aditya Singh",
    position: "Co Founder",
    image: "/adi.jpg",
    description: "Aditya is the visionary behind our company, bringing years of experience in the tech industry. His leadership and innovative mindset have been instrumental in steering the company towards new heights. Aditya's commitment to excellence and passion for technology continue to inspire the entire team.",
  },
  {
    name: "Dinesh Jangid",
    position: "Co Founder",
    image: "",
    description: "Dinesh is a key pillar of our organization, known for his unwavering dedication and strategic thinking. His ability to tackle challenges head-on and his deep understanding of market dynamics make him an invaluable asset to the team. Dinesh's collaborative spirit and humility set a great example for all of us.",
  },
  {
    name: "Jeet Chandak",
    position: "Co Founder",
    image: "/jeet.jpg",
    description: "Jeet is a cornerstone of our company, contributing his expertise and enthusiasm to every project. His commitment to fostering a positive work environment and his knack for finding innovative solutions have significantly enhanced our operations. Jeet's humble nature and willingness to support his colleagues make him a cherished member of our team.",
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
