import React from 'react'
import Navbars from '../../../components/Navbar/Navbars'
import { Container, Col, Row } from 'react-bootstrap'
import Section1 from './Section1'
import Foot from '../../../Pages/sections/Foot'
import Footer from '../../../Pages/sections/Footers'
import Footers from '../../../Pages/sections/Footer'
import Layer from '../../../assets/images/AboutUs/Layer.png'
import Navbar from '../../../components/Navbar/Navbar'

const Faqs = () => {
  return (
    <>
        <Navbar />
        <section id='about-bg'>
           <Container className="py-5">
                <Row>
                {/* <img src={Layer} className="layers-1" /> */}
                    <Col md={12} className="marg-tp">
                        <h1 className='text-center text-h1'>FAQ&#39;s</h1>
                    </Col>
                </Row>
           </Container>
    </section>
    <Section1 />
    <Foot />
    <Footers />
    <Footer />
    
    </>
  )
}

export default Faqs
