import React, { useState, useEffect } from 'react';
import Result from '@/components/Result';
import ProductList from '@/components/ProductList';
import axios from 'axios';

interface Product {
  id: number;
  type: string;
  email: string;
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
  college: any;
}

const RentPage: React.FC<RentPageProps> = ({ searchRes, college }) => {
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
    fetchData();
  }, []);

  useEffect(() => {
    if (!searchRes) {
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
      fetchData();
    } else {
      setData(searchRes);
      setLoading(false);
    }
  }, [searchRes]);

  return (
    <div className="container h-screen w-full flex flex-col bg-gradient-to-b from-gray-100 to-gray-500 my-1">
      <Result Size={data.length} college={college} />
      {loading ? (
        <div className="bg-black text-white">Loading</div>
      ) : (
        <ProductList Products={data} />
      )}
    </div>
  );
};

export default RentPage;
