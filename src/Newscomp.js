import {Link } from "react-router-dom" ;
import Contact from "./Contact";

const Newscomp = () => {
  return (
    <section className="news">
      <div className="topheader text-center text-white ">
        <div className="layer py-24 bg-gray-800 bg-opacity-70">
          <h1 className="md:text-5xl text-3xl mb-4 tracking-wider font-extrabold">Blog Left Sidebar</h1>
          <p className="text-md font-bold tracking-wider">
            <Link className="hover:text-blue-400 duration-500 " to="/"> Home </Link>
            <span className="relative top-1 font-medium"> <i class="ri-arrow-right-s-line"></i> </span>
            <Link to="/Newscomp">Blog Left Sidebar</Link>
          </p>
        </div>
      </div>

      <div className="parent my-28">
        <div className="container">
          <div className="son lg:flex justify-between ">
            <section className="leftside w-full lg:w-2/3">
              <div className="box md:flex flex-wrap mb-12 ">
                <div className="pic lg:w-2/5 md:w-1/2 w-full flex items-ceter">
                  <img src={require(`./assets/news1.webp`).default} alt="" className="w-full rounded-md" />
                </div>
                <div className="information md:pl-4 md:w-1/2 lg:pl-10 pl-0 mt-2 flex items-center">
                  <div>
                    <h1 className="date text-blue-400 font-bold tracking-wider text-md">JAN 02,2019 / EVENT</h1>
                    <h1 className="title mb-6 mt-4 text-gray-900 text-xl font-bold  tracking-wider">Cdc Issues Health Alert Notice For Travelers To Usa From Hon</h1>
                    <p className="text-md tracking-wider font-bold text-gray-500 mb-6">A round-the-world trip remains the world’s greatest journey. For two out of every three people, this is the ultimate travel experience, according to recent research...</p>
                    <Link to="" className="font-bold text-md text-gray-400 hover:text-gray-500 duration-500 border-b-2 border-gray-400 hover:border-gray-500 "> Read More </Link>
                  </div>
                </div>
              </div>
              
              <div className="box md:flex flex-wrap mb-12 ">
                <div className="pic lg:w-2/5 md:w-1/2 w-full flex items-ceter">
                  <img src={require(`./assets/news2.webp`).default} alt="" className="w-full rounded-md" />
                </div>
                <div className="information md:pl-4 md:w-1/2 lg:pl-10 pl-0 mt-2 flex items-center">
                  <div>
                    <h1 className="date text-blue-400 font-bold tracking-wider text-md">JAN 02,2021 / EVENT</h1>
                    <h1 className="title mb-6 mt-4 text-gray-900 text-xl font-bold  tracking-wider">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h1>
                    <p className="text-md tracking-wider font-bold text-gray-500 mb-6">Businesses such as GuideMeGreen and the co-op offer a real alternative for people concerned with these issues and with businesses that combine a strong ethical dimension in tandem with making profits...</p>
                    <Link to="" className="font-bold text-md text-gray-400 hover:text-gray-500 duration-500 border-b-2 border-gray-400 hover:border-gray-500 "> Read More </Link>
                  </div>
                </div>
              </div>

              <div className="box md:flex flex-wrap mb-12 ">
                <div className="pic lg:w-2/5 md:w-1/2 w-full flex items-ceter">
                  <img src={require(`./assets/news3.webp`).default} alt="" className="w-full rounded-md" />
                </div>
                <div className="information md:pl-4 md:w-1/2 lg:pl-10 pl-0 mt-2 flex items-center">
                  <div>
                    <h1 className="date text-blue-400 font-bold tracking-wider text-md">FEB 05,2021 / EVENT</h1>
                    <h1 className="title mb-6 mt-4 text-gray-900 text-xl font-bold  tracking-wider">Global Travel And Vacations Luxury Travel On A Tight Budget</h1>
                    <p className="text-md tracking-wider font-bold text-gray-500 mb-6">Life is hectic; it’s true. There are so many things that demand your time and attention. Between work, kids, family and household chores, there is precious little time left over for you.</p>
                    <Link to="" className="font-bold text-md text-gray-400 hover:text-gray-500 duration-500 border-b-2 border-gray-400 hover:border-gray-500 "> Read More </Link>
                  </div>
                </div>
              </div>

              <div className="box md:flex flex-wrap mb-12 ">
                <div className="pic lg:w-2/5 md:w-1/2 w-full flex items-ceter">
                  <img src={require(`./assets/news4.webp`).default} alt="" className="w-full rounded-md" />
                </div>
                <div className="information md:pl-4 md:w-1/2 lg:pl-10 pl-0 mt-2 flex items-center">
                  <div>
                    <h1 className="date text-blue-400 font-bold tracking-wider text-md">March 18,2021 / EVENT</h1>
                    <h1 className="title mb-6 mt-4 text-gray-900 text-xl font-bold  tracking-wider">Will The Democrats Be Able To Reverse The Online Gambling Ban</h1>
                    <p className="text-md tracking-wider font-bold text-gray-500 mb-6">Everyone loves good, old fashioned charcoal grilling. Aside from being cheaper than other grilling methods, it adds a raw, distinctive taste to your sausages, burgers, ribs, and other grilled items.</p>
                    <Link to="" className="font-bold text-md text-gray-400 hover:text-gray-500 duration-500 border-b-2 border-gray-400 hover:border-gray-500 "> Read More </Link>
                  </div>
                </div>
              </div>

              <div className="box md:flex flex-wrap mb-12 ">
                <div className="pic lg:w-2/5 md:w-1/2 w-full flex items-ceter">
                  <img src={require(`./assets/news5.webp`).default} alt="" className="w-full rounded-md" />
                </div>
                <div className="information md:pl-4 md:w-1/2 lg:pl-10 pl-0 mt-2 flex items-center">
                  <div>
                    <h1 className="date text-blue-400 font-bold tracking-wider text-md">DEC 20,2021 / EVENT</h1>
                    <h1 className="title mb-6 mt-4 text-gray-900 text-xl font-bold  tracking-wider">Les Houches The Hidden Gem Of The Chamonix Valley</h1>
                    <p className="text-md tracking-wider font-bold text-gray-500 mb-6">Las Vegas has more than 100,000 hotel rooms to choose from. There is something for every budget, and enough entertainment within walking distance to keep anyone occupied for months.</p>
                    <Link to="" className="font-bold text-md text-gray-400 hover:text-gray-500 duration-500 border-b-2 border-gray-400 hover:border-gray-500 "> Read More </Link>
                  </div>
                </div>
              </div>

            </section>

            <section className="rightside w-full lg:w-1/3 lg:pl-2 pl-0">
              <div className="topbox p-4 bg-green-100 bg-opacity-70 mb-16">
                <h1 className="text-gray-900 font-bold text-2xl ">Newsletter</h1>
                <p className="text-gray-500 font-bold tracking-wider my-4 ">Subscribe our newsletter gor get notification new updates.</p>
                <form >
                  <input type="text" className="block w-full p-2 text-gray-900 font-bold text-sm tracking-wider" placeholder="Enteryour email..." />
                  <button className="w-full bg-green-400 hover:bg-green-500 duration-500 mt-8 mb-4 py-3 font-bold text-white"> Subscribe </button>
                </form>
              </div>
              <div className="recentnews mt-20">
                <h1 className="border-b-2 text-xl font-bold tracking-wider pb-1">Recent News</h1>
                
                <div className="box flex mt-14">
                  <div className="pic w-40 mr-3">
                    <img src={require(`./assets/about2.webp`).default} alt="" className="rounded-md w-full" />
                  </div>
                  <div className="info">
                  <h1 className="date text-blue-400 font-bold tracking-wider text-md">DEC 20,2021 / EVENT</h1>
                  <h1 className="title mb-6 mt-4 text-gray-900 text-md font-bold tracking-wide">Proven Techniques Help You Herbal Breast</h1>
                  </div>
                </div>

                <div className="box flex mt-14">
                  <div className="pic w-36 mr-3">
                    <img src={require(`./assets/recentnews2.webp`).default} alt="" className="rounded-md w-full" />
                  </div>
                  <div className="info">
                  <h1 className="date text-blue-400 font-bold tracking-wider text-md">APR 18,2021 / EVENT</h1>
                  <h1 className="title mb-6 mt-4 text-gray-900 text-md font-bold tracking-wide">Cooking On A George Foreman Grill</h1>
                  </div>
                </div>

                <div className="box flex mt-14">
                  <div className="pic w-32 mr-3">
                    <img src={require(`./assets/recentnews3.webp`).default} alt="" className="rounded-md w-full" />
                  </div>
                  <div className="info">
                  <h1 className="date text-blue-400 font-bold tracking-wider text-md">JAN 27,2021 / EVENT</h1>
                  <h1 className="title mb-6 mt-4 text-gray-900 text-md font-bold tracking-wide">Selecting The Right Hotel</h1>
                  </div>
                </div>

                <div className="box flex mt-14">
                  <div className="pic w-36 mr-3">
                    <img src={require(`./assets/recentnews4.webp`).default} alt="" className="rounded-md w-full" />
                  </div>
                  <div className="info">
                  <h1 className="date text-blue-400 font-bold tracking-wider text-md">OCT 13,2021 / EVENT</h1>
                  <h1 className="title mb-6 mt-4 text-gray-900 text-md font-bold tracking-wide">Comment Importance Of Human Life</h1>
                  </div>
                </div>
              </div>
              <div className="instagram mt-20">
                <h1 className="border-b-2 text-xl font-bold tracking-wider pb-1 mb-10">Instagram</h1>
                <div className="parent flex flex-wrap">
                  <div className="pic w-1/3 p-1 my-1"> <img src={require(`./assets/insta1.webp`).default} alt="" loading="lazy" /> </div>
                  <div className="pic w-1/3 p-1 my-1"> <img src={require(`./assets/insta2.webp`).default} alt="" loading="lazy" /> </div>
                  <div className="pic w-1/3 p-1 my-1"> <img src={require(`./assets/insta3.webp`).default} alt="" loading="lazy" /> </div>
                  <div className="pic w-1/3 p-1 my-1"> <img src={require(`./assets/insta4.webp`).default} alt="" loading="lazy" /> </div>
                  <div className="pic w-1/3 p-1 my-1"> <img src={require(`./assets/insta5.webp`).default} alt="" loading="lazy" /> </div>
                  <div className="pic w-1/3 p-1 my-1"> <img src={require(`./assets/insta6.webp`).default} alt="" loading="lazy" /> </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Contact />
    </section>
  );
}
 
export default Newscomp;