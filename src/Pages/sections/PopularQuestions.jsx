import React, { useState } from 'react'
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap'
import Chat from '../../assets/images/icon/chat.png'
import Line from '../../assets/images/Line.png'
import { Accordian3, Accordian4 } from '../../Item/Accordion'

const PopularQuestions = () => {
    return (
        <>
            <section id='popular-hero'>
                <section id="popular-bg">
                    <Container className='py-5' fluid>

                        <Row className='justify-content-center margin-p'>
                            <Col md={6} className="Cols">
                                <h1 className='text-center fw-bolder'>
                                    Answer to the popular
                                    <span>
                                        <img src={Line} className="layer-img-9" />
                                    </span>
                                    <span className='positions-9'>questions</span>
                                </h1>
                                <p className='text-center texted'>Lorem ipsum dolor sit amet,  elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida.
                                    Risus commodo viverra maecenas accumsan.
                                    lacus vel facilisis.</p>
                            </Col>
                        </Row>
                        <Container>


                            <Row className='justify-content-center'>
                                <Col md={6}>
                                    <Accordion>
                                        {
                                            Accordian3.map((accordion, index) => {
                                                return (
                                                    <div className='mt-3'>
                                                        <Accordion.Item eventKey={index} className='accordion shadow-sm'>
                                                            <Accordion.Header><span className='fw-bolder font-accordians'>{accordion.title}</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                {accordion.description}
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </div>
                                                )
                                            })
                                        }

                                    </Accordion>
                                </Col>

                                {/* <Col md={6} className="mt-3">
                                    <Accordion defaultActiveKey="0">

                                        <Accordion.Item eventKey="0" className='accordion shadow-sm '>
                                            <Accordion.Header className='accordian-headers'><span className='fw-bolder  font-accordians'>is it safe to use an online essay help service?</span></Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        {
                                            Accordian4.map((accordion, index) => {
                                                return (
                                                    <div className='mt-3'>
                                                        <Accordion.Item eventKey={index} className='accordion shadow-sm'>
                                                            <Accordion.Header><span className='fw-bolder  font-accordians'>{accordion.title}</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                {accordion.description}
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Accordion>
                                </Col> */}
                            </Row>

                            <section id='footer-img section-top'>
                                <section id="footer-bg" className='mt-5 postions-top '>

                                    <Container className='py-3'>
                                        <Row>
                                            <Col md={12} className="p-5 col-footer">
                                                <h1 className='text-center text-white fw-bolder'>
                                                    Still Have
                                                    <span>
                                                        <img src={Line} className="layer-img-10" />
                                                    </span>
                                                    <span className='positions-10'>Questions?</span>
                                                </h1>
                                                <p className='text-center text-white foot_contact'>Find answers in our FAQS or contact out Support Team.</p>
                                                <h1 className='text-center text-white foot_h1'>1-888-318-0063</h1>
                                                <div className='flexs-rows d-flex flex-row justify-content-center'>
                                                    <Button className='gradient-1'>
                                                        <span> Chat Now 24/7 <img className='ms-3 img-ms' src={Chat} /></span>
                                                    </Button>
                                                </div>

                                            </Col>
                                        </Row>
                                    </Container>
                                </section>
                            </section>

                        </Container>

                    </Container>
                </section>
            </section>
        </>
    )
}

export default PopularQuestions
