// "use client"
// import React from 'react'
// import Firstpage from './components/Firstpage'
// import { UserProvider } from '@auth0/nextjs-auth0/client'
// import { useUser } from '@auth0/nextjs-auth0/client';
// import Link from 'next/link';

// const page = () => {
//   const {user,error,isLoading}=useUser();
//   if(user){
//     console.log(user)
//     return (
//     <div>
//       <p>Heelo</p>
//       <Link href="/api/auth/logout">logout</Link>
//     </div>
//     )
    
//   }

//   if(isLoading){
//     return(<div>loading...</div>)
//   }
//   return (
    
//     <div>
//       <Firstpage/>
//     </div>
    
//   )
// }

// export default page
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
