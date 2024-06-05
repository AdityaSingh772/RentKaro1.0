"use client";

import Search from "@/components/Search";

import {useUser} from "@auth0/nextjs-auth0/client"
import {Firstpage} from "@/components/Firstpage";




import Preloader from "@/components/PreLoader";


export default function Home() {
  const { user, error, isLoading } = useUser();


  if (isLoading)
    return (
      <div>
        <Preloader />
      </div>
    );
 

  if (user) {
    return (
      <main>
        
          <Search/>
      </main>
    );
  } else {
    return (
      <main>
        <Firstpage/>
      </main>
    );
  }
}
