"use client"
import Image from "next/image";
import Search from "@/components/Search";
import RentPage from "../components/RentPage";
import {useUser} from "@auth0/nextjs-auth0/client"
import {Firstpage} from "@/components/Firstpage";
import ExtraDetailForm from "@/components/ExtraDetailForm"

import axios from "axios";
import { useState, useEffect } from "react";
import Preloader from "@/components/PreLoader";




export default function Home(){

  const {user,error,isLoading}=useUser();




  
//preloader added
if (isLoading) return (
  <div>
    <Preloader/>
  </div>
);
//preloader end
  // return (
  //   <Firstpage/>
  // )








  if(user){
    return (
    
      <main>
          <Search/>
          {/* <RentPage/> */}
          
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

