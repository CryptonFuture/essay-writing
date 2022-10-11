import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Navbars from '../../../components/Navbar/Navbars'
import Section from '../ReferFriend/Section'
import Foot from '../../sections/Foot'
import Footer from '../../sections/Footer'
import Footers from '../../sections/Footers'
import Navbar from '../../../components/Navbar/Navbar'

const ReferFriend = () => {
  return (
    <>
        <Navbar />
        <section id='referfriend'>
            <Container className="py-5">
                <Row>
                    <Col md={12} className="marg-tp">
                        <h1 className='text-center text-h1'>A friend in need <br /> is a friend indeed!</h1>
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

export default ReferFriend