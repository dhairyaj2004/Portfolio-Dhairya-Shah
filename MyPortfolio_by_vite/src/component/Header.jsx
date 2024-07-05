import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="flex items-center justify-between bg-slate-400 ">
        <div className="flex items-center ">
          <img
            src="/mine.png"
            alt="photo"
            height={300}
            width={110}
            className="rounded-full"
          />
          <h3 className="font-serif py-10 ml-4 lg:text-3xl md:text-2xl text-xl font-semibold text-slate-900">
            DHAIRYA SHAH
          </h3>
        </div>
        
        <button
          onClick={toggleMenu}
          className="lg:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <nav className="bg-white dark:bg-slate-400 border-gray-200 ">
        <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="font-serif flex flex-col lg:flex-row lg:space-x-8 p-4 md:text-2xl lg:text-2xl text-xl justify-end border border-gray-100 rounded-lg lg:p-0 lg:mt-10 lg:mr-5 lg:border-0 lg:absolute lg:right-0 lg:top-0 ">
            <li>
              <a href="#" className="block py-2 px-3 text-slate-900 rounded hover:bg-gray-100 hover:underline underline-offset-8 lg:p-0 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#About Me" className="block py-2 px-3 text-slate-900 rounded hover:bg-gray-100 hover:underline underline-offset-8 lg:p-0 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">About</a>
            </li>
            <li>
              <a href="#My Projects" className="block py-2 px-3 text-slate-900 rounded hover:bg-gray-100 hover:underline underline-offset-8 lg:p-0 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Projects</a>
            </li>
            <li>
              <a href="#My Skills" className="block py-2 px-3 text-slate-900 rounded hover:bg-gray-100 hover:underline underline-offset-8 lg:p-0 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Skills</a>
            </li>
            <li>
              <a href="#Contact" className="block py-2 px-3 text-slate-900 rounded hover:bg-gray-100 hover:underline underline-offset-8 lg:p-0 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}