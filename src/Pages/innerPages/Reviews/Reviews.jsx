import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Navbars from '../../../components/Navbar/Navbars'
import Section from '../../../Pages/innerPages/Reviews/Section'
import OurFeatured from '../../sections/OurFeatured'
import Foot from '../../../Pages/sections/Foot'
import Footer from '../../../Pages/sections/Footers'
import Footers from '../../../Pages/sections/Footer'
import Layer from '../../../assets/images/AboutUs/Layer.png'
import Navbar from '../../../components/Navbar/Navbar'

const Reviews = () => {
    return (
        <>
            <Navbar />
            <section id='reviews'>
                <Container>
                    <Row>
                        <Col md={12} className="marg-tp heads  mb-5">
                        {/* <img src={Layer} className="layers-6" /> */}
                            <h1 className='text-center text-h1'>What  Customers Think <br />About Website</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Section />
            <OurFeatured />
            <Foot />
            <Footers />
            <Footer />
        </>
    )
}

export default Reviews
