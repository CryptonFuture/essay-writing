import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import Testimonial from '../../assets/images/Writer/testimonial.png'
import RatingStar from '../../components/RatingStar/RatingStar'
import Line from '../../assets/images/Line.png'

const Writer = () => {
    return (
        <>
            <section id='back-color'>
                <section id='blur-bg'>
                    <Container className='py-5' fluid >
                        <Row >
                            <Col md={6} className="text-center">
                                <img src={Testimonial} className="testimonial-img" />
                                <h5>Clara Mason</h5>
                                <p className='assignmentexpert'>Assignment Expert</p>
                                <div className='d-flex flex-row justify-content-center'>
                                    <RatingStar />
                                </div>
                                <Button className='btn-bg-color mt-2 paddings'>
                                    <span>Hire Me</span>
                                </Button>
                            </Col>

                            <Col md={6} className="writer mt-3">
                                {/* <h1>Writer Of
                                    <span>
                                        <img src={Line} className="layer-img-4" />
                                    </span>
                                  <span className='positions-3'>The Week</span>  
                                </h1> */}

                                <h1>
                                    Writer Of The Week 
                                </h1>
                                <p>Making it to the top assignment writers UK based, Clara has clearly won the title of “writer of the week”. With over 3100 assignment orders fulfilled and +2451 graded with highest ranks. Providing best service which is desired by many students has been the pro-star of Clara in becoming the most favourite. Though other reasons include:

                                    Her Master’s qualification
                                    Over 6 years of experience at the best website for assignment writing
                                    Humble communication style
                                    Quick submissions of assignment orders
                                    +2540 appreciation emails from clients scored top-grades
                                    Working with the best assignment writing website UK is offering has been a charm for Clara to prove herself. This is what she had to say about her success:

                                    “From finding assignment writers near me back in my days to be able to work at best assignment writing website has been a game-changer. I’m glad to help out as many students as I can by delivering an assignment suitable to their specifications and guarantees a top-grade they all deserve.”

                                    She’s proudly a part of our assignment writing services in UK and deserves the title due to her intelligence and hard work.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </section>

        </>
    )
}

export default Writer
