import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Banner from './components/Banner';
import AppStore from './components/AppStore';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';



const App = () => {
  useEffect(() => {
    Aos.init({
        offset: 100,
        duration: 700,
        easing: "ease-in",
        delay: 100,
      });
 });
  return (
  <div className="overflow-x-hidden">
    <Navbar />
    <Home></Home>
    <Services></Services>
    <Banner></Banner>
    <AppStore></AppStore>
    <Testimonial></Testimonial>
    <Footer></Footer>
  </div>
  );
};

export default App;