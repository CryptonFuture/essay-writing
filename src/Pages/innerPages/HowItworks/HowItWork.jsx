import React from 'react'
import Navbar from '../../../components/Navbar/Navbars'
import { Container, Col, Row } from 'react-bootstrap'
import Section1 from '../HowItworks/Section1'
import PopularQuestions from '../../sections/PopularQuestions'
import Footer from '../../../Pages/sections/Footers'
import Footers from '../../../Pages/sections/Footer'
import Section2 from '../HowItworks/Section2'
import Layer from '../../../assets/images/AboutUs/Layer.png'

const HowItWork = () => {
  return (
    <>
      <Navbar />
      <section id='howitworks'>
        <Container className="py-5">
          {/* <img src={Layer} className="layers-2" /> */}
          <Row>
            <Col md={12} className="marg-tp">
              <h1 className='text-center text-h1'>Order an  Essay on <br /> Website</h1>
             
            </Col>
          </Row>
        </Container>
      </section>
      <Section1 />
      <Section2 />
      <Footers />
      <Footer />
    </>
  )
}

export default HowItWork
