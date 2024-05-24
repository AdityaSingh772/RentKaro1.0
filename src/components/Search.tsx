import { useState } from 'react';
import { FiSearch, FiSliders } from 'react-icons/fi';



const Products = [
  {
    id: 1,
    imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
    price: '5$',
    item: 'book',
    seller: 'Jeet',
    reviews: 2,
    likes: '80'
  },
  {
      id: 2,
      imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      price: '5$',
      item: 'book-hai',
      seller: 'Jeet',
      reviews: 2,
      likes: '80'
    },
    {
      id: 3,
      imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      price: '5$',
      item: 'book-thi',
      seller: 'Jeet',
      reviews: 2,
      likes: '80'
    },
    {
      id: 4,
      imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      price: '5$',
      item: 'book-jii',
      seller: 'Jeet',
      reviews: 2,
      likes: '80'
    },
    {
      id: 5,
      imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      price: '5$',
      item: 'book-kie',
      seller: 'Jeet',
      reviews: 2,
      likes: '80'
    },
    {
      id: 6,
      imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      price: '5$',
      item: 'book-hoo',
      seller: 'Jeet',
      reviews: 2,
      likes: '80'
    },
    {
      id: 7,
      imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      price: '5$',
      item: 'book-uuu',
      seller: 'Jeet',
      reviews: 2,
      likes: '80'
    },
]

const Search = () => {

  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(Products);





  return (
    <div className="bg-white shadow-md p-4 flex items-center justify-between my-1 border-y-2-gray-800">
      <div className="flex items-center space-x-4">
        {/* Location Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name..."
            className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            value={query}
            onChange={handleSearch}
          />
          <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Price Dropdown */}
        <div className="relative">
          <select className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>Any Price</option>
            <option>100-200</option>
            <option>200-300</option>
            <option>300-400</option>
            <option>400-500</option>
          </select>
        </div>

        {/* Beds Dropdown */}
        <div className="relative">
          <select className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>for</option>
            <option>Men</option>
            <option>Women</option>
            <option>Chake</option>
            <option>Jeet</option>
          </select>
        </div>

        {/* Types Dropdown */}
        <div className="relative">
          <select className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>Catagories</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Condo</option>
          </select>
        </div>

        {/* More Button */}
        <button className="px-4 py-2 border rounded-full flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-green-500">
          <FiSliders className="text-gray-500" />
          <span>More</span>
        </button>
      </div>

      {/* Sort By Newest Dropdown */}
      <div className="relative">
        <select className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500">
          <option>Sort by: Newest</option>
          <option>Oldest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
