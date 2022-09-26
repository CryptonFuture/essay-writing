import React, { useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import 'swiper/css/pagination';
import { Pagination, Autoplay, Grid } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Avatar from '../../assets/images/OurEssayWriter/Avatar.png'
import Avatar1 from '../../assets/images/OurEssayWriter/Avatar1.png'
import Avatar2 from '../../assets/images/OurEssayWriter/Avatar2.png'
import Avatar3 from '../../assets/images/OurEssayWriter/Avatar3.png'
import Group1 from '../../assets/images/OurEssayWriter/Group1.png'
import Group2 from '../../assets/images/OurEssayWriter/Group2.png'
import Group3 from '../../assets/images/OurEssayWriter/Group3.png'
import "swiper/css/grid";
import Group from '../../assets/images/Customers/Group.png'
import RatingStar from '../../components/RatingStar/RatingStar';
import Line from '../../assets/images/Line.png'
import { Slider, Slider1, Slider2, Slider3, Slider4, Slider5, Slider6, Slider7, Slider8, Slider9 } from '../../Item/Slider';

const CustomerReview = () => {
    const [slider, setSlider] = useState(Slider)
    return (
        <>
            <section id='customer-bg'>
                <section id="customer-hero">
                    <Container className='py-5' fluid>
                        <Row className='justify-content-center'>
                            <Col md={6}>
                                <h1 className='text-center fw-bolder'>
                                    Customer
                                    <span>
                                        <img src={Line} className="layer-img-7" />
                                    </span>
                                    <span className='positions-7'>Review</span>
                                </h1>
                                <p className='text-center texted'>Don&#39;t be skeptical about us! You can check the several testimonials
                                    from our multiple previous clients below, which affirms our credibility
                                    to our clients.
                                    lacus vel facilisis.</p>
                            </Col>


                        </Row>

                        <Row className='mt-5'>
                            <Col md={12}>
                                <Swiper
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}
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
                                    {
                                        slider.map((slide, index) => {
                                            return (
                                                <SwiperSlide>
                                                    <Card className='paddeds'>
                                                        <div className='d-flex flex-row' key={index}>
                                                            <Card.Img variant="top" src={Group} className="img-avatars" />
                                                            <span className='ms-3 fw-bolder'>
                                                                <span>{slide.name}</span>
                                                                <div className='d-flex flex-row'>
                                                                    <RatingStar />
                                                                    <span className='ms-2 reviews-2'>{slide.review}</span>
                                                                    <span className='ms-2 reviews-2'>{slide.date}</span>
                                                                </div>


                                                            </span>

                                                        </div>

                                                        <Card.Body>
                                                            <Card.Text>
                                                                <span className='lorem-description'>{slide.description}</span>
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>

                            </Col>
                        </Row>

                        <Row className='mt-4'>
                            <Col md={12}>
                                <Swiper
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}
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
                                    {
                                        Slider1.map((slide, index) => {
                                            return (
                                                <SwiperSlide>
                                                    <Card className='paddeds' >
                                                        <div className='d-flex flex-row' key={index}>
                                                            <Card.Img variant="top" src={Group} className="img-avatars" />
                                                            <span className='ms-3 fw-bolder'>
                                                                <span>{slide.name}</span>
                                                                <div className='d-flex flex-row'>
                                                                    <RatingStar />
                                                                    <span className='ms-2 reviews-2'>{slide.review}</span>
                                                                    <span className='ms-2 reviews-2'>{slide.date}</span>
                                                                </div>


                                                            </span>

                                                        </div>

                                                        <Card.Body>
                                                            <Card.Text>
                                                                <span className='lorem-description'>{slide.description}</span>
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </SwiperSlide>
                                            )
                                        })
                                    }



                                </Swiper>

                            </Col>
                        </Row>

                        {/* <Row className='mt-4'>
                            <Col md={12}>
                                <Swiper
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}
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
                                    {
                                        Slider2.map((slide, index) => {
                                            return (
                                                <SwiperSlide>
                                                    <Card className='paddeds' >
                                                        <div className='d-flex flex-row' key={index}>
                                                            <Card.Img variant="top" src={Group} className="img-avatars" />
                                                            <span className='ms-3 fw-bolder'>
                                                                <span>{slide.name}</span>
                                                                <div className='d-flex flex-row'>
                                                                    <RatingStar />
                                                                    <span className='ms-2 reviews-2'>{slide.review}</span>
                                                                    <span className='ms-2 reviews-2'>{slide.date}</span>
                                                                </div>


                                                            </span>

                                                        </div>

                                                        <Card.Body>
                                                            <Card.Text>
                                                                <span className='lorem-description'>{slide.description}</span>
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </SwiperSlide>
                                            )
                                        })
                                    }



                                </Swiper>

                            </Col>
                        </Row>

                        <Row className='mt-4'>
                            <Col md={12}>
                                <Swiper
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}
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
                                    {
                                        Slider3.map((slide, index) => {
                                            return (
                                                <SwiperSlide>
                                                    <Card className='paddeds' >
                                                        <div className='d-flex flex-row' key={index}>
                                                            <Card.Img variant="top" src={Group} className="img-avatars" />
                                                            <span className='ms-3 fw-bolder'>
                                                                <span>{slide.name}</span>
                                                                <div className='d-flex flex-row'>
                                                                    <RatingStar />
                                                                    <span className='ms-2 reviews-2'>{slide.review}</span>
                                                                    <span className='ms-2 reviews-2'>{slide.date}</span>
                                                                </div>


                                                            </span>

                                                        </div>

                                                        <Card.Body>
                                                            <Card.Text>
                                                                <span className='lorem-description'>{slide.description}</span>
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </SwiperSlide>
                                            )
                                        })
                                    }



                                </Swiper>

                            </Col>
                        </Row>

                        <Row className='mt-4'>
                            <Col md={12}>
                                <Swiper
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}
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
                                    {
                                        Slider4.map((slide, index) => {
                                            return (
                                                <SwiperSlide>
                                                    <Card className='paddeds' >
                                                        <div className='d-flex flex-row' key={index}>
                                                            <Card.Img variant="top" src={Group} className="img-avatars" />
                                                            <span className='ms-3 fw-bolder'>
                                                                <span>{slide.name}</span>
                                                                <div className='d-flex flex-row'>
                                                                    <RatingStar />
                                                                    <span className='ms-2 reviews-2'>{slide.review}</span>
                                                                    <span className='ms-2 reviews-2'>{slide.date}</span>
                                                                </div>


                                                            </span>

                                                        </div>

                                                        <Card.Body>
                                                            <Card.Text>
                                                                <span className='lorem-description'>{slide.description}</span>
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </SwiperSlide>
                                            )
                                        })
                                    }



                                </Swiper>

                            </Col>
                        </Row>

                        <Row className='mt-4'>
                            <Col md={12}>
                                <Swiper
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}
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
                                    {
                                        Slider5.map((slide, index) => {
                                            return (
                                                <SwiperSlide>
                                                    <Card className='paddeds' >
                                                        <div className='d-flex flex-row' key={index}>
                                                            <Card.Img variant="top" src={Group} className="img-avatars" />
                                                            <span className='ms-3 fw-bolder'>
                                                                <span>{slide.name}</span>
                                                                <div className='d-flex flex-row'>
                                                                    <RatingStar />
                                                                    <span className='ms-2 reviews-2'>{slide.review}</span>
                                                                    <span className='ms-2 reviews-2'>{slide.date}</span>
                                                                </div>


                                                            </span>

                                                        </div>

                                                        <Card.Body>
                                                            <Card.Text>
                                                                <span className='lorem-description'>{slide.description}</span>
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </SwiperSlide>
                                            )
                                        })
                                    }



                                </Swiper>

                            </Col>
                        </Row>

                        <Row className='mt-4'>
                            <Col md={12}>
                                <Swiper
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}
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
                                    {
                                        Slider6.map((slide, index) => {
                                            return (
                                                <SwiperSlide>
                                                    <Card className='paddeds' >
                                                        <div className='d-flex flex-row' key={index}>
                                                            <Card.Img variant="top" src={Group} className="img-avatars" />
                                                            <span className='ms-3 fw-bolder'>
                                                                <span>{slide.name}</span>
                                                                <div className='d-flex flex-row'>
                                                                    <RatingStar />
                                                                    <span className='ms-2 reviews-2'>{slide.review}</span>
                                                                    <span className='ms-2 reviews-2'>{slide.date}</span>
                                                                </div>


                                                            </span>

                                                        </div>

                                                        <Card.Body>
                                                            <Card.Text>
                                                                <span className='lorem-description'>{slide.description}</span>
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </SwiperSlide>
                                            )
                                        })
                                    }



                                </Swiper>

                            </Col>
                        </Row>

                        <Row className='mt-4'>
                            <Col md={12}>
                                <Swiper
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}
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
                                    {
                                        Slider7.map((slide, index) => {
                                            return (
                                                <SwiperSlide>
                                                    <Card className='paddeds' >
                                                        <div className='d-flex flex-row' key={index}>
                                                            <Card.Img variant="top" src={Group} className="img-avatars" />
                                                            <span className='ms-3 fw-bolder'>
                                                                <span>{slide.name}</span>
                                                                <div className='d-flex flex-row'>
                                                                    <RatingStar />
                                                                    <span className='ms-2 reviews-2'>{slide.review}</span>
                                                                    <span className='ms-2 reviews-2'>{slide.date}</span>
                                                                </div>


                                                            </span>

                                                        </div>

                                                        <Card.Body>
                                                            <Card.Text>
                                                                <span className='lorem-description'>{slide.description}</span>
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </SwiperSlide>
                                            )
                                        })
                                    }



                                </Swiper>

                            </Col>
                        </Row>

                        
                        <Row className='mt-4'>
                            <Col md={12}>
                                <Swiper
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}
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
                                    {
                                        Slider8.map((slide, index) => {
                                            return (
                                                <SwiperSlide>
                                                    <Card className='paddeds' >
                                                        <div className='d-flex flex-row' key={index}>
                                                            <Card.Img variant="top" src={Group} className="img-avatars" />
                                                            <span className='ms-3 fw-bolder'>
                                                                <span>{slide.name}</span>
                                                                <div className='d-flex flex-row'>
                                                                    <RatingStar />
                                                                    <span className='ms-2 reviews-2'>{slide.review}</span>
                                                                    <span className='ms-2 reviews-2'>{slide.date}</span>
                                                                </div>


                                                            </span>

                                                        </div>

                                                        <Card.Body>
                                                            <Card.Text>
                                                                <span className='lorem-description'>{slide.description}</span>
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </SwiperSlide>
                                            )
                                        })
                                    }



                                </Swiper>

                            </Col>
                        </Row>

                                
                        <Row className='mt-4'>
                            <Col md={12}>
                                <Swiper
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}
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
                                    {
                                        Slider9.map((slide, index) => {
                                            return (
                                                <SwiperSlide>
                                                    <Card className='paddeds' >
                                                        <div className='d-flex flex-row' key={index}>
                                                            <Card.Img variant="top" src={Group} className="img-avatars" />
                                                            <span className='ms-3 fw-bolder'>
                                                                <span>{slide.name}</span>
                                                                <div className='d-flex flex-row'>
                                                                    <RatingStar />
                                                                    <span className='ms-2 reviews-2'>{slide.review}</span>
                                                                    <span className='ms-2 reviews-2'>{slide.date}</span>
                                                                </div>


                                                            </span>

                                                        </div>

                                                        <Card.Body>
                                                            <Card.Text>
                                                                <span className='lorem-description'>{slide.description}</span>
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </SwiperSlide>
                                            )
                                        })
                                    }



                                </Swiper>

                            </Col>
                        </Row> */}
                    </Container>
                </section>
            </section>
        </>
    )
}

export default CustomerReview
