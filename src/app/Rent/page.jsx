import React from 'react'
import Result from '@/components/Result'
import ProductList from '@/components/ProductList'
import Catagories from "@/components/Catagories"
import Footer from '@/components/Footer'


const RentPage = ({data}) => {
  return (
    <div className="container h-screen w-full flex flex-col">
        <Result/>
        <ProductList data = {data}/>
        <Catagories/>
        <Footer/>
    </div>
  )
}

export default RentPage