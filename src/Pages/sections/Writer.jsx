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
                    <Container className='py-5'>
                        <Row>
                            <Col md={4} className="text-center">
                                <img src={Testimonial} className="testimonial-img" />
                                <h5 className='mt-3'>Clara Mason</h5>
                                <p className='assignmentexpert'>Dissertation Expert</p>
                                <div className='d-flex flex-row justify-content-center'>
                                    <RatingStar />
                                </div>
                                <Button className='btn-bg-color mt-2 paddings'>
                                    <span>Hire Me</span>
                                </Button>
                            </Col>

                            <Col md={7} className="writer mt-3">
                                <h1>
                                    Writer Of The Month
                                </h1>
                                <p className='writer_month'>One of the most proficient writers we have, Clara has won the title of the writer of the month making it to the top assignment writers UK-based. She fulfilled over 3000 assignment orders and +2460 graded with the highest ranks and proved herself the best in an academic and professional career. As desired by many students has been the pro-star of Clara in becoming the favorite by providing the best services. Being the best in both careers, she’s having Masters qualification and over 6 years of experience at the best website for assignment writing. Clients are satisfied with her humble communication style while maintaining quick submissions of assignment orders and in return got +2540 appreciation emails from clients who scored top grades. She proved herself the best among several writers and working with the best UK assignment writing service has been a charm for Clara to polish herself more. Clara believed in hard work and while talking about the hard struggles she said, To work with the best assignment writing website has been a game-changer for me as previously I worked with several individual clients but now I’m glad to help out as many students as I can by assuring to help them out and delivering a top-notch quality assignment suitable to their requirements and guarantees a top-grade they all deserve. We are proud of her for being a part of our assignment writing services in the UK and deserves the title due to her intelligence and hard work.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </section>

        </>
    )
}

export default Writer
