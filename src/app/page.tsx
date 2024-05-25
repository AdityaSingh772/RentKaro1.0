"use client"
import Image from "next/image";
import Search from "@/components/Search";
import RentPage from "./rent/page";
import {useUser} from "@auth0/nextjs-auth0/client"
import Firstpage from "@/components/Firstpage";
import ExtraDetailForm from "@/components/ExtraDetailForm"




export default function Home() {

  const {user,error,isLoading}=useUser();
//   return (
// <ExtraDetailForm/>
//   );

 
  
  if(user){
    return (
    
      <main>
          <Search/>
          <RentPage/>
          
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


