"use client"
import axios from 'axios';
import { useState } from 'react';
import { FiSearch, FiSliders } from 'react-icons/fi';
import RentPage from './RentPage';


const Search = () => {

  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  // const [filteredData, setFilteredData] = useState(Products);

  const handleSearch = async(e: React.ChangeEvent<HTMLFormElement>) => {

    e.preventDefault();
    try{
      const response = await axios.get(`http://localhost:5000/api/search?q=${query}`);
      setResult(response.data);
      console.log(result);
    }catch(e){
      console.log(e);
    }



  }

  return (
    <div className=''>
    <div className="bg-neutral-700 shadow-md p-4 flex items-center justify-between ">
      <div className="flex items-center space-x-4">
        <form onSubmit={handleSearch}>
        <div className="relative">
          <input
            type="text"
            placeholder="What are you looking for ?"
            onChange = {(e) => {setQuery(e.target.value)}}
            className=" bg-neutral-700 px-4 py-2 border rounded-full hover:border-blue-300 focus:outline-none focus:ring-2 focus:bg-white drop-shadow-2xl"
          />
          <button type='submit'>
          <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 font-[2rem] text-black hover:text-blue-300" />
          </button>
        </div>
        </form>

        {/* Price Dropdown */}
        {/* <div className="relative">
          <select className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>Any Price</option>
            <option>100-200</option>
            <option>200-300</option>
            <option>300-400</option>
            <option>400-500</option>
          </select>
        </div> */}

        {/* Beds Dropdown */}
        {/* <div className="relative">
          <select className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>for</option>
            <option>Men</option>
            <option>Women</option>
            <option>Chake</option>
            <option>Jeet</option>
          </select>
        </div> */}

        {/* Types Dropdown */}
        {/* <div className="relative">
          <select className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>Catagories</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Condo</option>
          </select>
        </div> */}

        {/* More Button */}
        {/* <button className="px-4 py-2 border rounded-full flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-green-500">
          <FiSliders className="text-gray-500" />
          <span>More</span>
        </button> */}
      </div>

      {/* This section will be used for selecting the college to view */}

      <div className="relative">
        <select className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2">
          <option>--College--</option>
          <option>NIT Rourkela</option> 
          
        </select>
      </div>
    </div>
    <RentPage
    searchRes = {result}
    />
    </div>
  );
};

export default Search;
