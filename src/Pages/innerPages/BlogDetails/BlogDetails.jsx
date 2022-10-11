import React, { useState, useEffect } from 'react'
import { Card, Col, Container, Row, Button, InputGroup, ListGroup, Form } from 'react-bootstrap'
import Navbars from '../../../components/Navbar/Navbars'
import Layers from '../../../assets/images/blog/Layer31.png'
import Layers1 from '../../../assets/images/blog/Layer32.png'
import Badge from '../../../assets/images/blog/badge.png'
import share from '../../../assets/images/blog/share.png'
import arrow from '../../../assets/images/blog/arrow.png'
import layer2 from '../../../assets/images/blog/Layer2.png'
import layer4 from '../../../assets/images/blog/Layer4.png'
import layer5 from '../../../assets/images/blog/Layer5.png'
import layer6 from '../../../assets/images/blog/Layer6.png'
import Footer from '../../sections/Footer'
import Footers from '../../sections/Footers'
import Foot from '../../sections/Foot'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Image } from 'antd';
import Navbar from '../../../components/Navbar/Navbar'



const BlogDetails = () => {

    const [data, setData] = useState({
        title: '',
        short_des: '',
        long_des: '',
        img: ''
    })

    const { title, short_des, long_des, img } = data

    const { id } = useParams()

    const singleFetchBlog = async () => {
        await axios.get(`https://admin.dissertationproposal.uk/api/blogs/${id}`).then(res => {
            setData(res.data.data)
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        singleFetchBlog()
    })

    return (
        <>
            <section id="blog_details">
                <Navbar />
                <Container className='py-5 p-5 mt-5'>
                    <Row className="justify-content-center mt-5">
                        <Col md={6} className="">
                            <h1 className='fw-bold text-center blogs_details'>Blog Detail</h1>
                        </Col>
                    </Row>


                </Container>
            </section>

            <section id='blog_detail1'>
                <Container>
                    <Row>
                        <Col md={8} className="mt-5">

                            <img src={Layers1} alt="" className='img-fluid mt-3' />
                            <span className='ms-3 fw-bold'>Owens Loren</span>
                            {/* <img src={img} alt="" className='img-fluid mt-3' /> */}
                            <Image
                                className='img-fluid mt-3'
                                // width={200}
                                src={img}
                            />
                            {/* <span className='ms-3 text-secondary'><i class="fa-regular fa-calendar"></i> August 10, 2022</span>
                            <span className='ms-3 text-secondary'><i class="fa-regular fa-eye"></i> 811 views</span> */}
                            <h3 className='mt-3 fw-bold'>{title}</h3>
                            <p dangerouslySetInnerHTML={{ __html: short_des }} className='blog_font_size'></p>

                            <p dangerouslySetInnerHTML={{ __html: long_des }} className='blog_font_size'></p>

                            <Card className='border-0 p-3'>
                                <Card.Body className='p-3 card-right-border'>
                                    <Card.Title className='cards-titles'><span className='card-spans'>This is going to be a challenging dance. Our teachers are true change makers. They are providers and they are leaders and this period in history is going to shine a light on their vital role in our children’s emotional health.</span></Card.Title>
                                </Card.Body>
                            </Card>

                            <p className='blog_font_size'>So, how can we support them to support our children’s learning? As parents and school administrators, we can relax about the ‘learning’ and trust it will come. Schools are going to need to change the focus right now to concentrating on the emotional basics before academic basics. Teachers teach people, not subjects. And when they can focus on supporting well-being first, the learning may then have an opportunity to land.</p>
                            <span>Let’s take a closer look at the 3 R’s of emotional basics:</span>

                            <h6 className='fw-bold mt-3'>Relationship</h6>
                            <p className='blog_font_size'>What our students need from us is..us. They need to know we are there for them, and that they matter. It’s not so much about what we say—it’s about how we make them feel in our presence: invited, accepted, and seen. </p>

                            <p className='blog_font_size'>   During this emotionally turbulent time, we will need to make conscious invitations into relationship so that our students can feel connected to us. This might mean special greeting rituals at the beginning of each day and more playful activities in which we join in. These attachment practices can help our students to feel connected to us, which may also lower their anxiety.</p>

                            <h6 className='fw-bold'>Rhythm</h6>
                            <span className='mt-3'>Children crave rhythm.</span>
                            <p className='blog_font_size mt-3'>Consistent routines, rituals, and structures help children feel safe. They can lean on these and rely on them. Yet most children are experiencing the exact opposite right now. And as they look to returning to school, they may have little to no sense of what the ‘new normal’ will be. We can create a sense of safety by quickly establishing new routines that our students can count on and orient around. This will help to produce a rhythm to their days and can offer a sense of predictability in these unpredictable times.</p>

                            <h6 className='fw-bold'>Release</h6>
                            <p className='blog_font_size'>Our students’ emotions will be stirred up. And we know that when emotions get stirred up, they need somewhere to go. Finding healthy ways to pre-emptively channel this emotional energy for our students can help to alleviate dangerous or disruptive eruptions. Integrating daily outlets for release can be especially helpful for supporting students to get out frustration before it leads to outbursts of aggression.</p>

                            <p className='blog_font_size'>These outlets can also help students to reflect on and express their feelings in ways that don’t make them feel self-conscious. The beauty of this practice is that we don’t even have to know what is specifically going on for a child. We are simply facilitating a way for the emotion to be expressed and released indirectly in a natural way—whether through music, physical movement, stories or storytelling, writing, poetry, drama, art, or even simply being outdoors. All of these outlets are powerful because they help us come closer to our feelings and to experiencing a sense of release and emotional rest.</p>

                            <p className='blog_font_size'>Going back to school during this time will not be easy. We will need to be creative and think outside the box. We may need to stretch muscles we never knew we had. But it may be helpful to remember that this is not a time to focus on outcome and performance, or getting ahead or even catching up. Shifting our attention to matters of the heart will help our students feel safe. This is what will set the stage for learning to happen – when children are ready.</p>

                            <p className='blog_font_size'>In the meantime, let’s be patient with our students and ourselves. We are all in this together.</p>

                            <div className='d-flex flex-row align-items-center justify-content-between'>

                                <p className=' blog_font_size fw-bold'>
                                    <img src={Badge} alt="" className='img-fluid' />
                                    <span className='ms-2'> deep learning, language</span>
                                </p>
                                <p >
                                    <span className='fw-bold'> Share this post </span>
                                    <img src={share} alt="" className='img-fluid ms-2' />
                                </p>

                            </div>

                            <hr />



                        </Col>

                        <Col md={4} className="mt-5">

                            <h6 className='fw-bold'>Search</h6>
                            <hr />
                            <InputGroup className='mb-3'>
                                <Form.Control
                                    type="search"
                                    className='form_control'
                                    placeholder='Search...'
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                                <InputGroup.Text className='input_group'><i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
                            </InputGroup>
                            <div className='mt-5'>
                                <h6 className='fw-bold'>Categories</h6>
                                <hr />
                            </div>

                            <ListGroup as="ol">
                                <ListGroup.Item
                                    as="li"
                                    className="list_group d-flex justify-content-between align-items-start"
                                >
                                    <div className="">
                                        <div className="fw-bold font_blog">Business</div>
                                    </div>

                                    <span className='fw-bold font_blog'>(6)</span>

                                </ListGroup.Item>
                                <ListGroup.Item
                                    as="li"
                                    className="list_group d-flex justify-content-between align-items-start"
                                >
                                    <div className="">
                                        <div className="fw-bold font_blog">HR and L&D</div>
                                    </div>

                                    <span className='fw-bold font_blog'>(5)</span>

                                </ListGroup.Item>
                                <ListGroup.Item
                                    as="li"
                                    className="list_group d-flex justify-content-between align-items-start"
                                >
                                    <div className="">
                                        <div className="fw-bold font_blog">Video & Tips</div>
                                    </div>

                                    <span className='fw-bold font_blog'>(5)</span>

                                </ListGroup.Item>
                            </ListGroup>

                            <div className='mt-5'>
                                <h6 className='fw-bold'>Latest Post</h6>
                                <hr />


                                <div className='d-flex flex-row'>
                                    <img src={layer4} className="blog_img" />
                                    <h5 className='ms-3 fw-bold font_blogs'>The Importance of intrinsic
                                        Motivation for Students <br />
                                        <small style={{ color: '#a2a3a4', fontSize: '12px' }}>August 10, 2022</small>
                                    </h5>
                                </div>

                                <hr />

                                <div className='d-flex flex-row'>
                                    <img src={layer5} className="blog_img" />
                                    <h5 className='ms-3 fw-bold font_blogs'>The Importance of intrinsic
                                        Motivation for Students <br />
                                        <small style={{ color: '#a2a3a4', fontSize: '12px' }}>August 10, 2022</small>
                                    </h5>
                                </div>
                                <hr />
                                <div className='d-flex flex-row'>
                                    <img src={layer6} className="blog_img" />
                                    <h5 className='ms-3 fw-bold font_blogs'>The Importance of intrinsic
                                        Motivation for Students <br />
                                        <small style={{ color: '#a2a3a4', fontSize: '12px' }}>August 10, 2022</small>
                                    </h5>
                                </div>
                            </div>

                            <div className='mt-5'>
                                <h6 className='fw-bold'>Popular Tags</h6>
                                <hr />
                                <span className='font_blog_span p-2'>education</span>
                                <span className='font_blog_span ms-2 p-2'>Language</span>
                                <span className='font_blog_span ms-2 p-2'>Learning</span>


                            </div>
                            <div className='mt-3'>
                                <span className='font_blog_span p-2'>data science</span>
                                <span className='font_blog_span ms-2 p-2'>tips</span>
                                <span className='font_blog_span ms-2 p-2'>videos</span>
                            </div>

                        </Col>

                    </Row>
                    <Row>
                        <Col md={3}>
                            <Card className='border-0 card-grey'>
                                <Card.Body>
                                    <div className='d-flex flex-row align-items-center'>
                                        <img src={arrow} className="img-fluid ms-2" />
                                        <p className='fw-bold ms-3 mt-3 fw-bold'> Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, </p>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3}>
                            <Card className='border-0 card-grey'>
                                <Card.Body>
                                    <div className='d-flex flex-row align-items-center'>
                                        <img src={arrow} className="img-fluid ms-2" />
                                        <p className='fw-bold ms-3 mt-3 fw-bold'> Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, </p>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6} className="mt-3">
                            <h6 className='fw-bold'>Related Posts</h6>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <Card className='border-0 shadow'>
                                <Card.Img variant="top" src={layer2} />
                                <Card.Body className="p-3">
                                    <div className='d-flex flex-row'>
                                        <small style={{ color: 'gray' }}><i class="fa-regular fa-calendar"></i> August 10, 2022</small>
                                        <small className='ms-5' style={{ color: 'gray' }}><i class="fa-regular fa-eye"></i> 811 views</small>
                                    </div>
                                    <Card.Title className='fw-bold mt-3'>The Importance of intrinsic
                                        Motivation for Students</Card.Title>
                                    <Card.Text className='blog_font_size'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    </Card.Text>
                                    <Button variant="primary" className='blog_button'>Read More</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className='border-0 shadow'>
                                <Card.Img variant="top" src={layer2} />
                                <Card.Body className="p-3">
                                    <div className='d-flex flex-row'>
                                        <small style={{ color: 'gray' }}><i class="fa-regular fa-calendar"></i> August 10, 2022</small>
                                        <small className='ms-5' style={{ color: 'gray' }}><i class="fa-regular fa-eye"></i> 811 views</small>
                                    </div>
                                    <Card.Title className='fw-bold mt-3'>The Importance of intrinsic
                                        Motivation for Students</Card.Title>
                                    <Card.Text className='blog_font_size'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    </Card.Text>
                                    <Button variant="primary" className='blog_button'>Read More</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className='border-0 shadow'>
                                <Card.Img variant="top" src={layer2} />
                                <Card.Body className="p-3">
                                    <div className='d-flex flex-row'>
                                        <small style={{ color: 'gray' }}><i class="fa-regular fa-calendar"></i> August 10, 2022</small>
                                        <small className='ms-5' style={{ color: 'gray' }}><i class="fa-regular fa-eye"></i> 811 views</small>
                                    </div>
                                    <Card.Title className='fw-bold mt-3'>The Importance of intrinsic
                                        Motivation for Students</Card.Title>
                                    <Card.Text className='blog_font_size'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    </Card.Text>
                                    <Button variant="primary" className='blog_button'>Read More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Foot />
            <Footer />
            <Footers />
        </>
    )
}

export default BlogDetails
