import React from 'react'
import Result from '@/components/Result'
import ProductList from '@/components/ProductList'
import Catagories from "@/components/Catagories"
import Footer from '@/components/Footer'

const RentPage = () => {
  return (
    <div className="container h-screen w-full flex flex-col">
        <Result/>
        <ProductList/>
        <Catagories/>
        <Footer/>
    </div>
  )
}

export default RentPage