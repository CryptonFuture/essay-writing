import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Navbars from '../../../components/Navbar/Navbars'
import Section from '../../innerPages/Order/Section'
import Foot from '../../sections/Foot'
import Footer from '../../sections/Footer'
import Footers from '../../sections/Footers'

const Order = () => {
  return (
    <>
    <section id="orderNow">
      <Navbars />
      <Container className='py-5 p-5 mt-5'>
          
        <Row className='justify-content-center'>
          {/* <Col md={6} className="marg-tp heading cols">
            <h1 className='text-center text-h1 about-us'> Order Now</h1>
          </Col> */}
          <Col md={6} className=" order_margin">
            <h1 className='text-center text-h1'> Order Now</h1>
          </Col>
        </Row>
      </Container>
    </section>
    <Section />
    <Foot />
    <Footer />
    <Footers />
    </>
  )
}

export default Order
