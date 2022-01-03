import {Link } from "react-router-dom" ;
import Contact from "./Contact";
import aboutus1 from "./assets/aboutus1.webp";
import aboutus3 from "./assets/aboutus3.webp";
import aboutus4 from "./assets/aboutus4.webp";
import aboutus5 from "./assets/aboutus5.webp";
import signture from "./assets/signture.webp";

const Aboutuscomp = () => {
  return (
    <section className="aboutus">
      <div className="topheader text-center text-white ">
        <div className="layer py-24 bg-gray-800 bg-opacity-70">
          <h1 className="md:text-5xl text-3xl mb-4 tracking-wider font-extrabold">About Us</h1>
          <p className="text-md font-bold tracking-wider">
            <Link className="hover:text-blue-400 duration-500 " to="/"> Home </Link>
            <span className="relative top-1 font-medium"> <i class="ri-arrow-right-s-line"></i> </span>
            <Link to="/Aboutuscomp"> About Us </Link>
          </p>
        </div>
      </div>

      <div className="parent my-28">
        <div className="container">
          <div className="topbox md:flex flex-wrap">
            <div className="pic md:w-1/2 lg:w-1/3 w-full flex items-center">
              <img src={aboutus1} alt="" className="rounded-md" loading="lazy" />
            </div>
            <div className="text md:w-1/2 w-full md:px-6 flex items-center">
              <div className="title">
                <h3 className="text-blue-400 tracking-widest text-lg font-bold my-4">TESTIMONIALS</h3>
                <h1 className="text-gray-900 lg:text-4xl text-2xl font-black tracking-wider">20 Years Of Experience</h1>
                <p className="text-gray-500 font-semibold tracking-widest my-10 md:text-md text-sm">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.
                </p>
                <p className="text-gray-500 font-semibold tracking-widest my-10 md:text-md text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste. Lorem Ipsum available. </p>
                <img src={signture} alt="" />
              </div>
            </div>
          </div>

          <div className="parent my-32">
            <div className="title text-center">
              <h3 className="text-blue-400 tracking-widest text-lg font-bold my-4">ULTIMATE SOLUTIONS</h3>
              <h1 className="text-gray-900 lg:text-4xl text-2xl font-bold tracking-wider">Our Hotel & Room</h1>
            </div>

            <div className="hotel md:flex flex-wrap md:justify-evenly justify-between ">
              <div className="box lg:w-1/3 md:w-1/2 px-2 w-full my-14 hover:-translate-y-4 transform duration-500 rounded-md">
                <div className="pic relative">
                  <img src={aboutus3} className="w-full" alt="" />
                  <h1 className="absolute text-center py-6 w-full bottom-0 left-0 w-full bg-gray-900 bg-opacity-70 text-white font-bold tracking-widest hover:bg-blue-400 duration-500">Restaurant & Bar </h1>
                </div>
              </div>

              <div className="box lg:w-1/3 md:w-1/2 px-2 w-full my-14 hover:-translate-y-4 transform duration-500 rounded-md">
                <div className="pic relative">
                  <img src={aboutus4} className="w-full" alt="" />
                  <h1 className="absolute text-center py-6 w-full bottom-0 left-0 w-full bg-gray-900 bg-opacity-70 text-white font-bold tracking-widest hover:bg-blue-400 duration-500">Spa & Fitness</h1>
                </div>
              </div>

              <div className="box lg:w-1/3 md:w-1/2 px-2 w-full my-14 hover:-translate-y-4 transform duration-500 rounded-md">
                <div className="pic relative">
                  <img src={aboutus5} className="w-full" alt="" />
                  <h1 className="absolute text-center py-6 w-full bottom-0 left-0 w-full bg-gray-900 bg-opacity-70 text-white font-bold tracking-widest hover:bg-blue-400 duration-500">Pool & Party</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />

    </section>
  );
}
 
export default Aboutuscomp;