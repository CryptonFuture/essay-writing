import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbars from './components/Navbar/Navbars';
import Hero from './components/Hero/Hero';
import OurServices from './Pages/sections/OurServices';
import PriceCalculate from './Pages/sections/PriceCalculate';
import Writer from './Pages/sections/Writer';
import OurFeatured from './Pages/sections/OurFeatured';
import Subject from './Pages/sections/Subject';
import OurEssayWriters from './Pages/sections/OurEssayWriters';
import CustomerReview from './Pages/sections/CustomerReview';
import DummyText from './Pages/sections/DummyText'
import PopularQuestions from './Pages/sections/PopularQuestions'
import Footer from './Pages/sections/Footer'
import Footers from './Pages/sections/Footers'
import Foot from './Pages/sections/Foot';
import AboutsUs from './Pages/innerPages/AboutUs/AboutUs';
import Faqs from './Pages/innerPages/Faqs/Faqs';
import HowItWork from './Pages/innerPages/HowItworks/HowItWork';
import Pricing from './Pages/innerPages/Pricing/Pricing';
import Reviews from './Pages/innerPages/Reviews/Reviews'
import Cookie from './Pages/innerPages/Cookie/Cookie';
import Guarantee from './Pages/innerPages/Guarantee/Guarantee';
import Privacy from './Pages/innerPages/Privacy/Privacy';
import ReferFriend from './Pages/innerPages/ReferFriend/ReferFriend';
import Refund from './Pages/innerPages/Refund/Refund';
import Revision from './Pages/innerPages/Revision/Revision';
import WhyChooseUs from './Pages/innerPages/WhyChooseUs/WhyChooseUs';
import TermUs from './Pages/innerPages/TermUs/TermUs';
import Loader from './components/Loader/Loader';
import { motion } from "framer-motion"
import BackToTop from './components/BackToTop/BackToTop';
import HamBurger from './components/Hamburger/HamBurger';
import Home from './Pages/view/Home';
import Routers from './Router/Routers';

function App() {
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
    {/* <HamBurger /> */}
      {/* <Loader /> */}
      {/* <Foot /> */}
        {/* {loading ? (
        <Loader />
      ) : (   */}
        <>
            {/* <Navbars />
            <Hero />
            <OurServices />
            <PriceCalculate />
            <Writer />
            <OurFeatured />
            <Subject />
            <OurEssayWriters />
            <CustomerReview />
            <DummyText />
            <PopularQuestions />
            <Footer />
            <Footers /> */}
            {/* <Home /> */}
            <Routers />
        </>
          {/* )}      */}

      {/* <BackToTop /> */}

      {/* <AboutsUs /> */}
      {/* <Faqs /> */}
      {/* <HowItWork /> */}
      {/* <Pricing /> */}
      {/* <Reviews /> */}
      {/* <Cookie /> */}
      {/* <Guarantee /> */}
      {/* <Privacy /> */}
      {/* <ReferFriend /> */}
      {/* <Refund /> */}
      {/* <Revision /> */}
      {/* <WhyChooseUs /> */}
      {/* <TermUs /> */}
    </>
  );
}

export default App;
