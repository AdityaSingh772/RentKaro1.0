import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar w-64 bg-white p-5 border-r border-gray-300">
      <div className="profile text-center mb-8"> {/* Increased margin-bottom */}
        <img src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" alt="Aditya" className="profile-img w-16 rounded-full mx-auto" />
        <h2 className="text-lg font-bold mt-2">aditya</h2> {/* Added margin-top */}
      </div>
      <nav>
        <ul>
          <li className="py-3"> {/* Increased padding-top and padding-bottom */}
            <Link href="/dashboard" className="text-blue-600 font-bold text-[1.5rem] drop-shadow-lg" >Dashboard</Link>
          </li>
          <li className="py-3 font-bold"> {/* Increased padding-top and padding-bottom */}
            <Link href="">User</Link>
          </li>
          <li className="py-3 font-bold"> {/* Increased padding-top and padding-bottom */}
            <Link href="/">View Products</Link>
          </li>
          <li className="py-3 font-bold"> {/* Increased padding-top and padding-bottom */}
            <Link href="">Logout</Link>
          </li>
        </ul>
      </nav>
      <div className="upgrade text-center mt-8"> {/* Increased margin-top */}
        <p className='text-[0.75rem] mb-3'>wanna sell/rent?</p> {/* Increased margin-bottom */}
        <button className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">Post your ad</button>
      </div>
    </div>
  );
};

export default Sidebar;
