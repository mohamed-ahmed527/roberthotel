import signture from "./assets/signture.webp" ;
import about1 from "./assets/about1.webp" ;
import about2 from "./assets/about2.webp" ;
import about3 from "./assets/about3.webp" ;
import Reiseservice from "./assets/Reiseservice.webp";
import Restaurant from "./assets/Restaurant.webp";
import SpaRelaxtion from "./assets/SpaRelaxtion.webp";
import transportion from "./assets/transportion.webp";

const About = () =>{
  return (
    <section className="about my-32">
      <section className="container lg:flex flex-wrap ">
        <article className="about-left lg:w-1/2 flex items-center">
          <div className="about-title">
            <h3 className="text-blue-400 tracking-widest text-lg font-bold my-4">ABOUT US</h3>
            <h1 className="text-gray-900 lg:text-4xl text-2xl font-black tracking-wider">Welcome To Roberto Hotel Luxury</h1>
            <p className="text-gray-500 font-semibold tracking-widest my-10 md:text-md text-sm">
            With over 340 hotels worldwide, NH Hotel Group offers a wide variety of hotels catering for a perfect stay no matter where your destination.
            </p>
            <p className="tracking-wider">
              <span className="text-gray-500 font-semibold">Manager:<span className="text-blue-400"> Michen Taylor</span></span>
            </p>
            <div className="my-10">
              <img src={signture} className="w-min" alt="" loading="lazy" />
            </div>
          </div>
        </article>
        <article className="about-right lg:w-1/2 flex ">
          <div className="md:w-1/2 w-full">
            <div className="px-1 py-1 overflow-hidden rounded-md">
              <img src={about1} alt="" className="rounded-md w-full hover:scale-110 transform duration-1000" />
            </div>
            <div className="px-1 py-1 overflow-hidden rounded-md">
              <img src={about2} alt="" className="rounded-md w-full hover:scale-110 transform duration-1000" />
            </div>
          </div>
          <div className="md:w-1/2 w-full px-1 py-1 overflow-hidden rounded-md">
            <img src={about3} alt="" className="rounded-md w-full hover:scale-110 transform duration-1000" />
          </div>
        </article>
      </section>
      <section className="container">
        <div className="bar md:flex flex-wrap md:justify-evenly my-20">
          <div className="p-2 md:w-40 md:mx-2 lg:w-1/5 w-full my-14 shadow-md  mx-auto ">
            <div>
              <img src={Reiseservice} alt="" className="w-12 block mx-auto" />
            </div>
            <h1 className="text-gray-800 text-md font-semibold text-center my-6 "> Reiseservice </h1>
          </div>
          <div className="p-2 md:w-40 md:mx-2 lg:w-1/5 w-full my-14 shadow-md  mx-auto ">
            <div>
              <img src={Restaurant} alt="" className="w-12 block mx-auto" />
            </div>
            <h1 className="text-gray-800 text-md font-semibold text-center my-6 "> Restaurant </h1>
          </div>
          <div className="p-2 md:w-40 md:mx-2 lg:w-1/5 w-full my-14 shadow-md  mx-auto ">
            <div>
              <img src={transportion} alt="" className="w-12 block mx-auto" />
            </div>
            <h1 className="text-gray-800 text-md font-semibold text-center my-6 "> Spa Relaxtion </h1>
          </div>
          <div className="p-2 md:w-40 md:mx-2 lg:w-1/5 w-full my-14 shadow-md  mx-auto ">
            <div>
              <img src={SpaRelaxtion} alt="" className="w-12 block mx-auto" />
            </div>
            <h1 className="text-gray-800 text-md font-semibold text-center my-6 "> Transportion </h1>
          </div>
        </div>
      </section>
    </section>
  )
}
export default About ;