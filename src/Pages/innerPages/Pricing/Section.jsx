import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import pen from '../../../assets/images/Prcing/pen.png'
import screen from '../../../assets/images/Prcing/screen.png'
import eye from '../../../assets/images/Prcing/eye.png'
import Tables from '../../../components/Table/Table'
import Layer from '../../../assets/images/AboutUs/Layer.png'


const Section = () => {
    return (
        <>
            <section id="price">
                <Container>
                    <Row className='justify-content-center'>
                        {/* <img src={Layer} className="layers-5" /> */}
                        <Col md={8} className="marg">
                            <h1 className='text-center text-h1'>PRICING</h1>
                            <p className='text-center'>Our pricing policy is budget-friendly as we truly care about the student’s budget, for this
                                reason we ensure pricing plan that fits in every student’s pocket which set us apart from
                                other assignment writing service providers. We make sure that our prices are affordable
                                for every student as we fully understand student’s limited budget. Moreover, our pricing
                                plan comprises of</p>
                            {/* <div className='d-flex flex-row justify-content-center mar'> */}
                                <Row>
                                    <Col md={4}>
                                        <Button className='btn-write' size='lg'><img src={pen} className="img-button" />Writing</Button>
                                        
                                    </Col>

                                    <Col  md={4}>
                                        <Button className='btn-write-1' size='lg'><img src={eye} className="img-button" /><span className='ms-2'> Editing & Proofreading </span></Button>
                                    </Col>

                                    <Col  md={4}>
                                        <Button className='btn-write' size='lg'><img src={screen} className="img-button" /><span className='ms-2'>Presentation</span></Button>

                                    </Col>
                                </Row>
                            {/* </div> */}
                        </Col>
                        <Tables />
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section
