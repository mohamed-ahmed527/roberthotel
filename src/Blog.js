import gallary1 from "./assets/gallary1.webp";
import bloghotel from "./assets/bloghotel.webp";

const Blog = ()=>{
  return(
    <section className="blog my-32">
      <div className="container">
        <div className="blog-title text-center">
          <h3 className="text-blue-400 tracking-widest text-lg font-bold my-4">OUR BLOG</h3>
          <h1 className="text-gray-900 lg:text-4xl text-2xl font-black tracking-wider">Latest News & Event</h1>
        </div>
        <article className="parent md:flex flex-wrap justify-evenly my-16">
          <div className="box lg:w-1/3 md:w-1/2 w-full md:p-2 my-14 hover:-translate-y-4 transform duration-700  rounded-md">
            <div className="pic">
              <img src={gallary1} alt="" loading="lazy" />
            </div>
            <div className="text mt-4">
              <div className="date flex justify-between font-bold tracking-wider text-sm">
                <p className="text-gray-400 ">JAN 02, 2019</p>
                <p className="text-blue-400 ">EVENT</p>
              </div>
              <div className="title my-4 text-lg font-bold tracking-wide text-gray-800">
                <h1> Learn How To Motivate Yourself</h1>
              </div>
              <div className="info">
                <p className="text-gray-500 font-semibold tracking-wider">
                  How many free autoresponders have you tried? And how many emails did you get through using them?
                </p>
              </div>
            </div>
          </div>
          
          <div className="box lg:w-1/3 md:w-1/2 w-full md:p-2 my-14 hover:-translate-y-4 transform duration-700  rounded-md">
            <div className="pic">
              <img src={bloghotel} alt="" loading="lazy" />
            </div>
            <div className="text mt-4">
              <div className="date flex justify-between font-bold tracking-wider text-sm">
                <p className="text-gray-400 ">JAN 02, 2019</p>
                <p className="text-blue-400 ">EVENT</p>
              </div>
              <div className="title my-4 text-lg font-bold tracking-wide text-gray-800">
                <h1>What If Let You Run The Hubble</h1>
              </div>
              <div className="info">
                <p className="text-gray-500 font-semibold tracking-wider">My point here is that if you have no clue for the answers above you probably are not operating a followup.</p>
              </div>
            </div>
          </div>

          <div className="box lg:w-1/3 md:w-1/2 w-full md:p-2 my-14 hover:-translate-y-4 transform duration-700  rounded-md">
            <div className="pic">
              <img src={gallary1} alt="" loading="lazy" />
            </div>
            <div className="text mt-4">
              <div className="date flex justify-between font-bold tracking-wider text-sm">
                <p className="text-gray-400 ">JAN 02, 2019</p>
                <p className="text-blue-400 ">EVENT</p>
              </div>
              <div className="title my-4 text-lg font-bold tracking-wide text-gray-800">
                <h1> Learn How To Motivate Yourself</h1>
              </div>
              <div className="info">
                <p className="text-gray-500 font-semibold tracking-wider">
                  How many free autoresponders have you tried? And how many emails did you get through using them?
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Blog ;