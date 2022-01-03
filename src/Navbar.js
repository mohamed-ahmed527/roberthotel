import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile ,setIsMobile] = useState(false) ;

  return (
    <nav className="bg-white py-4">
      <div className="container justify-between">
        <div className="logo w-max">
          <img src={require(`./assets/mainlogo.webp`).default} alt="" className="w-max" />
        </div>
        <div className="list">
          <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)} >
            <li><Link to="/" className="px-4 text-md text-gray-900">Home</Link></li>
            <li><Link to="/Roomscomp" className="px-4 text-md text-gray-900">Rooms</Link></li>
            <li><Link to="/Aboutuscomp" className="px-4 text-md text-gray-900">About Us</Link></li>
            <li><Link to="/Newscomp" className="px-4 text-md text-gray-900">News</Link></li>
            <li><Link to="/Contactcomp" className="px-4 text-md text-gray-900">Contact</Link></li>
          </ul>
        </div>
      </div>
      <button
      className="mobile-menu-icon text-3xl text-blue-400 font-bold"
      onClick={() => {setIsMobile(!isMobile)}} >
        {isMobile ?  <i class="ri-close-fill"></i> : <i class="ri-menu-fill"></i>}
      </button>
    </nav>
  );
}
 
export default Navbar;

