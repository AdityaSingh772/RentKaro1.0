import React, { useState, useEffect } from 'react';
import Result from '@/components/Result';
import ProductList from '@/components/ProductList';
import axios from 'axios';

interface Product {
  id: number;
  type:string,
  email:string;
  brand: string;
  title: string;
  description: string;
  price: string;
  photo: string;
  college: string;
  phone: string;
}

interface RentPageProps {
  searchRes?: Product[];
  college:any
}

const RentPage: React.FC<RentPageProps> = ({ searchRes , college }) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Product[]>("http://localhost:5000/api/items");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData()
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Product[]>("http://localhost:5000/api/items");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!searchRes) {
      fetchData();
    } else {
      setData(searchRes);
      setLoading(false);
    }
  }, [searchRes]);

return (
  <div className="w-full flex flex-col bg-black h-fit text-white">
    <Result Size={data.length} college={college} />
    {loading ? (
      <div className="flex justify-center items-center h-full text-blue-500">Loading...</div>
    ) : (
      <ProductList Products={data} />
    )}
    {/* <Catagories /> 
    <Footer /> */}
  </div>
);
};

export default RentPage;
