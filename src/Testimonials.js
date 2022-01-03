import testimonialspic from "./assets/testimonialspic.webp";

const Testimonials = () => {
  return (
    <section className="testimonials my-32">
      <div className="container md:flex flex-wrap">
        <div className="pic md:w-1/2 lg:w-1/3 w-full flex items-center">
          <img src={testimonialspic} alt="" className="w-full rounded-md" loading="lazy" />
        </div>
        <div className="text md:w-1/2 w-full md:px-6 flex items-center">
          <div className="title">
            <h3 className="text-blue-400 tracking-widest text-lg font-bold my-4">TESTIMONIALS</h3>
            <h1 className="text-gray-900 lg:text-4xl text-2xl font-black tracking-wider">Our Guests Love Us</h1>
            <p className="text-gray-500 font-semibold tracking-widest my-10 md:text-md text-sm">“This can be achieved by applying search engine optimization or popularly known as SEO. This is a marketing strategy which increases the quality and quantity of traffic flow to a particular website via search engines.” </p>
            <p className="my-4">
              <span className="text-yellow-500"><i class="ri-star-fill"></i></span>
              <span className="text-yellow-500"><i class="ri-star-fill"></i></span>
              <span className="text-yellow-500"><i class="ri-star-fill"></i></span>
              <span className="text-yellow-500"><i class="ri-star-fill"></i></span>
              <span className="text-yellow-500"><i class="ri-star-fill"></i></span>
            </p>
            <p className="tracking-wider">
              <span className="text-gray-800 font-semibold">Robert Downey<span className="text-blue-400"> - CEO Deercreative</span></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Testimonials;