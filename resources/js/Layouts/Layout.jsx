import React from 'react';
import Navbar from '@/Components/Navbar';
import Sidebar from '@/Components/Sidebar';
import '../../css/app.css';

const Layout = ({ children, className, page_title }) => {
  return (
    <div className="h-screen flex bg-[--color-2]">

      <Sidebar className="border border-[--color-5] my-5 ml-5 bg-[--color-1] fixed " />
      
      {/* <div className="flex flex-col flex-1 overflow-y-auto h-full "> */}
        
        <main className={`flex-1 p-5 h-full flex flex-col bg-[--color-2]  overflow-y-auto ${className}`}>
        <Navbar
        page_title={page_title}
        className="transparent w-full  h-16 flex justify-end items-center" />
          {children}
        </main>
      </div>
    // </div>
  );
};

export default Layout;
