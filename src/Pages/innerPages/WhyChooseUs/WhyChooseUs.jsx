import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Navbars from '../../../components/Navbar/Navbars'
import Section1 from '../WhyChooseUs/Section1'
import PopularQuestions from '../../sections/PopularQuestions'
import Footers from '../../sections/Footers'
import Footer from '../../sections/Footer'
import Navbar from '../../../components/Navbar/Navbar'

const WhyChooseUs = () => {
  return (
    <>
        <Navbar />
        <section id='WhyChooseUse'>
            <Container className="py-5">
                <Row>
                    <Col md={12} className="marg-tp cols-choose">
                        <h1 className='text-center text-h1'>Why Choose Us</h1>
                    </Col>
                </Row>
            </Container>
        </section>
        <Section1 />
        <PopularQuestions />
        <Footer />
        <Footers />
    </>
  )
}

export default WhyChooseUs