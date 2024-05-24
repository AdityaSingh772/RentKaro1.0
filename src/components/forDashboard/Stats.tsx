import React from 'react';


const Stats: React.FC = () => {
  return (
    <div className="stats flex justify-between mb-5">
      <div className="stat bg-white p-5 rounded-lg text-center flex-1 mx-5 drop-shadow-lg hover:-translate-y-1 duration-300">
        <h2 className="m-0 font-bold">0</h2>
        <p className="mt-1 text-gray-600">Rented</p>
      </div>
      <div className="stat bg-white p-5 rounded-lg text-center flex-1 mx-5 drop-shadow-lg hover:-translate-y-1 duration-300">
        <h2 className="m-0 font-bold">0</h2>
        <p className="mt-1 text-gray-600">Renting</p>
      </div>
      <div className="stat bg-white p-5 rounded-lg text-center flex-1 mx-5 drop-shadow-lg hover:-translate-y-1 duration-300">
        <h2 className="m-0 font-bold">0</h2>
        <p className="mt-1 text-gray-600">Sold</p>
      </div>
      <div className="stat bg-white p-5 rounded-lg text-center flex-1 mx-5 drop-shadow-lg hover:-translate-y-1 duration-300">
        <h2 className="m-0 font-bold">0</h2>
        <p className="mt-1 text-gray-600">Purchases</p>
      </div>
    </div>
  );
};

export default Stats;
