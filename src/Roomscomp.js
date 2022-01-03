import { Link } from "react-router-dom";
import room1 from "./assets/room1.webp";
import room2 from "./assets/room2.webp";
import room3 from "./assets/room3.webp";
import room4 from "./assets/room4.webp";
import room5 from "./assets/room5.webp";
import Contact from "./Contact";
const Roomscomp = () => {
  return (
    <section className="Rooms ">
      <div className="topheader text-center text-white ">
        <div className="layer py-24 bg-gray-800 bg-opacity-70">
          <h1 className="md:text-5xl text-3xl mb-4 tracking-wider font-extrabold">Our Rooms</h1>
          <p className="text-md font-bold tracking-wider">
            <Link className="hover:text-blue-400 duration-500 " to="/"> Home </Link>
            <span className="relative top-1 font-medium"> <i class="ri-arrow-right-s-line"></i> </span>
            <Link to="/Roomscomp"> Rooms</Link>
          </p>
        </div>
      </div>
      
      <div className="parent my-28">
        <div className="container">
          <div className="box md:flex flex-wrap my-20 ">
            <div className="pic lg:w-1/3 md:w-1/2 w-full ">
              <img src={room1} alt="" loading="lazy" className="w-full" />
            </div>
            <div className="details md:pl-4 md:w-1/2 lg:pl-10 pl-0 mt-2">
              <h1 className="md:text-3xl text-xl font-extrabold tracking-wider">Room View Sea</h1>
              <h3 className="font-bold tracking-wider my-4">
                <span className="text-blue-400 text-xl">400$</span>
                <span className="text-gray-400 text-sm"> /Day</span>
              </h3>
              <div className="roominfo flex flex-wrap">
                <div className="inside-info font-bold w-1/2 my-2 ">
                  <p className="text-gray-400 ">Size : </p>
                  <p>30ft</p>
                </div>
                <div className="inside-info font-bold w-1/2 my-2 ">
                  <p className="text-gray-400 ">capacity : </p>
                  <p>Max persion 5</p>
                </div>
                <div className="inside-info font-bold w-1/2 my-2 ">
                  <p className="text-gray-400 ">Bed : </p>
                  <p> King beds </p>
                </div>
                <div className="inside-info font-bold w-1/2 my-2 ">
                  <p className="text-gray-400 ">Services : </p>
                  <p>Wifi, television ...</p>
                </div>
              </div>
              <button className="py-1 px-3 bg-blue-400 text-white mt-4 font-bold text-sm tracking-wider rounded-md hover:bg-blue-500 duration-500 ">View details </button>
            </div>
          </div>

          <div className="box md:flex flex-wrap my-20 ">
            <div className="pic lg:w-1/3 md:w-1/2 w-full ">
              <img src={room2} alt="" loading="lazy" className="w-full" />
            </div>
            <div className="details md:pl-4 md:w-1/2 lg:pl-10 pl-0 mt-2">
              <h1 className="md:text-3xl text-xl font-extrabold tracking-wider">Small Room</h1>
              <h3 className="font-bold tracking-wider my-4">
                <span className="text-blue-400 text-xl">254$</span>
                <span className="text-gray-400 text-sm"> /Day</span>
              </h3>
              <div className="roominfo flex flex-wrap">
                <div className="inside-info font-bold w-1/2 my-2 ">
                  <p className="text-gray-400 ">Size : </p>
                  <p>20ft</p>
                </div>
                <div className="inside-info font-bold w-1/2 my-2 ">
                  <p className="text-gray-400 ">capacity : </p>
                  <p>Max persion 4</p>
                </div>
                <div className="inside-info font-bold w-1/2 my-2 ">
                  <p className="text-gray-400 ">Bed : </p>
                  <p> Small beds </p>
                </div>
                <div className="inside-info font-bold w-1/2 my-2 ">
                  <p className="text-gray-400 ">Services : </p>
                  <p>Wifi, television ...</p>
                </div>
              </div>
              <button className="py-1 px-3 bg-blue-400 text-white mt-4 font-bold text-sm tracking-wider rounded-md hover:bg-blue-500 duration-500 ">View details </button>
            </div>
          </div>

          <div className="box md:flex flex-wrap my-20 ">
            <div className="pic lg:w-1/3 md:w-1/2 w-full ">
              <img src={room3} alt="" loading="lazy" className="w-full" />
            </div>
            <div className="details md:pl-4 md:w-1/2 lg:pl-10 pl-0 mt-2">
              <h1 className="md:text-3xl text-xl font-extrabold tracking-wider">Premium King Room</h1>
              <h3 className="font-bold tracking-wider my-4">
                <span className="text-blue-400 text-xl">387$</span>
                <span className="text-gray-400 text-sm"> /Day</span>
              </h3>
              <div className="roominfo flex flex-wrap">
                <div className="inside-info font-bold w-1/2 my-2 ">
                  <p className="text-gray-400 ">Size : </p>
                  <p>37ft</p>
                </div>
                <div className="inside-info font-bold w-1/2 my-2 ">
                  <p className="text-gray-400 ">capacity : </p>
                  <p>Max persion 6</p>
                </div>
                <div className="inside-info font-bold w-1/2 my-2 ">
                  <p className="text-gray-400 ">Bed : </p>
                  <p> Premium beds </p>
                </div>
                <div className="inside-info font-bold w-1/2 my-2 ">
                  <p className="text-gray-400 ">Services : </p>
                  <p>Wifi, television ...</p>
                </div>
              </div>
              <button className="py-1 px-3 bg-blue-400 text-white mt-4 font-bold text-sm tracking-wider rounded-md hover:bg-blue-500 duration-500 ">View details </button>
            </div>
          </div>

          <div className="box md:flex flex-wrap my-20 ">
            <div className="pic lg:w-1/3 md:w-1/2 w-full ">
              <img src={room4} alt="" loading="lazy" className="w-full" />
            </div>
            <div className="details md:pl-4 md:w-1/2 lg:pl-10 pl-0 mt-2">
              <h1 className="md:text-3xl text-xl font-extrabold tracking-wider">Room Vip King</h1>
              <h3 className="font-bold tracking-wider my-4">
                <span className="text-blue-400 text-xl">389$</span>
                <span className="text-gray-400 text-sm"> /Day</span>
              </h3>
              <div className="roominfo flex flex-wrap">
                <div className="inside-info font-bold w-1/2 my-2 ">
                  <p className="text-gray-400 ">Size : </p>
                  <p>48ft</p>
                </div>
                <div className="inside-info font-bold w-1/2 my-2 ">
                  <p className="text-gray-400 ">capacity : </p>
                  <p>Max persion 5</p>
                </div>
                <div className="inside-info font-bold w-1/2 my-2 ">
                  <p className="text-gray-400 ">Bed : </p>
                  <p> Vip beds </p>
                </div>
                <div className="inside-info font-bold w-1/2 my-2 ">
                  <p className="text-gray-400 ">Services : </p>
                  <p>Wifi, television ...</p>
                </div>
              </div>
              <button className="py-1 px-3 bg-blue-400 text-white mt-4 font-bold text-sm tracking-wider rounded-md hover:bg-blue-500 duration-500 ">View details </button>
            </div>
          </div>

          <div className="box md:flex flex-wrap my-20 ">
            <div className="pic lg:w-1/3 md:w-1/2 w-full ">
              <img src={room5} alt="" loading="lazy" className="w-full" />
            </div>
            <div className="details md:pl-4 md:w-1/2 lg:pl-10 pl-0 mt-2">
              <h1 className="md:text-3xl text-xl font-extrabold tracking-wider">Royal Room</h1>
              <h3 className="font-bold tracking-wider my-4">
                <span className="text-blue-400 text-xl">121$</span>
                <span className="text-gray-400 text-sm"> /Day</span>
              </h3>
              <div className="roominfo flex flex-wrap">
                <div className="inside-info font-bold w-1/2 my-2 ">
                  <p className="text-gray-400 ">Size : </p>
                  <p>41ft</p>
                </div>
                <div className="inside-info font-bold w-1/2 my-2 ">
                  <p className="text-gray-400 ">capacity : </p>
                  <p>Max persion 4</p>
                </div>
                <div className="inside-info font-bold w-1/2 my-2 ">
                  <p className="text-gray-400 ">Bed : </p>
                  <p> Royel beds </p>
                </div>
                <div className="inside-info font-bold w-1/2 my-2 ">
                  <p className="text-gray-400 ">Services : </p>
                  <p>Wifi, television ...</p>
                </div>
              </div>
              <button className="py-1 px-3 bg-blue-400 text-white mt-4 font-bold text-sm tracking-wider rounded-md hover:bg-blue-500 duration-500 ">View details </button>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </section>
  );
}
 
export default Roomscomp;