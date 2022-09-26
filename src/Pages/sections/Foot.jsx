import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Chat from '../../assets/images/icon/chat.png'
import Line from '../../assets/images/Line.png'

const Foot = () => {
    return (
        <>
            <section id='footer-img' className='container containers postions-top mb-5'>
                <section id="footer-bg" className='mt-5'>
                    <Container className='py-3'>
                        <Row>
                            <Col md={12} className="p-5 footer">
                                <h1 className='text-center text-white fw-bolder'>
                                    Still Have
                                    <span>
                                        <img src={Line} className="layer-img-10" />
                                    </span>
                                    <span className='positions-10'>Questions?</span>
                                </h1>
                                <p className='text-center text-white '>Find answers in our FAQS or contact out Support Team.</p>
                                <h1 className='text-center text-white'>1-888-318-0063</h1>
                                <div className='d-flex flex-row justify-content-center'>
                                    <Button className='gradient-1'>
                                        <span> Chat Now 24/7 <img className='ms-3 img-ms' src={Chat} /></span>
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </section>
        </>
    )
}

export default Foot
