import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import Avatar from '../../assets/images/OurEssayWriter/Avatar.png'
import Avatar1 from '../../assets/images/OurEssayWriter/Avatar1.png'
import Avatar2 from '../../assets/images/OurEssayWriter/Avatar2.png'
import Avatar3 from '../../assets/images/OurEssayWriter/Avatar3.png'
import RatingStar from '../../components/RatingStar/RatingStar';
import Group1 from '../../assets/images/OurEssayWriter/Group1.png'
import Group2 from '../../assets/images/OurEssayWriter/Group2.png'
import Group3 from '../../assets/images/OurEssayWriter/Group3.png'
import 'swiper/css/pagination';
import Line from '../../assets/images/Line.png'

import { Pagination, Autoplay } from 'swiper';

const OurEssayWriters = () => {
    return (
        <>
            <section id='blue-bg'>
                <section id='neon-bg'>
                    <Container className='py-5' fluid>
                        <Row className='justify-content-md-center'>
                            <Col md={6} className="">
                                <h1 className='text-white text-center fw-bolder'>
                                Our Dissertation
Editing Writers
                                
                                </h1>
                                <p className='text-white text-center texted'>With our expert proficient writers, we deliver high-quality essay writing services
in town</p>
                            </Col>
                        </Row>

                        <Row className='mt-3'>
                            <Col md={12} xs={12} sm={12}>
                                <Swiper
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}
                                    // spaceBetween={30}
                                    // slidesPerView={3}
                                    breakpoints={{
                                        940: {
                                            slidesPerView: 4,
                                            spaceBetween: 20
                                        },

                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 20
                                        },

                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 10
                                        },

                                        // when window width is >= 480px
                                        480: {
                                            slidesPerView: 1,
                                            spaceBetween: 20
                                        },
                                        // when window width is >= 640px
                                    }}
                                    spaceBetween={5}
                                    slidesPerView={1}
                                    pagination={{ dynamicBullets: true }}
                                    scrollbar={{ draggable: true }}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <Col md={4}>
                                        <SwiperSlide>
                                            <Card className='padded' >
                                                <div className='d-flex flex-row'>
                                                    <Card.Img variant="top" src={Avatar} className="img-avatar" />
                                                    <span className='ms-2'>
                                                        <span className='fw-bolder'>Hannah</span>
                                                        <div className='d-flex flex-row mt-2'>
                                                            <RatingStar /> <span className='reviews ms-2'>4.8</span>
                                                        </div>
                                                        <p className='reviews-1'>130 Reviews</p>
                                                    </span>



                                                </div>
                                                <Row>

                                                    <div className='d-flex flex-row'>
                                                        <img src={Group1} className="images" />

                                                        <span className='ms-3 span-text'>
                                                            Finish Orders:
                                                            <h5 className='fw-bolder'>1580</h5>
                                                        </span>

                                                        <img src={Group2} className="images ms-3" />

                                                        <span className='ms-3 span-text'>
                                                            Success Rate:
                                                            <h5 className='fw-bolder'>1580</h5>
                                                        </span>



                                                    </div>

                                                </Row>

                                                <Row>
                                                    <div className='d-flex flex-row mt-4'>
                                                        <img src={Group3} className="images" />

                                                        <span className='ms-3 span-text'>
                                                            Competence
                                                            <h5 className=' text-font'>Competence in English Literature, Writing Studies, Philosophy, Communication</h5>
                                                        </span>
                                                    </div>
                                                </Row>

                                                <Card.Body>
                                                    <div className='d-flex flex-row justify-content-md-center'>
                                                        <Button className='bg-prim'>Hire Writer</Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </SwiperSlide>
                                    </Col>

                                    <Col md={4}>
                                        <SwiperSlide>
                                            <Card className='padded' >
                                                <div className='d-flex flex-row'>
                                                    <Card.Img variant="top" src={Avatar1} className="img-avatar" />
                                                    <span className='ms-2'>
                                                        <span className='fw-bolder'>Siemen</span>
                                                        <div className='d-flex flex-row mt-2'>
                                                            <RatingStar /> <span className='reviews ms-2'>4.8</span>
                                                        </div>
                                                        <p className='reviews-1'>150 Reviews</p>
                                                    </span>



                                                </div>
                                                <Row>

                                                    <div className='d-flex flex-row'>
                                                        <img src={Group1} className="images" />

                                                        <span className='ms-3 span-text'>
                                                            Finish Orders:
                                                            <h5 className='fw-bolder'>1760</h5>
                                                        </span>

                                                        <img src={Group2} className="images ms-3" />

                                                        <span className='ms-3 span-text'>
                                                            Success Rate:
                                                            <h5 className='fw-bolder'>1760</h5>
                                                        </span>



                                                    </div>

                                                </Row>

                                                <Row>
                                                    <div className='d-flex flex-row mt-4'>
                                                        <img src={Group3} className="images" />

                                                        <span className='ms-3 span-text'>
                                                            Competence
                                                            <h5 className=' text-font'>English, Literature, Writing Studies, Philosophy,Communication</h5>
                                                        </span>
                                                    </div>
                                                </Row>

                                                <Card.Body>
                                                    <div className='d-flex flex-row justify-content-md-center'>
                                                        <Button className='bg-prim'>Hire Writer</Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </SwiperSlide>
                                    </Col>

                                    <Col md={4}>
                                        <SwiperSlide>
                                            <Card className='padded' >
                                                <div className='d-flex flex-row'>
                                                    <Card.Img variant="top" src={Avatar2} className="img-avatar" />
                                                    <span className='ms-2'>
                                                        <span className='fw-bolder'>Hannah</span>
                                                        <div className='d-flex flex-row mt-2'>
                                                            <RatingStar /> <span className='reviews ms-2'>4.8</span>
                                                        </div>
                                                        <p className='reviews-1'>126 reviews</p>
                                                    </span>



                                                </div>
                                                <Row>

                                                    <div className='d-flex flex-row'>
                                                        <img src={Group1} className="images" />

                                                        <span className='ms-3 span-text'>
                                                            Finish Orders:
                                                            <h5 className='fw-bolder'>1482</h5>
                                                        </span>

                                                        <img src={Group2} className="images ms-3" />

                                                        <span className='ms-3 span-text'>
                                                            Success Rate:
                                                            <h5 className='fw-bolder'>1482</h5>
                                                        </span>



                                                    </div>

                                                </Row>

                                                <Row>
                                                    <div className='d-flex flex-row mt-4'>
                                                        <img src={Group3} className="images" />

                                                        <span className='ms-3 span-text'>
                                                            Competence
                                                            <h5 className=' text-font'>English, Literature, Writing Studies, Philosophy,Communication</h5>
                                                        </span>
                                                    </div>
                                                </Row>

                                                <Card.Body>
                                                    <div className='d-flex flex-row justify-content-md-center'>
                                                        <Button className='bg-prim'>Hire Writer</Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </SwiperSlide>
                                    </Col>

                                    <Col md={4}>

                                        <SwiperSlide>
                                            <Card className='padded' >
                                                <div className='d-flex flex-row'>
                                                    <Card.Img variant="top" src={Avatar3} className="img-avatar" />
                                                    <span className='ms-2'>
                                                        <span className='fw-bolder'>Hannah</span>
                                                        <div className='d-flex flex-row mt-2'>
                                                            <RatingStar /> <span className='reviews ms-2'>4.8</span>
                                                        </div>
                                                        <p className='reviews-1'>126 reviews</p>
                                                    </span>



                                                </div>
                                                <Row>

                                                    <div className='d-flex flex-row'>
                                                        <img src={Group1} className="images" />

                                                        <span className='ms-3 span-text'>
                                                            Finish Orders:
                                                            <h5 className='fw-bolder'>1482</h5>
                                                        </span>

                                                        <img src={Group2} className="images ms-3" />

                                                        <span className='ms-3 span-text'>
                                                            Success Rate:
                                                            <h5 className='fw-bolder'>1482</h5>
                                                        </span>



                                                    </div>

                                                </Row>

                                                <Row>
                                                    <div className='d-flex flex-row mt-4'>
                                                        <img src={Group3} className="images" />

                                                        <span className='ms-3 span-text'>
                                                            Competence
                                                            <h5 className=' text-font'>English, Literature, Writing Studies, Philosophy,Communication</h5>
                                                        </span>
                                                    </div>
                                                </Row>

                                                <Card.Body>
                                                    <div className='d-flex flex-row justify-content-md-center'>
                                                        <Button className='bg-prim'>Hire Writer</Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </SwiperSlide>
                                    </Col>

                                    <Col md={4}>
                                        <SwiperSlide>
                                            <Card className='padded' >
                                                <div className='d-flex flex-row'>
                                                    <Card.Img variant="top" src={Avatar3} className="img-avatar" />
                                                    <span className='ms-2'>
                                                        <span className='fw-bolder'>Hannah</span>
                                                        <div className='d-flex flex-row mt-2'>
                                                            <RatingStar /> <span className='reviews ms-2'>4.8</span>
                                                        </div>
                                                        <p className='reviews-1'>126 reviews</p>
                                                    </span>



                                                </div>
                                                <Row>

                                                    <div className='d-flex flex-row'>
                                                        <img src={Group1} className="images" />

                                                        <span className='ms-3 span-text'>
                                                            Finish Orders:
                                                            <h5 className='fw-bolder'>1482</h5>
                                                        </span>

                                                        <img src={Group2} className="images ms-3" />

                                                        <span className='ms-3 span-text'>
                                                            Success Rate:
                                                            <h5 className='fw-bolder'>1482</h5>
                                                        </span>



                                                    </div>

                                                </Row>

                                                <Row>
                                                    <div className='d-flex flex-row mt-4'>
                                                        <img src={Group3} className="images" />

                                                        <span className='ms-3 span-text'>
                                                            Competence
                                                            <h5 className=' text-font'>English, Literature, Writing Studies, Philosophy,Communication</h5>
                                                        </span>
                                                    </div>
                                                </Row>

                                                <Card.Body>
                                                    <div className='d-flex flex-row justify-content-md-center'>
                                                        <Button className='bg-prim'>Hire Writer</Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </SwiperSlide>
                                    </Col>
                                    {/* <SwiperSlide>
                                        <Card>
                                            <Card.Img variant="top" src="holder.js/100px180" />
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide> */}

                                    {/* <SwiperSlide>
                                        <Card>
                                            <Card.Img variant="top" src="holder.js/100px180" />
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide> */}

                                </Swiper>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </section>
        </>
    )
}

export default OurEssayWriters
