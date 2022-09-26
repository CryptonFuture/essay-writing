import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Chat from '../../assets/images/icon/chat.png'
import Line from '../../assets/images/Line.png'
import BackToTop from '../../components/BackToTop/BackToTop'

const Footers = () => {
  return (
    <>
      <section id="section-footer">
        <Container className='py-2'>
          <Row>
            <Col md={12} className="footer-line">
              <p className='text-center font-sizes mt-4'>Copyright 2022. www.website.com. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <BackToTop />

    </>
  )
}

export default Footers
