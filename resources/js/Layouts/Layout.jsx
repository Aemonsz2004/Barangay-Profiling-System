import React from 'react';
import Navbar from '@/Components/Navbar';
import Sidebar from '@/Components/Sidebar';
import '../../css/app.css';

const Layout = ({ children, className, page_title }) => {
  return (
    <div 
      className="h-screen flex bg-[--color-2] bg-cover bg-center" 
      style={{ backgroundImage: "url('/images/new_bg.jpg')"  }}
    >
      <Sidebar className="border border-[--color-5] my-5 ml-5 bg-[--color-1] fixed" />
      
      <main
      className={`flex-1 p-5 h-full flex flex-col z-0 overflow-y-auto ${className}`}>
        <Navbar
          page_title={page_title}
          className="transparent w-full h-16 flex justify-end items-center"
        />
        {children}
      </main>
    </div>
  );
};

export default Layout;
