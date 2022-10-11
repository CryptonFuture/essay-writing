import React from 'react'
import { Col, Container, Row, ListGroup } from 'react-bootstrap'
import Logo from '../../assets/images/Logo/Logo1.png'
import facebook from '../../assets/images/Social-Icon/facebook.png'
import Twitter from '../../assets/images/Social-Icon/twitter.png'
import Instagram from '../../assets/images/Social-Icon/instagram.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <section id='footer'>
                <section id="footers-bg">
                <Container className='py-5'>
                    

                    <Row className='margin'>
                        <Col md={4}>
                            <img src={Logo} className="img-logo" />
                            {/* <span className='ms-2 bolders font-logo'>Logo</span> */}
                            <p className='para mt-3'>Some customers wonder, “Is PaperHelp.org legit?” The answer is a resounding “Yes.” The papers we provide serve as examples of excellent academic writing and can be used to improve one’s writing skills. Customers who get help with writing papers are discouraged from passing them as their own. As such, hiring the best paper writing helper via this website is totally legal.</p>

                            <h6 className='fw-bolder'>
                                <span>Follow Us:</span>
                                <img className='ms-3' src={facebook} alt="" />
                                <img className='ms-3' src={Twitter} alt="" />
                                <img className='ms-3' src={Instagram} alt="" />
                            </h6>
                        </Col>

                        <Col md={2} className="mt-3">
                            <h6 className='fw-bolder'>General</h6>
                            <ListGroup>
                                <ListGroup.Item className='transparents'>
                                   <a href='#'>Home</a> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <a href='#'> Dissertation Writing</a> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <a href='#'>Editing</a> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <a href='#'>Other Services</a> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <a href='#'> Reviews</a> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <a href='#'> Sample</a> 
                                </ListGroup.Item>

                            </ListGroup>
                        </Col>

                        <Col md={2} className="mt-3">
                            <h6 className='fw-bolder'>Client Area</h6>
                            <ListGroup>
                                <ListGroup.Item className='transparents'>
                                   <Link to='/about-us'>About Us</Link> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <Link to='/how-it-work'> How it Works</Link> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <Link to='/pricing'>Pricing</Link> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <Link to='/faqs'>FAQS</Link> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <a href='#'> Referral Program</a> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <a href='#'> Coupon Partner</a> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <a href='#'> Contact Us</a> 
                                </ListGroup.Item>


                            </ListGroup>
                        </Col>

                        <Col md={2} className="mt-3">
                            <h6 className='fw-bolder'>Top Services</h6>
                            <ListGroup>
                                <ListGroup.Item className='transparents'>
                                   <a href='#'>Buy Essay</a> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <a href='#'> Same Day Essay</a> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <a href='#'>Assignment Writing</a> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <a href='#'>Write Research Paper</a> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <a href='#'> Coursework Help</a> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <a href='#'> Case Study Help</a> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <a href='#'> Write My Speech</a> 
                                </ListGroup.Item>

                            </ListGroup>
                        </Col>

                        <Col md={2} className="mt-3">
                            <h6 className='fw-bolder'>Policy</h6>
                            <ListGroup>
                                <ListGroup.Item className='transparents'>
                                   <Link to='/terms-us'>Terms of Use</Link> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <Link to='/privacy'> Privacy Policy</Link> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <Link to='/revision'>Revision Policy</Link> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <Link to='/cookie'>Cookie Policy</Link> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <Link to='/guarantee'> Guarantee</Link> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <Link to='/MoneyBackGuarantee'>Money Back Guarantee</Link> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <a href='#'>Rules of Conduct</a> 
                                </ListGroup.Item>
                                <ListGroup.Item className='transparents'>
                                    <a href='#'>Disclamier</a> 
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
               

            </section>
            </section>
        </>
    )
}

export default Footer
