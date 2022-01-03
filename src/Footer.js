import logo from "./assets/footerlogo.webp" ;

const Footer = () => {
  return (
    <div className="footer bg-gray-900 py-10 text-white">
      <div className="container">
        <div className="parent md:flex flex-wrap  ">
          <div className="box lg:w-4/12 md:w-1/2 w-full md:p-3 my-8">
            <div className="pic">
              <img src={logo} alt="" />
            </div>
            <div>
              <h1 className="text-blue-400 text-xl font-bold tracking-wider my-4">+12 345-678-9999</h1>
              <p className="text-gray-400 text-sm font-semibold tracking-wider my-4">Info.colorlib@gmail.com</p>
              <p className="text-gray-400 text-sm font-semibold tracking-wider ">856 Cordia Extension Apt. 356, Lake Deangeloburgh, South Africa</p>
            </div>
          </div>

          <div className="box lg:w-4/12 md:w-1/2 w-full md:p-3 my-8">
            <h1 className="title text-2xl font-bold tracking-widest ">Our Blog</h1>
            <div className="my-6">
              <p className="font-semibold text-sm tracking-widest ">Freelance Design Tricks How</p>
              <p className="text-gray-400 text-sm font-bold mt-2"> <span> <i class="ri-time-line"></i></span> Jan 02, 2019 </p>
            </div>
            <div>
              <p className="font-semibold text-sm tracking-widest ">Free Advertising For Your Online</p>
              <p className="text-gray-400 text-sm font-bold mt-2"> <span> <i class="ri-time-line"></i></span> Jan 02, 2019 </p>
            </div>
          </div>

          <div className="box lg:w-4/12 md:w-1/2 w-full md:p-3 my-8">
            <h1 className="title text-2xl font-bold tracking-widest "> Subscribe Newsletter</h1>
            <p className="text-gray-400 text-sm font-bold mt-2">Subscribe our newsletter gor get notification about new updates.</p>
            <div className="search">
              <input type="search" placeholder="Enter your email..." className="text-sm w-full py-3 my-6 px-3 bg-gray-800 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Footer;