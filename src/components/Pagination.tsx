"use client";
import React from 'react';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='pb-[2rem]'>
      <ul className="flex justify-center space-x-2">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a 
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }} 
              href='!#' 
              className="px-4 py-2 bg-blue-500 rounded hover:bg-black hover:text-white hover:border-2 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-700"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
