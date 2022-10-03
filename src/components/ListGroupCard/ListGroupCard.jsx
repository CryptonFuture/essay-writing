import React from 'react'
import { Col, Container, Row, Card, ListGroup, Button } from 'react-bootstrap'
import check from '../../assets/images/PriceCalculate/check.png'

const ListGroupCard = () => {
    return (
        <div>
            <Card className="card-transparent">
                <Card.Body className='mt-3'>
                    <Card.Title>
                        <h3 className='fw-bold text-center'>Our Freebies</h3>
                    </Card.Title>
                    <Card.Text className='p-2'>
                        <ListGroup variant="flush" >
                            <ListGroup.Item className='lists-groups'>
                                <img src={check} alt="" className='img-size' />
                                <span className='font-sizes ms-2 fw-bolder'>
                                    Limitless Amendments                                
                                    </span>

                                <span className='color-green float-end ms-2 fonts'>FREE</span>
                                <span className='color-grey float-end fonts'><s>$15.99</s></span>
                            </ListGroup.Item>
                            <ListGroup.Item className='lists-groups mt-3'>
                                <img src={check} alt="" className='img-size' />
                                <span className='font-sizes ms-2 fw-bolder'>
                                    Bibliography
                                </span>

                                <span className='color-green float-end ms-2 fonts'>FREE</span>
                                <span className='color-grey float-end fonts'><s>$15.99</s></span>
                            </ListGroup.Item>
                            <ListGroup.Item className='lists-groups mt-3'>
                                <img src={check} alt="" className='img-size' />
                                <span className='font-sizes ms-2 fw-bolder'>
                                    Outline
                                </span>

                                <span className='color-green float-end ms-2 fonts'>FREE</span>
                                <span className='color-grey float-end fonts'><s>$15.99</s></span>
                            </ListGroup.Item>
                            <ListGroup.Item className='lists-groups mt-3'>
                                <img src={check} alt="" className='img-size' />
                                <span className='font-sizes ms-2 fw-bolder'>
                                    Title page
                                </span>

                                <span className='color-green float-end ms-2 fonts'>FREE</span>
                                <span className='color-grey float-end fonts'><s>$15.99</s></span>
                            </ListGroup.Item>
                            <ListGroup.Item className='lists-groups mt-3'>
                                <img src={check} alt="" className='img-size' />
                                <span className='font-sizes ms-2 fw-bolder'>
                                    Formatting
                                </span>

                                <span className='color-green float-end ms-2 fonts'>FREE</span>
                                <span className='color-grey float-end fonts'><s>$15.99</s></span>
                            </ListGroup.Item>

                            <ListGroup.Item className='lists-groups mt-3'>
                                <img src={check} alt="" className='img-size' />
                                <span className='font-sizes ms-2 fw-bolder'>
                                    Plagiarism Report
                                </span>

                                <span className='color-green float-end ms-2 fonts'>FREE</span>
                                <span className='color-grey float-end fonts'><s>$15.99</s></span>
                            </ListGroup.Item>
                        </ListGroup>
                        <div className='text-center mt-3'>
                            <span className='color-royal-blue'>All these features are  </span>  <span className='fonts color-green ms-2'>FREE</span>
                        </div>
                        <div className='d-flex flex-row justify-content-center mt-3'>
                            <Button className='btn-bg-color padds'>
                                <span> Proceed To Order</span>
                            </Button>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ListGroupCard
