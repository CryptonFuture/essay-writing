import React, { useRef } from 'react'
import { Container, Row, Col, Card, Button, Form, InputGroup, ListGroup, Badge } from 'react-bootstrap'
import layer from '../../../assets/images/blog/Layer.png'
import layer1 from '../../../assets/images/blog/Layer1.png'
import layer2 from '../../../assets/images/blog/Layer2.png'
import layer3 from '../../../assets/images/blog/Layer3.png'
import layer4 from '../../../assets/images/blog/Layer4.png'
import layer5 from '../../../assets/images/blog/Layer5.png'
import layer6 from '../../../assets/images/blog/Layer6.png'

const BlogSection = () => {

    return (
        <>
            <Container className='py-5 p-5 mt-5'>
                <Row>
                    <Col md={4}>
                        <Card className='border-0 shadow'>
                            <Card.Img variant="top" src={layer} />
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
                            <Card.Img variant="top" src={layer1} />
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

                <Row style={{marginTop: '-420px'}}>
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
                            <Card.Img variant="top" src={layer3} />
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
               

                <Row className='mt-3'>
                    <Col md={4}>
                        <Card className='border-0 shadow'>
                            <Card.Img variant="top" src={layer} />
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
                            <Card.Img variant="top" src={layer1} />
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
        </>
    )
}

export default BlogSection
