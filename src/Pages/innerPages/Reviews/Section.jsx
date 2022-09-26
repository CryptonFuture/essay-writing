import React, { useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Avatar from '../../../assets/images/OurEssayWriter/Avatar.png'
import Avatar1 from '../../../assets/images/OurEssayWriter/Avatar1.png'
import Avatar2 from '../../../assets/images/OurEssayWriter/Avatar2.png'
import Avatar3 from '../../../assets/images/OurEssayWriter/Avatar3.png'
import RatingStar from '../../../components/RatingStar/RatingStar';
import Group1 from '../../../assets/images/OurEssayWriter/Group1.png'
import Group2 from '../../../assets/images/OurEssayWriter/Group2.png'
import Group3 from '../../../assets/images/OurEssayWriter/Group3.png'
import Group from '../../../assets/images/Customers/Group.png'
import arrowImage from '../../../assets/images/reviews/rightarrow.png'
import Layer from '../../../assets/images/AboutUs/Layer.png'
import { Items } from '../../../Item/Item'
import { slice } from 'lodash'

const Section = () => {
    const [item, setItem] = useState(Items)
    const [isCompleted, setIsCompleted] = useState(false)
    const [index, setIndex] = useState(10)
    const initialPost = slice(item, 0, index)

    const loadMore = () => {
        setIndex(index + 10)
        console.log(index)
        if(index >= item.length) {
            setIsCompleted(true)
        } else {
            setIsCompleted(false)
        }
    }

    return (
        <>
            <section id="review-bg">
                <Container className='py-5'>
                    <Row>
                        <h1 className='text-center fw-bold'>Our Happy <img src={Layer} className="layers-7" /> Client</h1>
                        
                            {
                                initialPost.map((items, index) => {
                                    return (
                                        <Col md={6}>
                                        <Card className='card-transistions paddeds-1 shadow-sm mt-5'  >
                                            <div className='d-flex flex-row' key={index}>
                                                <Card.Img variant="top" src={Group} className="img-avatars" />
                                                <span className='ms-3 fw-bolder'>
                                                    <span>{items.name}</span>
                                                    <div className='d-flex flex-row'>
                                                        <RatingStar />
                                                        <span className='ms-2 reviews-2'>{items.rating}</span>
                                                        <span className='ms-2 reviews-2'>{items.date}</span>
                                                    </div>


                                                </span>

                                            </div>
                                            <Card.Body>
                                                <Card.Text>
                                                    {items.para}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        </Col>

                                    )
                                })
                            }

                        
                        {/* <Col md={6}>
                            <Card className='card-transistions paddeds-1 shadow-sm mt-5' >
                                <div className='d-flex flex-row'>
                                    <Card.Img variant="top" src={Group} className="img-avatars" />
                                    <span className='ms-3 fw-bolder'>
                                        <span>Hannah</span>
                                        <div className='d-flex flex-row'>
                                            <RatingStar />
                                            <span className='ms-2 reviews-2'>4.8</span>
                                            <span className='ms-2 reviews-2'>May 7, 2022</span>
                                        </div>


                                    </span>

                                </div>

                                <Card.Body>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem suscipit id, porro minus animi, neque cum quod odit eligendi nostrum amet, similique eius veniam doloremque earum enim maiores perferendis optio!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} >
                            <Card className='card-transistions paddeds-1 shadow-sm mt-3' >
                                <div className='d-flex flex-row'>
                                    <Card.Img variant="top" src={Group} className="img-avatars" />
                                    <span className='ms-3 fw-bolder'>
                                        <span>Hannah</span>
                                        <div className='d-flex flex-row'>
                                            <RatingStar />
                                            <span className='ms-2 reviews-2'>4.8</span>
                                            <span className='ms-2 reviews-2'>May 7, 2022</span>
                                        </div>


                                    </span>

                                </div>

                                <Card.Body>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem suscipit id, porro minus animi, neque cum quod odit eligendi nostrum amet, similique eius veniam doloremque earum enim maiores perferendis optio!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} >
                            <Card className='card-transistions paddeds-1 shadow-sm mt-3' >
                                <div className='d-flex flex-row'>
                                    <Card.Img variant="top" src={Group} className="img-avatars" />
                                    <span className='ms-3 fw-bolder'>
                                        <span>Hannah</span>
                                        <div className='d-flex flex-row'>
                                            <RatingStar />
                                            <span className='ms-2 reviews-2'>4.8</span>
                                            <span className='ms-2 reviews-2'>May 7, 2022</span>
                                        </div>


                                    </span>

                                </div>

                                <Card.Body>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem suscipit id, porro minus animi, neque cum quod odit eligendi nostrum amet, similique eius veniam doloremque earum enim maiores perferendis optio!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} >
                            <Card className='card-transistions paddeds-1 shadow-sm mt-3' >
                                <div className='d-flex flex-row'>
                                    <Card.Img variant="top" src={Group} className="img-avatars" />
                                    <span className='ms-3 fw-bolder'>
                                        <span>Hannah</span>
                                        <div className='d-flex flex-row'>
                                            <RatingStar />
                                            <span className='ms-2 reviews-2'>4.8</span>
                                            <span className='ms-2 reviews-2'>May 7, 2022</span>
                                        </div>


                                    </span>

                                </div>

                                <Card.Body>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem suscipit id, porro minus animi, neque cum quod odit eligendi nostrum amet, similique eius veniam doloremque earum enim maiores perferendis optio!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} >
                            <Card className='card-transistions paddeds-1 shadow-sm mt-3' >
                                <div className='d-flex flex-row'>
                                    <Card.Img variant="top" src={Group} className="img-avatars" />
                                    <span className='ms-3 fw-bolder'>
                                        <span>Hannah</span>
                                        <div className='d-flex flex-row'>
                                            <RatingStar />
                                            <span className='ms-2 reviews-2'>4.8</span>
                                            <span className='ms-2 reviews-2'>May 7, 2022</span>
                                        </div>


                                    </span>

                                </div>

                                <Card.Body>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem suscipit id, porro minus animi, neque cum quod odit eligendi nostrum amet, similique eius veniam doloremque earum enim maiores perferendis optio!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} >
                            <Card className='card-transistions paddeds-1 shadow-sm mt-3' >
                                <div className='d-flex flex-row'>
                                    <Card.Img variant="top" src={Group} className="img-avatars" />
                                    <span className='ms-3 fw-bolder'>
                                        <span>Hannah</span>
                                        <div className='d-flex flex-row'>
                                            <RatingStar />
                                            <span className='ms-2 reviews-2'>4.8</span>
                                            <span className='ms-2 reviews-2'>May 7, 2022</span>
                                        </div>


                                    </span>

                                </div>

                                <Card.Body>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem suscipit id, porro minus animi, neque cum quod odit eligendi nostrum amet, similique eius veniam doloremque earum enim maiores perferendis optio!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} >
                            <Card className='card-transistions paddeds-1 shadow-sm mt-3' >
                                <div className='d-flex flex-row'>
                                    <Card.Img variant="top" src={Group} className="img-avatars" />
                                    <span className='ms-3 fw-bolder'>
                                        <span>Hannah</span>
                                        <div className='d-flex flex-row'>
                                            <RatingStar />
                                            <span className='ms-2 reviews-2'>4.8</span>
                                            <span className='ms-2 reviews-2'>May 7, 2022</span>
                                        </div>


                                    </span>

                                </div>

                                <Card.Body>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem suscipit id, porro minus animi, neque cum quod odit eligendi nostrum amet, similique eius veniam doloremque earum enim maiores perferendis optio!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} >
                            <Card className='card-transistions paddeds-1 shadow-sm mt-3' >
                                <div className='d-flex flex-row'>
                                    <Card.Img variant="top" src={Group} className="img-avatars" />
                                    <span className='ms-3 fw-bolder'>
                                        <span>Hannah</span>
                                        <div className='d-flex flex-row'>
                                            <RatingStar />
                                            <span className='ms-2 reviews-2'>4.8</span>
                                            <span className='ms-2 reviews-2'>May 7, 2022</span>
                                        </div>


                                    </span>

                                </div>

                                <Card.Body>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem suscipit id, porro minus animi, neque cum quod odit eligendi nostrum amet, similique eius veniam doloremque earum enim maiores perferendis optio!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6}>
                            <Card className='card-transistions paddeds-1 shadow-sm mt-3' >
                                <div className='d-flex flex-row'>
                                    <Card.Img variant="top" src={Group} className="img-avatars" />
                                    <span className='ms-3 fw-bolder'>
                                        <span>Hannah</span>
                                        <div className='d-flex flex-row'>
                                            <RatingStar />
                                            <span className='ms-2 reviews-2'>4.8</span>
                                            <span className='ms-2 reviews-2'>May 7, 2022</span>
                                        </div>


                                    </span>

                                </div>

                                <Card.Body>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem suscipit id, porro minus animi, neque cum quod odit eligendi nostrum amet, similique eius veniam doloremque earum enim maiores perferendis optio!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col> */}

                    </Row>

                    <Row className='mt-5 '>
                        <Col md={12} className="cols-width flexiable-columns">
                            <div className='d-flex flex-row flexiable-rows justify-content-center'>
                                <span className='fw-bold center'>
                                    You've seen 10 reviews from 29 <br />
                                    <img src={arrowImage} />
                                </span>
                                {
                                    isCompleted ? (
                                        <h1 className='ms-3'>That's It</h1>
                                    ) : (
                                        <Button onClick={loadMore} className='load-more ms-5 bg-btn'>Load More</Button>

                                    )
                                }

                            </div>


                        </Col>
                    </Row>

                </Container>
            </section>
        </>
    )
}

export default Section
