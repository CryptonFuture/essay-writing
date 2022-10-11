import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navbars from '../../../components/Navbar/Navbars'
import Section from '../Guarantee/Section'
import Section1 from '../Guarantee/Section1'
import PriceCalculate from '../../../Pages/sections/PriceCalculate'
import CustomerReview from '../../sections/CustomerReview'
import Foot from '../../../Pages/sections/Foot'
import Footers from '../../../Pages/sections/Footers'
import Footer from '../../../Pages/sections/Footer'
import Card4 from '../../../components/Card/Card4'
import Navbar from '../../../components/Navbar/Navbar'

const Guarantee = () => {
    return (
        <>
            <Navbar />
            <section id='guarantee'>
                <Container>
                    <Row>
                        <Col md={12} className="marg-tp-1 mb-5">
                            <h1 className='text-center fw-bold'>Our Guarantees</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Section />
            <Card4 />
            <PriceCalculate />
            <CustomerReview />
            <Foot />
            <Footer />
            <Footers />
        </>
    )
}

export default Guarantee
