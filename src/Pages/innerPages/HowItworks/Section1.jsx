import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Line from '../../../assets/images/HowItWorks/Line.png'
import rectangle from '../../../assets/images/HowItWorks/Rectangle.png'
import Hand from '../../../assets/images/HowItWorks/hand.png'
import Rectangle1 from '../../../assets/images/HowItWorks/Rectangle1.png'
import Book from '../../../assets/images/HowItWorks/book.png'
import Rectangles from '../../../assets/images/HowItWorks/Rectangles.png'
import Card from '../../../assets/images/HowItWorks/card.png'
import Layer from '../../../assets/images/AboutUs/Layer.png'

const Section1 = () => {
    return (
        <>
            <section id='HowItWorks-1'>
                <Container className='py-5'>
                    <Row>
                        <Col md={12}>
                            <h1 className='text-center fw-bold'>How <img src={Layer} className="layers-3" /> It Works</h1>
                            <p className='text-center'>We ensure our customers try our academic writing that&#39;s original and unique, as per your
                                requirements.</p>
                            <div className='d-flex flex-row justify-content-center'>
                                <img src={Line} className="posi" />
                            </div>
                        </Col>
                        <Col md={6} className="flip">
                            <div className='fill'>
                                <h5 className='fw-bold '>Fill Out an Order Form</h5>
                                <img src={rectangle} />
                                <p className='fonts-flip'>Lorem ipsum dolor sit amet,  elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.  Risus commodo viverra maecenas accumsan.
                                    lacus vel facilisis. </p>
                            </div>

                            <img src={Hand} className="img-2" />

                            <div className='mt-check'>
                                <h5 className='fw-bold '>Check & Pay</h5>
                                <img src={Rectangle1} />
                                <p className='fonts-flip'>Lorem ipsum dolor sit amet,  elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.  Risus commodo viverra maecenas accumsan.
                                    lacus vel facilisis. </p>
                            </div>
                        </Col>

                        <Col md={6} className="fill">
                            <img src={Book} className="img-1" />
                            <div className='marg-pos'>
                                <h5 className='fw-bold'>Choose Your Helper</h5>
                                <img src={Rectangles} />
                                <p className='fonts-flip'>Lorem ipsum dolor sit amet,  elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.  Risus commodo viverra maecenas accumsan.
                                    lacus vel facilisis. </p>

                                <img src={Card} className="img-2 img-3" />

                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section1
