import axios from 'axios'
import React, { useState, useRef, useEffect } from 'react'
import { Container, Row, Col, Card, Button, Form, InputGroup, ListGroup, Badge, Spinner } from 'react-bootstrap'
import layer from '../../../assets/images/blog/Layer.png'
import layer1 from '../../../assets/images/blog/Layer1.png'
import layer2 from '../../../assets/images/blog/Layer2.png'
import layer3 from '../../../assets/images/blog/Layer3.png'
import layer4 from '../../../assets/images/blog/Layer4.png'
import layer5 from '../../../assets/images/blog/Layer5.png'
import layer6 from '../../../assets/images/blog/Layer6.png'
import { Link } from 'react-router-dom'
import { slice } from 'lodash'
import Swal from 'sweetalert2'
import parse from 'html-react-parser';
import { Image } from 'antd';


const ReadMore = ({ children, maxCharacterCount = 100 }) => {
    const text = children

    const [isTruncated, setIsTruncated] = useState(true)

    const resultString = isTruncated ? text.slice(0, maxCharacterCount) : text

    const toggleIsTrincated = () => {
        setIsTruncated(!isTruncated)
    }

    return (
        <p>
            <div dangerouslySetInnerHTML={{__html: resultString}}></div>
            <span className='fw-bold cursors' onClick={toggleIsTrincated}>
                {isTruncated ? "...ReadMore" : "...ReadLess"}
            </span>
        </p>
    )
}



function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000))
}

const BlogSection = () => {
    const [data, setData] = useState([])
    const [limit, setLimit] = useState('')
    const [isLoading, setIsLoading] = useState(false)



    const FetchBlog = async () => {
        await axios.get(`https://admin.dissertationproposal.uk/api/blogs`).then(res => {
            console.log(res.data.message)
            console.log(res.data)
            setData(res.data.data)
        }).catch(error => {
            console.log(error)
        })
    }


    const FetchLoadMore = async () => {
        setIsLoading(true)
        await axios.get(`https://admin.dissertationproposal.uk/api/load-more/blogs/${limit}`).then(res => {
            console.log(res.data.message)
            console.log(res.data)
            setData(res.data.data)
        }).catch(error => {
            console.log(error)
        })
    }

    const loadMore = () => {
        setLimit(limit + 20)
    }

    useEffect(() => {
        FetchLoadMore()
        FetchBlog()
    }, [limit])

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setIsLoading(false)
            }).catch((error) => {
                console.log(error)
            })
        }
    }, [isLoading])

  
    return (
        <>
            <Container className='py-5 p-5 mt-5'>
                <Row>

                    {
                        data.map((blogs, index) => {
                            return (
                                <Col md={4} sm={4} lg={4} className="mt-3">
                                    <Card className='border-0 shadow' key={index}>
                                        {/* <Card.Img onClick={(e) => thumbnail(e, 'hello')} variant="top" src={blogs.img} /> */}
                                        <Image
                                            // width={200}
                                            src={blogs.img}
                                        />

                                        <Card.Body className="p-3">
                                            {/* <div className='d-flex flex-row'>
                                                <small style={{ color: 'gray' }}><i class="fa-regular fa-calendar"></i> August 10, 2022</small>
                                                <small className='ms-5' style={{ color: 'gray' }}><i class="fa-regular fa-eye"></i> 811 views</small>
                                            </div> */}
                                            <Card.Title className='fw-bold mt-3'>{blogs.title}</Card.Title>
                                            <Card.Text className='blog_font_size'>

                                                <ReadMore maxCharacterCount={100}>
                                                    {blogs.short_des}
                                                </ReadMore>
                                            </Card.Text>
                                            <Card.Text className='blog_font_size'>
                                                <ReadMore maxCharacterCount={200}>
                                                    {blogs.long_des}
                                                </ReadMore>
                                            </Card.Text>
                                            <Link to={`/blogDetails/${blogs.id}`}>
                                                <Button variant="primary" className='blog_button'><i class="fa-regular fa-eye"></i> View </Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}



                    {/* <Col md={4}>
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
                    </Col> */}
{/* 
                    <Col md={7} sm={3} lg={2}>
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

                    </Col> */}
                </Row>

                {/* <Row style={{marginTop: '-420px'}}>
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

            
                </Row>  */}
                <Row className='justify-content-center mt-5'>
                    <Col md={6} sm={6} lg={6}>
                        <div className='d-flex flex-row justify-content-center'>
                            <Button variant="primary" className='blog_button' onClick={!isLoading ? loadMore : null}>
                                {isLoading ? <Spinner animation="border" role="status" size="sm">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner> : 'Load More '}
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BlogSection
