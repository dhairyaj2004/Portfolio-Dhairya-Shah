import React from "react";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";


export default function Body() {
  return (
    <div className="text-slate-200 justify-between px-4 py-3 text-xl bg-slate-900 min-h-screen flex flex-col gap-5">
      <div id="About Me">
        <h3 className="underline underline-offset-8 text-2xl text-red-500">
          About Me
        </h3>
        <p className="indent-10 mt-5">
          I'm a passionate computer engineering student.Currently pursuing my
          B.Tech at Sardar Vallabhbhai Patel Institute of Technology, Vasad
          which is affiliated with Gujarat Technological University. In starting
          phase of my career I was not so much aware about Computer Technology
          but after get into the environment of college, My graph of excitement
          towards the Computer Technologies is growing in J-curve.
        </p>
      </div>
      <div id="My Projects">
        <h3 className="underline underline-offset-8 text-2xl text-red-500 mt-5">
          My Projects
        </h3>
        <div id="Projects-Container" className="grid gap-4 grid-cols-4 justify-around">
          <div className="max-w-xs transition duration-300 ease-in-out hover:scale-110 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-9">
            <img
              className="rounded-t-lg"
              src="https://miro.medium.com/v2/resize:fit:1000/1*ANysIuJ_bC_3ETbsZnJOuw.jpeg"
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Blogify
              </h5>
              <p className="mb-3 text-gray-700 dark:text-gray-400">
                Built a web app where author can publish a blog even author can
                delete it and republish it also. I made it with the help of
                React framework only.
              </p>
              <a
                href="https://github.com/dhairyaj2004/the-blog-by-react"
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Github Repository
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-sm transition duration-300 ease-in-out hover:scale-110 ml-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-9 ">
            <img
              className="rounded-t-lg"
              src="https://cannibals.digital/wp-content/uploads/2022/07/hyperlink-license-links.png"
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Keep Links
              </h5>
              <p className="mb-3 text-gray-700 dark:text-gray-400">
              Built a browser extension with help of Javascript that can track of link.  User just have to press 
              the single button and next time user can easily enter a particular web page with a single click.
              </p>
              <a
                href="https://github.com/dhairyaj2004/Link-Tracker-"
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Github Repository
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-sm transition duration-300 ease-in-out hover:scale-110 ml-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-9">
            <img
              className="rounded-t-lg"
              src="https://cigars.roku.com/v1/contain/800x454/https%3A%2F%2Fimage.roku.com%2Fdeveloper_channels%2Fprod%2Fbddf3e8191e2e19ad6f599d1578a3e0912b7623996164b143f4b4dc26e77b0cf.png"
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Movie Mania
              </h5>
              <p className="mb-3 text-gray-700 dark:text-gray-400">
              Built a movie and web series finder web app where user can search particular movie and it into his/her 
              favourites. To make this I used React framework
              </p>
              <a
                href="https://github.com/dhairyaj2004/movie-app-by-react-js"
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Github Repository
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-sm transition duration-300 ease-in-out hover:scale-110 ml-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-9">
            <img
              className="rounded-t-lg"
              src="https://i0.wp.com/tfetimes.com/wp-content/uploads/2018/01/The-Game-of-Blackjack.jpg?fit=855%2C400&ssl=1"
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                BlackJack
              </h5>
              <p className="mb-3 text-gray-700 dark:text-gray-400">
              Built a game with help of calculative logic and JavaScript as a language. It’s a casino game where user 
              bets and get amount according to numbers he/she gets. 
              </p>
              <a
                href="https://github.com/dhairyaj2004/Blackjack-game-by-js"
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Github Repository
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
      </div>
      <div id="My Skills">
        <h3 className="underline underline-offset-8 text-2xl text-red-500 mt-5">
          My Skills
        </h3>
        <div id="Skill-Container" className="flex gap-4 justify-around mt-9">
        <div className="bg-stone-600 outline bg-outline-offset-2 outline-red-700 rounded-md text-center w-32">HTML</div>
        <div className="bg-stone-600 outline bg-outline-offset-2 outline-red-700 rounded-md text-center w-32">CSS</div>
        <div className="bg-stone-600 outline bg-outline-offset-2 outline-red-700 rounded-md text-center w-32">Tailwind CSS</div>
        <div className="bg-stone-600 outline bg-outline-offset-2 outline-red-700 rounded-md text-center w-32">JavaScript</div>
        <div className="bg-stone-600 outline bg-outline-offset-2 outline-red-700 rounded-md text-center w-32">React JS</div>
        <div className="bg-stone-600 outline bg-outline-offset-2 outline-red-700 rounded-md text-center w-32">Node JS</div>
        <div className="bg-stone-600 outline bg-outline-offset-2 outline-red-700 rounded-md text-center w-32">MySQL</div>
        </div>
        <div id="Contact">
        <h3 className="underline underline-offset-8 text-2xl text-red-500 mt-7">
          Contact Me
        </h3>
        <div className="mt-9 flex">
        <a href="https://github.com/dhairyaj2004"><BsGithub /></a>
        <a href="https://www.linkedin.com/feed/" target="_blank" className="ml-5"><IoLogoLinkedin /></a>
        <a href="https://twitter.com/dhairyashah_20" className="ml-5"><FaXTwitter /></a>
        <a href="mailto:dhairyaj2004@gmail.com" className="ml-5"><SiGmail /></a>
        
        </div>

        </div>
      </div>
    </div>
  );
}
