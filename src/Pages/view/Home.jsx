import React from 'react'
import Hero from '../../components/Hero/Hero'
import Navbars from '../../components/Navbar/Navbars'
import CustomerReview from '../sections/CustomerReview'
import DummyText from '../sections/DummyText'
import Footer from '../sections/Footer'
import Footers from '../sections/Footers'
import OurEssayWriters from '../sections/OurEssayWriters'
import OurFeatured from '../sections/OurFeatured'
import OurServices from '../sections/OurServices'
import PopularQuestions from '../sections/PopularQuestions'
import PriceCalculate from '../sections/PriceCalculate'
import Subject from '../sections/Subject'
import Writer from '../sections/Writer'
import Card5 from '../../components/Card/Card5'

const Home = () => {
  return (
    <>
      <Navbars />
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
      <Footers />
    </>
  )
}

export default Home
