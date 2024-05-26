"use client"
import Image from "next/image";
import Search from "@/components/Search";
import RentPage from "./rent/page";
import {useUser} from "@auth0/nextjs-auth0/client"
import Firstpage from "@/components/Firstpage";
import ExtraDetailForm from "@/components/ExtraDetailForm"

import axios from "axios";
import { useState, useEffect } from "react";
import Preloader from "@/components/PreLoader";




export default function Home(){

  const {user,error,isLoading}=useUser();

  const [data, setData] = useState([]);

  useEffect(() => {
      const fetchData = async () =>{
        try {
            const response = await axios.get("/api/items");
            setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
  } ,[]);





//preloader added
  if (isLoading) return (
    <div>
      <Preloader/>
    </div>
  );
//preloader end


  if(user){
    return (
    
      <main>
          <Search/>
          <RentPage  data={data}/>
          
      </main>
    );
  }
  else{
    return (
      <main>
        <Firstpage/>
      </main>
    )
  }
  

}

