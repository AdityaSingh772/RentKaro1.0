import React, { useState, useEffect } from 'react';
import Result from '@/components/Result';
import Pagination from '@/components/Pagination'
import ProductList from '@/components/ProductList';
import axios from 'axios';

interface Product {
  id: number;
  type: string;
  brand: string;
  title: string;
  description: string;
  price: number;
  photos: string[];
  college: string;
  phone: string;
  email: string;
}

interface RentPageProps {
  searchRes?: Product[];
  college: any;
}

const RentPage: React.FC<RentPageProps> = ({ searchRes, college }) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Product[]>(`${process.env.NEXT_PUBLIC_SERVER_API}/api/items`);
        const reversedData = response.data.reverse(); 
        setData(reversedData);
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
          const response = await axios.get<Product[]>(`${process.env.NEXT_PUBLIC_SERVER_API}/api/items`);
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    } else {
      setData(searchRes.reverse());
      setLoading(false);
    }
  }, [searchRes]);


  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


  return (
    <div className="container flex flex-col overflow-hidden pt-20">
      <Result Size={data.length} college={college} />
      {loading ? (
        <div className='bg-black text-white'>Loading</div>
      ) : (
        <>
        <ProductList Products={currentPosts} />
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />
        </>
        
      )}
    </div>
  );
};

export default RentPage;
