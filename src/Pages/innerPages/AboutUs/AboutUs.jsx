import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Navbars from '../../../components/Navbar/Navbars'
import Section1 from './Section1'
import Section2 from './Section2'
import OurFeatured from '../../sections/OurFeatured'
import Foot from '../../../Pages/sections/Foot'
import Footer from '../../../Pages/sections/Footers'
import Footers from '../../../Pages/sections/Footer'
import Layer from '../../../assets/images/AboutUs/Layer.png'
import Section3 from './Section3'
import Navbar from '../../../components/Navbar/Navbar'

const AboutsUs = () => {
  return (
    <>
      <Navbar />
      <section id='about-bg'>
        <Container className="py-5 about-container">
          <Row className='justify-content-center'>
            <Col md={6} className="marg-tp mb-5">
              <h1 className='text-center text-h1'>About Us </h1>
            </Col>
          </Row>
        </Container>
      </section>
      <Section1 />
      <Section2 />
      <Section3 />
      <OurFeatured />
      <Foot />
      <Footers />
      <Footer />
    </>
  )
}

export default AboutsUs
