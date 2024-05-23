import React from 'react'
import Result from '@/components/Result'
import ProductList from '@/components/ProductList'

const RentPage = () => {
  return (
    <div className="container h-screen w-full flex flex-col">
        <Result/>
        <ProductList/>
    </div>
  )
}

export default RentPage
