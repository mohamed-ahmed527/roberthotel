import headerbg from "./assets/headerbg.webp";

const Header = () => {
  return (
    <header>
      <div className="relative">
        <img src={headerbg} alt="" className="z-0" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center bg-black bg-opacity-50">
          <div className="text-center w-full text-white ">
            <h2 className="tracking-widest text-lg md:text-xl font-semibold">HOTEL & RESORT</h2>
            <h1 className="tracking-widest text-3xl md:text-5xl mt-4 mb-10 font-semibold">Welcome To Roberto </h1>
            <button className="border-blue-400 border-2 rounded-sm px-8 py-2 text-lg tracking-widest hover:bg-blue-400 duration-1000"> Discover Now </button>
          </div>
        </div>
      </div>
      <div className="relative -mt-14 w-2/3 z-10 rounded-md bg-white mx-auto px-10 py-6 shadow-lg mb-24">
          <div className="flex justify-between flex-wrap">
            <div className="mx-1 my-4">
              <h1 className="text-lg font-semibold mb-5 tracking-wide ">Check In </h1>
              <input type="date" className="border-2 gray-blue-400 rounded-md border-opacity-75 px-2 py-1" />
            </div>
            <div className="mx-1 my-4">
              <h1 className="text-lg font-semibold mb-5 tracking-wide ">Check Out </h1>
              <input type="date" className="border-2 gray-blue-400 rounded-md border-opacity-75 px-2 py-1" />
            </div>
            <div className="mx-1 my-4">
              <h1 className="text-lg font-semibold mb-5 tracking-wide ">Room </h1>
              <select className="border-2 gray-blue-400 rounded-md border-opacity-75 text-gray-600 px-2 py-1 ">
                <option value="1" className="text-gray-600 ">01</option>
                <option value="2" className="text-gray-600 ">02</option>
                <option value="3" className="text-gray-600 ">03</option>
                <option value="4" className="text-gray-600 ">04</option>
                <option value="5" className="text-gray-600 ">05</option>
                <option value="6" className="text-gray-600 ">06</option>
              </select>
            </div>
            <div className="mx-1 my-4">
              <h1 className="text-lg font-semibold mb-5 tracking-wide ">Adult </h1>
              <select className="border-2 gray-blue-400 rounded-md border-opacity-75 text-gray-600 px-2 py-1 ">
                <option value="1" className="text-gray-600 ">01</option>
                <option value="2" className="text-gray-600 ">02</option>
                <option value="3" className="text-gray-600 ">03</option>
                <option value="4" className="text-gray-600 ">04</option>
                <option value="5" className="text-gray-600 ">05</option>
                <option value="6" className="text-gray-600 ">06</option>
              </select>
            </div>
            <div className="mx-1 my-4">
              <h1 className="text-lg font-semibold mb-5 tracking-wide ">Chidern </h1>
              <select className="border-2 gray-blue-400 rounded-md border-opacity-75 text-gray-600 px-2 py-1 ">
                <option value="1" className="text-gray-600 ">01</option>
                <option value="2" className="text-gray-600 ">02</option>
                <option value="3" className="text-gray-600 ">03</option>
                <option value="4" className="text-gray-600 ">04</option>
                <option value="5" className="text-gray-600 ">05</option>
                <option value="6" className="text-gray-600 ">06</option>
              </select>
            </div>
            <div className="mx-1 my-4 flex items-end">
              <button className="py-2 px-6 text-white bg-blue-400 hover:bg-white hover:text-blue-400 border-blue-400 border-2 rounded-sm duration-1000 tracking-wide"> Check Availability </button>
            </div>
          </div>
        </div>
    </header>
  );
}
 
export default Header;