import React from 'react'
import { Col, Container, Row, Card, ListGroup } from 'react-bootstrap'
import Layer1 from '../../assets/images/PriceCalculate/Layer1.png'
import Layer2 from '../../assets/images/PriceCalculate/Layer2.png'
import Layer3 from '../../assets/images/PriceCalculate/Layer3.png'
import Neon from '../../assets/images/PriceCalculate/neon.png'
import ListGroupCard from '../../components/ListGroupCard/ListGroupCard'
import Line from '../../assets/images/Line.png'

const PriceCalculate = () => {
    return (
        <section id='bg-color'>
            <section id='bg-hero'>
                <Container className='py-5 p-5 mt-5 container-price'>
                    <Row className="align-items-center row-price">
                        <h5 className='headings text-center'>
                            We Promise to Deliver
                            the Best
                            {/* <span className='span-img'>
                                    <img src={Line} className="layer-img-3" />
                                </span> */}
                           
                        </h5>
                        <Col md={6} className="price_calculate  mb-5">

                            <div className='d-flex flex-row flexiable'>
                                <img src={Layer1} className="mt-3 img-height" />
                                <h5 className='mt-3 fw-bold ms-2'>
                                    Guaranteed Quality
                                </h5>
                            </div>
                            <p className='font-size'>Offering you the top-notch quality dissertation, while maintaining the
best prices and meeting deadlines</p>

                            <div className='d-flex flex-row flexiable'>
                                <img src={Layer2} className="mt-3 img-height" />
                                <h5 className='mt-3 fw-bold ms-2'>
                                    On Time Always
                                </h5>
                            </div>
                            <p className='font-size'>Assuring on-time delivery, we deliver as per our claim! Order now and
get the best service in town that you will never regret</p>

                            <div className='d-flex flex-row flexiable'>
                                <img src={Layer3} className="mt-3 img-height price_calculate_icon_image" />
                                <h5 className='mt-3 fw-bold ms-2'>
                                    Highest Standard Data Security
                                </h5>
                            </div>
                            <p className='font-size'>Enabling our client&#39;s full privacy for the order placed, we never
compromise on such things</p>
                        </Col>

                        <Col md={6} className="row-md">
                            <ListGroupCard />
                        </Col>
                    </Row>
                </Container>
            </section>
        </section>
    )
}

export default PriceCalculate
