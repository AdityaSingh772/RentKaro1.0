import React from 'react';


interface Product {
  id: number;
  type:string,
  email:string;
  brand: string;
  title: string;
  description: string;
  price: string;
  photo: string;
  college: string;
  phone: string;
}

interface StatsProps {
  userData?: Product[];
  
}


const Stats: React.FC<StatsProps> = ({userData}) => {
  return (
    <div className="stats flex justify-between mb-5">
      <div className="stat bg-black p-5 rounded-lg text-center border-2 border-white hover:border-blue-500 flex-1 mx-5 drop-shadow-lg hover:-translate-y-1 duration-300">
        <h2 className="m-0 font-bold text-white hover:text-blue-500">{userData?userData.length:'0'}</h2>
        <p className="mt-1 text-neutral-400">Number of Ads you have put</p>
      </div>
      <div className="stat bg-black p-5 rounded-lg text-center border-2 border-white hover:border-blue-500 flex-1 mx-5 drop-shadow-lg hover:-translate-y-1 duration-300">
        <h2 className="m-0 font-bold text-white hover:text-blue-500">0</h2>
        <p className="mt-1 text-neutral-400">Renting</p>
      </div>
      <div className="stat bg-black p-5 rounded-lg text-center border-2 border-white hover:border-blue-500 flex-1 mx-5 drop-shadow-lg hover:-translate-y-1 duration-300">
        <h2 className="m-0 font-bold text-white hover:text-blue-500">0</h2>
        <p className="mt-1 text-neutral-400">Sold</p>
      </div>
      <div className="stat bg-black p-5 rounded-lg text-center border-2 border-white hover:border-blue-500 flex-1 mx-5 drop-shadow-lg hover:-translate-y-1 duration-300">
        <h2 className="m-0 font-bold text-white hover:text-blue-500">0</h2>
        <p className="mt-1 text-neutral-400">Purchases</p>
      </div>
    </div>
  );
};

export default Stats;
