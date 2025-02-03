import React from 'react';
import Navbar from '@/Components/Navbar';
import Sidebar from '@/Components/Sidebar';

const Layout = ({ children, className }) => {
  return (
    <div className="h-screen flex flex-col ">
      {/* Navbar */}
      <Navbar className="absolute w-full h-16 bg-gray-900 text-white  top-0 left-0 flex justify-end items-center px-4 z-10" />

      
      {/* Content Area (Sidebar + Main Content) */}

        {/* Sidebar */}
        
        {/* Main Content */}

        <div className='flex h-[100%]'>
        <Sidebar className="w-64 h-[100%] bg-gray-900 text-white fixed left-0 top-0 " />
        
        <main className={` bg-white overflow-y-auto w-full ${className}`}> {/* Add ml-64 and mt-16 to account for the fixed Sidebar and Navbar */}
          {children}
        </main>
        </div>
        </div>
      
  );
};

export default Layout;