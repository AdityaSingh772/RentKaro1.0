"use client";
import { useEffect, useState } from 'react';
import ProductCarousel from '@/components/ProductCarousel';
import Singlepage from '@/components/Singlepage';
import axios from 'axios';

// const SingleProductPage = () => 
    // const SingleProducts = [
    //     {
    //         id:1,
    //         first_name:"ewfew",
    //         email:"fef",
    //         contact_no:"9994951651",
    //         Hostel_name:"ef",
    //         product_name:"efwef",
    //         desc:"wefewfewf efwfwef efwefwefewf wefwef ",
    //         price:"$10"
    //     }]


interface ProductData {
  id: number;
  email:string;
  type:string;
  brand: string;
  title: string;
  description: string;
  price: string;
  photo: string;
  college: string;
  phone: string;
}

interface MyComponentProps {
  Product: ProductData[];
}

const SingleProductPage = ({ params }: { params: { id: string } }) => {
    const [data, setData] = useState<MyComponentProps>({ Product: [] });
    const id = params.id;
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_API}/api/items`);
          const product = response.data.find((item: ProductData) => item.id === parseInt(id));
          console.log(product);
          setData({ Product: product? [product] : [] });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, [id]);
  
    return (

      <>
        <div className="flex h-full">
          <div className="w-1/2 flex items-center justify-center">
            <ProductCarousel 
              images={[data.Product[0]?.photo]} // Pass an array of image URLs
            />
          </div>
          {data.Product.length > 0 && (
              <Singlepage 
                Product={data.Product[0]}
                Id={id}
                
              />
            )}
        </div>
      </>


    );
  };
  export default SingleProductPage;