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
import icondot from '../../../assets/images/icondot.png'
import icondot2 from '../../../assets/images/icondot2.png'
import icondot3 from '../../../assets/images/icondot3.png'

const Section1 = () => {
    return (
        <>
            <section id='HowItWorks-1'>
                <Container className='py-5'>
                    <Row>
                        <Col md={12}>
                            <h1 className='text-center fw-bold'>How It Works</h1>
                            <p className='text-center'>We ensure our customers try our academic writing that&#39;s original and unique, as per your
                                requirements.</p>
                            {/* <div className='d-flex flex-row justify-content-center'>
                                <img src={Line} className="posi" />
                            </div> */}

                            <div className='timeline'>
                                <div className='container-1 left-container'>
                                    <img src={icondot} alt="" />
                                    <div className='text-box'>
                                        <h2>Alphabet Inc.</h2>
                                        <small>2018 - 2019</small>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quas est obcaecati! Nesciunt suscipit alias iure cupiditate at. Repellat, consequuntur! Modi, quo. Accusantium sunt quisquam rem esse laudantium. Rem, ut.</p>
                                        <span className='left-container-arrow'></span>
                                    </div>
                                </div>

                                <div className='container-1 right-container'>
                                <img src={icondot2} alt="" />

                                    <div className='text-box'>
                                        <h2>Alphabet Inc.</h2>
                                        <small>2018 - 2019</small>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quas est obcaecati! Nesciunt suscipit alias iure cupiditate at. Repellat, consequuntur! Modi, quo. Accusantium sunt quisquam rem esse laudantium. Rem, ut.</p>
                                        <span className='right-container-arrow'></span>

                                    </div>
                                </div>

                                <div className='container-1 left-container'>
                                <img src={icondot3} alt="" />

                                    <div className='text-box'>
                                        <h2>Alphabet Inc.</h2>
                                        <small>2018 - 2019</small>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quas est obcaecati! Nesciunt suscipit alias iure cupiditate at. Repellat, consequuntur! Modi, quo. Accusantium sunt quisquam rem esse laudantium. Rem, ut.</p>
                                        <span className='left-container-arrow'></span>

                                    </div>
                                </div>

                                <div className='container-1 right-container'>
                                <img src={icondot} alt="" />
                                    <div className='text-box'>
                                        <h2>Alphabet Inc.</h2>
                                        <small>2018 - 2019</small>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quas est obcaecati! Nesciunt suscipit alias iure cupiditate at. Repellat, consequuntur! Modi, quo. Accusantium sunt quisquam rem esse laudantium. Rem, ut.</p>
                                        <span className='right-container-arrow'></span>

                                    </div>
                                </div>
                            </div>

                            
                        </Col>
                        {/* <Col md={6} className="flip">
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
                        </Col> */}

                        {/* <Col md={6} className="fill">
                            <img src={Book} className="img-1" />
                            <div className='marg-pos'>
                                <h5 className='fw-bold'>Choose Your Helper</h5>
                                <img src={Rectangles} />
                                <p className='fonts-flip'>Lorem ipsum dolor sit amet,  elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.  Risus commodo viverra maecenas accumsan.
                                    lacus vel facilisis. </p>

                                <img src={Card} className="img-2 img-3" />

                            </div>
                        </Col> */}

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section1
