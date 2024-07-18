import React from "react";

export default function Body() {
  return (
    <div className="text-slate-200 justify-between px-4 py-3 text-xl bg-slate-900 min-h-screen flex flex-col gap-5">
      <div id="About Me">
        <h3 className="underline underline-offset-8 text-2xl text-red-500">
          About Me
        </h3>
        <p className="indent-10 mt-5 text-left">
          I am a web developer and a computer engineering student with a strong
          foundation in HTML, CSS, JavaScript, and frameworks like React. I am
          passionate about building responsive, user-friendly web applications.
          Alongside my web development skills, I am eager to explore other tech
          fields and continuously expand my knowledge. With a dedication to
          innovation and learning, I aim to contribute to diverse and
          forward-thinking projects.
        </p>
        <div class="py-5 flex justify-center">
          <a href="./DhairyaResume.pdf" Download="Dhairya Resume">
            <button class="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-red-500 bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="24px"
                width="24px"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Interface / Download">
                    {" "}
                    <path
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke="#f1f1f1"
                      d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                      id="Vector"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              Download Resume
            </button>
          </a>
        </div>
      </div>
      <div id="My Projects">
        <h3 className="underline underline-offset-8 text-2xl text-red-500">
          My Projects
        </h3>
        <div
          id="Projects-Container"
          className="grid justify-center gap-4 grid-row md:justify-around lg:justify-around xl:justify-around xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 "
        >
          <div className="max-w-sm transition duration-300 ease-in-out hover:scale-110 ml-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-9 ">
            <img
              className="rounded-t-lg"
              src="https://www.thoughtco.com/thmb/6MsMmUK27akFhb8i89kj95J5iko=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-545286316-433dd345105e4c6ebe4cdd8d2317fdaa.jpg"
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Dr. Chemistry
              </h5>
              <p className="mb-3 text-gray-700 dark:text-gray-400">
                Built a chemistry based fully responsive website. Where user can
                get brief information by clicking on images and watching videos
                on website itself and they can by courses, do direct WhatsApp
                chat with an instructor.
              </p>
              <a
                href="https://github.com/dhairyaj2004/Dr.Chemistry"
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
              src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-link/sta-je-link.jpg"
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Keep Links
              </h5>
              <p className="mb-3 text-gray-700 dark:text-gray-400">
                Built a browser extension with help of Javascript that can track
                of link. User just have to press the single button and next time
                user can easily enter a particular web page with a single click.
              </p>
              <a
                href="https://github.com/dhairyaj2004/Link-Tracker-"
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
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
                Built a movie and web series finder web app where user can
                search particular movie and it into his/her favourites. To make
                this I used React framework
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
                Built a game with help of calculative logic and JavaScript as a
                language. It’s a casino game where user bets and get amount
                according to numbers he/she gets.
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
          <div className="max-w-sm transition duration-300 ease-in-out hover:scale-110 ml-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-9 ">
            <img
              className="rounded-t-lg"
              src="https://www.apollo.io/opengraph-image.jpg?8828ee704915d571"
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Apollo Automation Extension
              </h5>
              <p className="mb-3 text-gray-700 dark:text-gray-400">
                Built a browser extension which helps to automate the save data of particular company's employees into an list which should be addedd into <a href="https://apollo.io" className="text-blue-400">Apollo's</a> website.
              </p>
              <a
                href="https://github.com/dhairyaj2004/apollo-automation-Digikentro"
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
              src="https://iotvnaw69daj.i.optimole.com/cb:Amyz.6583c/w:auto/h:auto/q:75/f:best/https://www.bloggingpro.com/wp-content/uploads/2023/10/Best-Tech-Blogs-featured-image.webp"
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
        </div>
      </div>
      <div id="My Skills">
        <h3 className="underline underline-offset-8 text-2xl text-red-500">
          My Skills
        </h3>
        <div
          id="Skill-Container"
          className="gap-4 grid lg:grid-cols-5 justify-around mt-9 md:grid-cols-4 sm:grid-cols-3"
        >


          <div class="max-w-sm p-6 bg-gray-700 rounded-lg shadow-lg flex items-center space-x-4">
            <div class="w-16 h-16 flex items-center justify-center">
              <img
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-256.png"
                alt="Logo"
                class="w-12 h-12"
              />
            </div>
            <div>
              <h2 class="text-xl font-semibold">HTML</h2>
            </div>
          </div>
          <div class="max-w-sm p-6 bg-gray-700 rounded-lg shadow-lg flex items-center space-x-4">
            <div class="w-16 h-16 flex items-center justify-center">
              <img
                src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-256.png"
                alt="Logo"
                class="w-12 h-12"
              />
            </div>
            <div>
              <h2 class="text-xl font-semibold">CSS</h2>
            </div>
          </div>

          <div class="max-w-sm p-6 bg-gray-700 rounded-lg shadow-lg flex items-center space-x-4">
            <div class="w-16 h-16 flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png"
                alt="Logo"
                class="w-12 h-12"
              />
            </div>
            <div>
              <h2 class="text-xl font-semibold">Tailwind CSS</h2>
            </div>
          </div>
          <div class="max-w-sm p-6 bg-gray-700 rounded-lg shadow-lg flex items-center space-x-4">
            <div class="w-16 h-16 flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt="Logo"
                class="w-12 h-12"
              />
            </div>
            <div>
              <h2 class="text-xl font-semibold">Javascript</h2>
            </div>
          </div>
          <div class="max-w-sm p-6 bg-gray-700 rounded-lg shadow-lg flex items-center space-x-4">
            <div class="w-16 h-16 flex items-center justify-center">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                alt="Logo"
                class="w-12 h-12"
              />
            </div>
            <div>
              <h2 class="text-xl font-semibold">React JS</h2>
            </div>
          </div>
          <div class="max-w-sm p-6 bg-gray-700 rounded-lg shadow-lg flex items-center space-x-4">
            <div class="w-16 h-16 flex items-center justify-center">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-256.png"
                alt="Logo"
                class="w-12 h-12"
              />
            </div>
            <div>
              <h2 class="text-xl font-semibold">Node JS</h2>
            </div>
          </div>
          <div class="max-w-sm p-6 bg-gray-700 rounded-lg shadow-lg flex items-center space-x-4">
            <div class="w-16 h-16 flex items-center justify-center">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-256.png"
                alt="Logo"
                class="w-12 h-12"
              />
            </div>
            <div>
              <h2 class="text-xl font-semibold">MySQL</h2>
            </div>
          </div>
          <div class="max-w-sm p-6 bg-gray-700 rounded-lg shadow-lg flex items-center space-x-4">
            <div class="w-16 h-16 flex items-center justify-center">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png"
                alt="Logo"
                class="w-12 h-12"
              />
            </div>
            <div>
              <h2 class="text-xl font-semibold">Figma</h2>
            </div>
          </div> 
        </div>
        <div id="Contact">
          <h3 className="underline underline-offset-8 text-2xl  text-red-500 mt-5">
            Contact Me
          </h3>
          <div className="mt-9 flex justify-center md:justify-start lg:justify-start">
            <section class="flex justify-center items-center">
              <a href="https://github.com/dhairyaj2004/" target="_blank">
                <button class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-600 to-black text-white font-semibold hover:translate-y-3 transition-all duration-500 hover:from-[#6c6c6c] hover:to-[#000000]">
                  <svg
                    class="w-5"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-300 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                    GitHub
                  </span>
                </button>
              </a>
            </section>

            <section class="flex justify-center items-center ml-5">
              <a
                href="https://www.linkedin.com/in/dhairya-shah-a55761224/"
                target="_blank"
              >
                <button class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1.1em"
                    viewBox="0 0 512 512"
                    stroke-width="0"
                    fill="currentColor"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
                  </svg>
                  <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-300 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                    Linkedin
                  </span>
                </button>
              </a>
            </section>
            <section class="flex justify-center items-center ml-5">
            <a
                href="https://x.com/dhairyashah_20"
                target="_blank"
              >
              <button class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-700 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#6c6c6c] hover:to-[#000000]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  stroke-width="0"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path>
                </svg>
                <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-300 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  x
                </span>
              </button></a>
            </section>

            <section class="flex justify-center items-center ml-5">
              <a href="mailto:dhairyaj2004@gmail.com" target="_blank">
                {" "}
                <button
                  href="/"
                  class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1.1em"
                    viewBox="0 0 512 512"
                    stroke-width="0"
                    fill="currentColor"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm0 48v40.8L256 287 48 152.8V112h416zm-416 272V196.8l208 134.2 208-134.2V384H48z"></path>
                  </svg>
                  <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-300 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                    Email
                  </span>
                </button>
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
