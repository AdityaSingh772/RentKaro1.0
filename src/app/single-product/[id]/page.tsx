import React from 'react';
import Image from 'next/image';
import ProductCarousel from '@/components/ProductCarousel';

const SingleProductPage = () => {
    const SingleProducts = [
        {
            id:1,
            first_name:"ewfew",
            email:"fef",
            contact_no:"9994951651",
            Hostel_name:"ef",
            product_name:"efwef",
            desc:"wefewfewf efwfwef efwefwefewf wefwef ",
            price:"$10"
        }]

    return (
        <>
            <div className="flex h-full">
                <div className="w-1/2 flex items-center justify-center ">
                    <ProductCarousel />
                </div>

                <div className=" w-1/2 bg-gray-300 flex flex-col items-center justify-center p-4 ">
                    {/* <!-- Content for the right side --> */}
                    {SingleProducts.map(SingleProduct => (
                        <div key={SingleProduct.id} className="w-[30rem] flex flex-col gap-5">
                            <h1 className="font-bold text-2xl">{SingleProduct.product_name}</h1>
                            <span>Price: {SingleProduct.price}</span>
                            <p>{SingleProduct.desc}</p>
                            <div className="flex gap-3">
                                <Image src="/cart.png" alt="" height={30} width={30} />
                                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    Add to WishList
                                </button>
                            </div>
                            {/* divs for bottom buttons on right side */}
                            <div className="flex py-5 mt-5 gap-9">
                                <button className="p-3 px-6 bg-fuchsia-200 text-xl">Buy</button>
                                <button className="p-3 px-6 bg-green-200 text-xl">Rent</button>
                            </div>
                            {/* SellerData */}
                            <div className="flex flex-col w-[30rem] mt-5">
                                <p className="font-bold text-2xl mb-4">Owner Details</p>
                                <h1 className="text-xl">{SingleProduct.first_name}</h1>
                                <div className="flex"><label>Hostel : </label><p> {SingleProduct.Hostel_name}</p></div>
                                <div className="flex"><label>Email ID: </label><p> {SingleProduct.email}</p></div>
                                <div className="flex"><label>Contact No : </label><p> {SingleProduct.contact_no}</p></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SingleProductPage;



{/* <div className="w-1/2 bg-gray-100 flex items-center justify-center p-4 h-screen">
            

<div className="grid grid-cols-2 gap-4 h-full w-full">
                <div className="bg-white p-2 flex items-center justify-center">
                    <img src="image1.jpg" alt="Image 1" className="object-cover h-full w-full"/>
                </div>
                <div className="bg-white p-2 flex items-center justify-center">
                    <img src="image2.jpg" alt="Image 2" className="object-cover h-full w-full"/>
                </div>
                <div className="bg-white p-2 flex items-center justify-center">
                    <img src="image3.jpg" alt="Image 3" className="object-cover h-full w-full"/>
                </div>
                <div className="bg-white p-2 flex items-center justify-center">
                    <img src="image4.jpg" alt="Image 4" className="object-cover h-full w-full"/>
                </div>
            </div>
        </div>  */}