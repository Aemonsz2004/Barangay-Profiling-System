import React from 'react';
import Navbar from '@/Components/Navbar';
import Sidebar from '@/Components/Sidebar';
import '../../css/app.css';

const Layout = ({ children, className }) => {
  return (
    <div className="h-screen flex bg-[--color-2]">

      <Sidebar className="border border-[--color-4] w-64 my-5 ml-5 bg-[--color-1] fixed " />
      

      <div className="flex flex-col flex-1 overflow-y-auto h-full ">

        <Navbar className="transparent w-full h-16  flex justify-end items-center px-4 z-10" />
        

        <main className={`flex-1 overflow-y-auto bg-[--color-light] ${className}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
