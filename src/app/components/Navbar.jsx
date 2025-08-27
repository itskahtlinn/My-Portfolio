"use client";
import Image from 'next/image';
import React, { useRef } from 'react';

const Navbar = () => {
  const sideMenuRef = useRef(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
  };
  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
  };

  return (
    <nav className='w-full flex justify-center min-h-40 pt-10 pb-16 px-10'>
      <ul className='hidden md:flex items-center gap-10 text-lg rounded-[12px] px-12 py-2 bg-white/95 shadow-lg shadow-[#0B192C]/10 backdrop-blur-sm text-[#0B192C] border border-gray-100'>

        <li>
          <a href="#home" className="group flex items-center gap-5 px-4 py-2 rounded-xl hover:bg-[#0B192C] transition text-[#0B192C] hover:text-white">
            <img src="/assets/Home.svg" alt="Home" className="w-4 h-4 mt-[-2px] group-hover:brightness-0 group-hover:invert" />
              <span className="group-hover:text-white">Home</span>
          </a> 
        </li>
          
        <li>
          <a href="#projects" className="group flex items-center gap-5 px-4 py-2 rounded-xl hover:bg-[#0B192C] transition text-[#0B192C] hover:text-white">
            <img src="/assets/About.svg" alt="Projects" className="w-4 h-4 group-hover:brightness-0 group-hover:invert" />
              <span className="group-hover:text-white">About</span>
          </a>
        </li>

        <li>
          <a href="#projects" className="group flex items-center gap-5 px-4 py-2 rounded-xl hover:bg-[#0B192C] transition text-[#0B192C] hover:text-white">
            <img src="/assets/Project.svg" alt="Home" className="w-4 h-4 group-hover:brightness-0 group-hover:invert"/> 
              <span> Project </span> 
          </a>
        </li>

        <li>
          <a href="#contact" className="group flex items-center gap-5 px-4 py-2 rounded-xl hover:bg-[#0B192C] hover:text-white transition">
            <img src="/assets/Contact.svg" alt="Home" className="w-4 h-4 roup-hover:brightness-0 group-hover:invert"/> 
              <span> Contact </span> 
          </a>
        </li>
      </ul>

      <button className='block md:hidden absolute right-5 top-6'onClick={openMenu}>
      <Image src={"/assets/menu-black.png"} alt="Open menu" width={20} height={20} />
      </button>

      <ul
        ref={sideMenuRef}
        className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-gray-50 transition duration-500'>

        <div className='absolute top-6 right-6' onClick={closeMenu}>
          <Image src={"/assets/close-black.png"} alt='' width={20} height={20} className='cursor-pointer' />
        </div>

        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>

  );
};

export default Navbar;