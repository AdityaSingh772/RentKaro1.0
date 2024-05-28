"use client"

import React from 'react'
import Result from '@/components/Result'
import ProductList from '@/components/ProductList'
import Catagories from "@/components/Catagories"
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'
import axios from 'axios'


const RentPage = () => {

  const [data, setData] = useState([]);

  
  useEffect(() => {
    const fetchData = async () =>{
      try {
          const response = await axios.get("http://localhost:5000/api/items");
          setData(response.data);
          console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
} ,[]);

  return (
    <div className="container h-screen w-full flex flex-col">
        <Result/>
        <ProductList Products = {data}/>
        <Catagories/>
        <Footer/>
    </div>
  )
}

export default RentPage