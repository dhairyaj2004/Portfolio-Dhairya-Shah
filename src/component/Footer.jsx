import React from "react";
import emailjs from "emailjs-com";
export default function Footer() {
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_c8togfs', 'template_4u8tlpr', e.target, 'h1sBwZu91mHbGz_3u')
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      }, (error) => {
        console.log(error.text);
        alert("Failed to send message, try again later.");
      });
  };
  
  return (
    <div>
    <div className="bg-slate-900 text-slate-200 flex justify-around px-4 py-5 text-2xl">
      <a href="mailto:dhairyaj2004@gmail.com">
        <button className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
          HIRE ME!
        </button>
      </a>
      </div>
      <div className="h-screen flex items-center justify-center bg-slate-900 text-slate-200 px-4 py-5">
      <div className="w-full max-w-lg">
      <h2 className="underline underline-offset-8 text-2xl text-center text-red-500">GET IN TOUCH</h2>
        <form onSubmit={sendEmail} id="contact-form" className="bg-slate-800 p-8 rounded-lg shadow-md mt-5">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-slate-200 text-xs font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                required
                
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-slate-200 text-xs font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                required
                
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-slate-200 text-xs font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                required
             
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
      </div>
  );
}
