import React from 'react'
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap'
import Chat from '../../../assets/images/icon/chat.png'
import Line from '../../../assets/images/Line.png'

const Section2 = () => {
  return (
    <section id='popular-hero' >
                <section id="popular-bg">
                    <Container className='py-5' fluid>
                        <Row className='justify-content-center'>
                            <Col md={6}>
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
                            {/* <Container>
                                <Container>
                                    <Container>
                                        <Container> */}

                                            <Row className='mt-3'>
                                                <Col md={6}>
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0" className='accordion shadow-sm'>
                                                            <Accordion.Header><span className='fw-bolder'>What services do you offer?</span></Accordion.Header>
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

                                                        <div className='mt-3'>
                                                            <Accordion.Item eventKey="1" className='accordion shadow-sm'>
                                                                <Accordion.Header><span className='fw-bolder'>Can you do my paper for me in any format?</span></Accordion.Header>
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
                                                        </div>

                                                        <div className='mt-3'>
                                                            <Accordion.Item eventKey="2" className='accordion shadow-sm'>
                                                                <Accordion.Header><span className='fw-bolder'>What does the price of academic writing  services depend on?</span></Accordion.Header>
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
                                                        </div>

                                                        <div className='mt-3'>
                                                            <Accordion.Item eventKey="3" className='accordion shadow-sm'>
                                                                <Accordion.Header><span className='fw-bolder'>Can i pay someone to write my paper for me  the advancement?</span></Accordion.Header>
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
                                                        </div>
                                                    </Accordion>
                                                </Col>

                                                <Col md={6}>
                                                    <Accordion defaultActiveKey="0">
                                                        <Accordion.Item eventKey="0" className='accordion shadow-sm '>
                                                            <Accordion.Header className='accordian-headers'><span className='fw-bolder'>is it safe to use an online essay help service?</span></Accordion.Header>
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

                                                        <div className='mt-3'>
                                                            <Accordion.Item eventKey="1" className='accordion shadow-sm'>
                                                                <Accordion.Header><span className='fw-bolder'>6.is there any money-back guarantee at your paper writer services?</span></Accordion.Header>
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
                                                        </div>

                                                        <div className='mt-3'>
                                                            <Accordion.Item eventKey="2" className='accordion shadow-sm'>
                                                                <Accordion.Header><span className='fw-bolder'>Can you do my essay for cheap?</span></Accordion.Header>
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
                                                        </div>

                                                        <div className='mt-3'>
                                                            <Accordion.Item eventKey="3" className='accordion shadow-sm'>
                                                                <Accordion.Header><span className='fw-bolder'>Can you help me find someone to write me an essay?</span></Accordion.Header>
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
                                                        </div>
                                                    </Accordion>
                                                </Col>
                                            </Row>
                                            <section id='footer-img'>
                                                <section id="footer-bg" className='mt-5 postions-top'>

                                                    <Container className='py-3'>
                                                        <Row>
                                                            <Col md={12} className="p-5">
                                                                <h1 className='text-center text-white fw-bolder'>
                                                                    Still Have
                                                                    <span>
                                                                        <img src={Line} className="layer-img-10" />
                                                                    </span>
                                                                   <span className='positions-10'>Questions?</span>
                                                                </h1>
                                                                <p className='text-center text-white'>Find answers in our FAQS or contact out Support Team.</p>
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
                                        </Container>
                                    {/* </Container>
                                </Container>
                            </Container>
                        </Container> */}

                    </Container>
                </section>
            </section>
  )
}

export default Section2
