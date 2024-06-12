import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-white font-bold text-xl">Your Logo</a>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path className="fill-current" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex flex-grow justify-end items-center">
          <a href="#" className="text-black-800 mx-4">Home</a>
          <a href="#" className="text-black-800 mx-4">About</a>
          <a href="#" className="text-black-800 mx-4">Services</a>
          <a href="#" className="text-black-800 mx-4">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
