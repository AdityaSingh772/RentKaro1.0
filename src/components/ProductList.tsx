import Image from 'next/image';
import { title } from 'process';
import { FiHeart } from 'react-icons/fi';


interface JsonData {
  id: number;
  brand: string,
  title: string,
  description: string,
  price: string,
  photo: string,
  college: string,
  phone: string,
  
}


interface MyComponentProps {
  Products: [JsonData]; 
}

const ProductList:React.FC<MyComponentProps> = ({Products}) => {


  return (
    <div className="bg-gray-100 p-4 m-10 rounded-lg ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto h-fit scroll-smooth">
        {Products.map((Products) => (
          <div key={Products.id} className="bg-white rounded-lg shadow-md p-4 relative">
            <img src={Products.photo} alt="Products" className="w-full h-48 object-cover rounded-lg"  />
            <div className="absolute top-4 right-4">
              <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg focus:outline-none">
                <FiHeart className="text-red-500" />
              </button>
            </div>
            <div className="mt-4 flex justify-between">
              <button className="bg-b1 text-white py-2 px-4 rounded-full shadow-md hover:bg-b3">Rent</button>
              <button className="bg-b2 text-white py-2 px-4 rounded-full shadow-md hover:bg-b4">Buy</button>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-bold">{Products.price}</h2>
              <p className="text-gray-700">{Products.title}</p>
            </div>
            <div className="mt-2 flex justify-between text-gray-600">
              <span>Brand : {Products.brand}</span>
              {/* <span>College:  {Products.college} </span> */}
              <span>Contact: {Products.phone}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
