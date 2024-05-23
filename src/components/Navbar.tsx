
import Link from 'next/link';
import { FiHeart, FiUser } from 'react-icons/fi';
import Image from 'next/image';



const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between border-y-b2-2 text-black ">
      <div className="flex items-center space-x-8 mx-8">
        {/* Menu logo or icon */}
        <div className="text-2xl font-bold">
          <Link href="/">
              <Image src="/menu.png" height={30} width={30} alt="Menu" />
           
          </Link>
        </div>
        {/* Home link */}
        <div className="text-2xl font-bold">
          <Link href="/">
            Home
          </Link>
        </div>
      </div>

      {/* Center Links */}
      <div className="flex space-x-4">
        <Link href="/buy" className="px-4 py-2 border rounded-full ">
          Buy
        </Link>
        <Link href="/rent" className="px-4 py-2 border rounded-full">
          Rent
        </Link>
        <Link href="/sell" className="px-4 py-2 border rounded-full">
          Sell
        </Link>
        <Link href="/find-agent" className="px-4 py-2 border rounded-full">
        Find 
        </Link>
      </div>

      {/* Right Side Elements */}
      <div className="flex items-center space-x-4 mx-8">
        {/* Wishlist button */}
        <button className="text-gray-500 hover:text-gray-700">
          <FiHeart className="w-6 h-6" />
        </button>
        {/* Profile button */}
        <button className="text-gray-500 hover:text-gray-700">
          <FiUser className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
