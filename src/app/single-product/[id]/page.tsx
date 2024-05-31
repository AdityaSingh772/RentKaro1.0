"use client";
import { useEffect, useState } from 'react';
import ProductCarousel from '@/components/ProductCarousel';
import Singlepage from '@/components/Singlepage';
import axios from 'axios';


interface ProductData {
  id: number;
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
          const response = await axios.get(`http://localhost:5000/api/items`);
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