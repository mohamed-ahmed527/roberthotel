import { useState } from "react";

import headerbg from "./assets/headerbg.webp" ;
import slider2 from "./assets/slider2.webp" ;

const Slider = () => {
  const [slides , setSlides ] = useState([
    {index:1, picture : headerbg , title : "Premium King Room" , price : "400$" , size: " : 30 ft" ,capacity:" : Max person 5" , bed: "king Beds", services:": Wifi,Television,Bathroom" },
    {index:2, picture : slider2 , title : "Best King Room" , price : "187$" , size: " : 25 ft" ,capacity:" : Max person 3" , bed: "king Beds", services:": Wifi,Television,Bathroom" }
  ]);

  const [slideIndex, setSlideIndex ] = useState(1) ;  

  const nextSlide = () => {
    if(slideIndex !== slides.length ){
      setSlideIndex(slideIndex + 1);
    }
    else if (slideIndex === slides.length){
      setSlideIndex(1);
    }
  }

  const prevSlide = () => {
    if(slideIndex !== 1){
      setSlideIndex(slideIndex - 1);
    }
    else if(slideIndex === 1){
      setSlideIndex(slides.length);
    }
  }

  return (
    <section className="slider my-32">
      <ul className="list">
        {slides.map((item , index) => (
          <div className={slideIndex === index +1 ? "slide active-anmi" : "slide"}>
            <li className="md:flex flex-wrap bg-gray-800" >
              <div className="pic lg:w-1/2 w-full flex items-center">
                <img src={item.picture} alt="" loading="lazy" className="w-full" />
              </div>

              <div className="text pb-10 lg:w-1/2 w-full flex items-center md:px-4">
                <div>
                  <h1 className="lg:text-5xl text-4xl font-bold my-10 text-white"> {item.title} </h1>
                  <h3 className="font-bold tracking-wider my-4">
                    <span className="text-blue-400 text-3xl"> {item.price} </span>
                    <span className="text-white text-sm"> /Day</span>
                  </h3>
                  <div className="info text-white my-10">
                    <div className="w-full box tracking-widest flex justify-between font-bold my-2 text-md">
                      <span className="w-1/3"> <span><i class="ri-check-fill"></i></span> Size </span>
                      <span className="w-2/3"> {item.size}</span>
                    </div>
                    <div className="w-full box tracking-widest flex justify-between font-bold my-2 text-md">
                      <span className="w-1/3"><span><i class="ri-check-fill"></i></span> Capacity</span>
                      <span className="w-2/3"> {item.capacity} </span>
                    </div>
                    <div className="w-full box tracking-widest flex justify-between font-bold my-2 text-md">
                      <span className="w-1/3"><span><i class="ri-check-fill"></i></span> Bed</span>
                      <span className="w-2/3"> {item.bed}</span>
                    </div>
                    <div className="w-full box tracking-widest flex justify-between font-bold my-2 text-md">
                      <span className="w-1/3"><span><i class="ri-check-fill"></i></span> Services</span>
                      <span className="w-2/3"> {item.services}</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>

      <div className="btns absolute bottom-0 ">
        <span className="prev cursor-pointer text-xl bg-white text-blue-300 py-1 px-2 font-bold " onClick={prevSlide} >Prev</span>
        <span className="next cursor-pointer text-xl bg-blue-300 text-white py-1 px-2 font-bold " onClick={nextSlide} >Next</span>
      </div>
    </section>
  );
}
 
export default Slider;