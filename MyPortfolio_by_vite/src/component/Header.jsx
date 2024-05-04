import React from "react";

export default function Header() {
  return (
    <div className="bg-slate-400 flex justify-between px-4 py-3 lg:text-2xl md:text-xl">
        <div className="flex items-center"><img
          src="/mine.png"
          alt="photo"
          height={300}
          width={110}
          className="rounded-full  "
        />
        
        <h3 className="font-playfair py-10 ml-4 lg:text-3xl md:text-2xl font-semibold underline underline-offset-8 text-slate-900">DHAIRYA SHAH</h3>
        
      </div>
      <button data-collapse-toggle="navbar-default" type="button" className="mt-9 inline-flex items-center p-2 w-10 h-10 z-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        
        <span className="sr-only">Open main menu</span>
        <svg className="w-7 h-7" aria-hidden="true" xmlns="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" fill="none" viewBox="0 0 17 14">
            <path stroke="Black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
    </button>
      
      <div className="py-10 hidden w-full md:block md:w-auto sm:w-auto" id="navbar-default">
      <ul className="font-playfair flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-slate-400 md:dark:bg-slate-400 ">
        <li>
          <a href="#" className="block py-2 px-3 text-slate-900 rounded hover:bg-gray-100 hover:underline underline-offset-8  md:border-0  md:p-0  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#About Me" className="block py-2 px-3 text-slate-900 rounded hover:bg-gray-100 hover:underline underline-offset-8  md:border-0  md:p-0  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#My Projects" className="block py-2 px-3 text-slate-900 rounded hover:bg-gray-100 hover:underline underline-offset-8  md:border-0  md:p-0  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
        </li>
        <li>
          <a href="#My Skills" className="block py-2 px-3 text-slate-900 rounded hover:bg-gray-100 hover:underline underline-offset-8  md:border-0  md:p-0  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</a>
        </li>
        <li>
          <a href="#Contact" className="block py-2 px-3 text-slate-900 rounded hover:bg-gray-100 hover:underline underline-offset-8  md:border-0  md:p-0  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>

      </div>
    </div>
  );
}
