import React from 'react'
import Navbars from '../../../components/Navbar/Navbars'
import { Container, Col, Row } from 'react-bootstrap'
import OurServices from '../../sections/OurServices'
import Section from '../Pricing/Section'
import Foot from '../../../Pages/sections/Foot'
import Footers from '../../../Pages/sections/Footers'
import Footer from '../../../Pages/sections/Footer'
import Layer from '../../../assets/images/AboutUs/Layer.png'
import Navbar from '../../../components/Navbar/Navbar'

const Pricing = () => {
    return (
        <>
            <Navbar />
            <section id='bg-blue'>
                <Container>
                    <Row>
                        {/* <img src={Layer} className="layers-4" /> */}
                        <Col md={12} className="marg-tp header mb-5">
                            <h1 className='text-center text-h1'>Price That  Won't Hurt <br /> Your Wallet</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
            <OurServices />
            <Section />
            <Foot />
          
            <Footer />
            <Footers />
        </>
    )
}

export default Pricing
