import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Group4 from '../../../assets/images/AboutUs/Group4.png'
import Circle from '../../../assets/images/AboutUs/circle.png'
import Elipse from '../../../assets/images/AboutUs/Ellipse.png'
import Layer from '../../../assets/images/AboutUs/Layer.png'

const Section1 = () => {
    return (
        <>
            <Container className='py-5 container-1'>
                <Row className='rows'>
                    <Col md={6} className="h1 para cols-1">
                        <h1 className='font-h1'>Who Are We?</h1>
                        <p className='paragraph'>
                            Searching for a leading dissertation proposal assignment writing service in the UK? Then
                            your search is over NOW! as we primarily aims to deliver client-oriented and high-level
                            quality assignments to the customers with timely support. Having the best expert
                            writers that beautifully craft the assignments with subtelety as per the requirements set
                            forth by you.
                        </p>

                        <p className='paragraph'>
                            What&#39;s better than de-stressing your mind and alleviate your burden on anyone that
                            assures you quality in just a single click? We aim to provide utmost support along with
                            the premium quality services so that students can rely us whenever its needed. If you
                            desire for the professional writer assistance, you can certainly count on us!
                        </p>
                        <Row>
                            <Col md={6} className="head">
                                <div className='d-flex flex-row justify-content-center circles'>
                                    <img src={Circle} className="sizes-1 circle" />
                                    <h1>12k</h1>
                                </div>
                                <p className='lorem'>Lorem ipsum dolor sit amet</p>
                            </Col>

                            <Col md={6} className="head">
                                <div className='d-flex flex-row justify-content-center circles'>
                                    <img src={Elipse} className="sizes-1 circle" />
                                    <h1>3k+</h1>
                                </div>
                                <p className='lorem'>Lorem ipsum dolor sit amet</p>
                            </Col>
                        </Row>



                    </Col>
                    <Col md={6}>
                        <img src={Group4} className="img-animation img-fluid" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Section1
