import React from "react";


export default function Header() {
  return (
    <div className="bg-slate-400 flex justify-between px-4 py-3 text-2xl ">
        <div className="flex"><img
          src="./src/assets/proffesional.png"
          alt="photo"
          height={300}
          width={100}
          className="rounded-full"
        />
        <h3 className="font-playfair py-10 ml-4 text-3xl underline underline-offset-8 text-slate-900">DHAIRYA SHAH</h3>
      </div>
      <div className="py-10 ">
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
