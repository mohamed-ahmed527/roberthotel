import Slider from "./Slider";
import Testimonials from "./Testimonials";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Gallary from "./Gallary";
import Header from "./Header";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <About />
      <Slider />
      <Testimonials />
      <Gallary />
      <Blog />
      <Contact />
    </div>
  );
}
 
export default Home;