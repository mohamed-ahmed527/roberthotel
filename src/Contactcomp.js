import {Link } from "react-router-dom" ;
import Contact from "./Contact";

const Contactcomp = () => {
  return(
    <section className="Contact">
      <div className="topheader text-center text-white ">
        <div className="layer py-24 bg-gray-800 bg-opacity-70">
          <h1 className="md:text-5xl text-3xl mb-4 tracking-wider font-extrabold">Our Rooms</h1>
          <p className="text-md font-bold tracking-wider">
            <Link className="hover:text-blue-400 duration-500 " to="/"> Home </Link>
            <span className="relative top-1 font-medium"> <i class="ri-arrow-right-s-line"></i> </span>
            <Link to="/Contactcomp"> Contact</Link>
          </p>
        </div>
      </div>

      <div className="container relative -top-10">
        <div className="parent flex flex-wrap md:justify-between bg-white rounded-md shadow-md">
          <div className="box md:w-1/2 lg:w-1/4 w-full p-2 text-center py-4 my-2">
            <div className="icon text-blue-400 text-3xl"> <i class="ri-phone-fill"></i> </div>
            <h2 className="text-lg text-gray-900 font-bold my-2">Phone</h2>
            <h3 className="text-gray-500 text-md font-bold ">+01-234-567-890</h3>
          </div>
          <div className="box md:w-1/2 lg:w-1/4 w-full p-2 text-center py-4 my-2">
            <div className="icon text-blue-400 text-3xl"> <i class="ri-map-pin-fill"></i> </div>
            <h2 className="text-lg text-gray-900 font-bold my-2">Location</h2>
            <h3 className="text-gray-500 text-md font-bold ">Iris Watson, 283 Fusce Rd,NY</h3>
          </div>
          <div className="box md:w-1/2 lg:w-1/4 w-full p-2 text-center py-4 my-2">
            <div className="icon text-blue-400 text-3xl"> <i class="ri-time-fill"></i> </div>
            <h2 className="text-lg text-gray-900 font-bold my-2">Open time</h2>
            <h3 className="text-gray-500 text-md font-bold ">10:00 am to 23:00 pm</h3>
          </div>
          <div className="box md:w-1/2 lg:w-1/4 w-full p-2 text-center py-4 my-2">
            <div className="icon text-blue-400 text-3xl"> <i class="ri-mail-fill"></i> </div>
            <h2 className="text-lg text-gray-900 font-bold my-2">Email</h2>
            <h3 className="text-gray-500 text-md font-bold">Info.colorlib @gmail.com</h3>
          </div>
        </div>
        
        <div className="map">
          <iframe className="w-full h-96 mb-10" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82774.69671830302!2d24.077286625210185!3d56.96328499537209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5073ded%3A0x400cfcd68f2fe30!2sRiga%2C+Latvia!5e0!3m2!1sen!2sbd!4v1549536732147" frameborder="0"></iframe>
        </div>
      </div>
      <div className="bg-gray-200 py-10">
        <div className="container">
          <h1 className="text-center text-2xl my-10 font-bold tracking-wider text-blue-400">Contact Us</h1>
          <form>
            <div className="flex justify-between flex-wrap">
              <input className="border-2 border-gray-100 p-2 my-2 w-full h-14 rounded-sm bg-gray-50 font-bold text-gray-900" placeholder="Enter your name " type="text" />
              <input className="border-2 border-gray-100 p-2 my-2 w-full h-14 rounded-sm bg-gray-50 font-bold text-gray-900" placeholder="Enter your email" type="mail" />
            </div>
            <textarea  className="border-2 border-gray-100 w-full p-2 my-2 h-48 rounded-sm bg-gray-50 font-bold text-gray-900" placeholder="Your message"></textarea>
            <button type="submit" className="bg-blue-400 hover:bg-blue-500 duration-500 py-2 px-6 font-bold rounded-sm mt-10 block mx-auto text-white"> Send Message</button>
          </form>
        </div>
      </div>
      <Contact />

    </section>
  )
}

export default Contactcomp;