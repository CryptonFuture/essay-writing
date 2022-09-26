import React, { useState, useEffect } from 'react'
import { Card, Col, Container, Row, Form, Button, ListGroup, Spinner } from 'react-bootstrap'
import toast, { Toaster } from 'react-hot-toast'
import check from '../../../assets/images/checkicon/checked.png'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import axios from 'axios'

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000))
}

const Section = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setIsLoading(false)
                Swal.fire({
                    title: 'Your Order Has been Submitted Successfully',
                    showConfirmButton: false,
                    showCancelButton: false,
                    icon: 'success',
                    timer: 2000
                })
            })
        }
    }, [isLoading])

    const onSubmit = async (data) => {
        setIsLoading(true)
        await axios('http://localhost:3001/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        }).then(res => {
            console.log(res.data)
            localStorage.setItem('data', JSON.stringify(data))
        }).catch(error => {
            console.log(error)
        })
        console.log(data)
    }
    return (
        <>
            <section id="order">
                <Container>
                    <Row className='justify-content-center'>
                        <Col md={9} sm={12} xs={10} className="g-0">
                            <h3 className='text-center mt-5'>Fill Out The Order Form</h3>
                            <Card className='box-shadow cards-bodys mt-4'>
                                <Card.Body className='py-5 p-5 mb-0'>
                                    <Form onSubmit={handleSubmit(!isLoading ? onSubmit : null)}>
                                        <Row className="mb-3">

                                            <Col md={4}>
                                                <Form.Group controlId="formGridEmail">
                                                    <Form.Label className='font-input'>Your Name <span className='text-danger'>*</span></Form.Label>
                                                    <Form.Control {...register('name', { required: true, maxLength: 30 })} name="name" type="text" className='input-radius' />
                                                </Form.Group>
                                                {errors.name && errors.name.type === 'required' && <small className='text-danger'>The Field is Required</small>}
                                                {errors.name && errors.name.type === 'maxLength' && <small className='text-danger'>Max length exceeded</small>}
                                            </Col>

                                            <Col md={4}>

                                                <Form.Group controlId="formGridEmail">
                                                    <Form.Label className='font-input'>Your Email <span className='text-danger'>*</span></Form.Label>
                                                    <Form.Control {
                                                        ...register('email',
                                                            {
                                                                required: true,
                                                                pattern: {
                                                                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                                    message: 'Please enter a valid email'
                                                                }
                                                            }

                                                        )} name="email" type="text" className='input-radius' />
                                                </Form.Group>
                                                {errors.email && errors.email.type === 'required' && <small className='text-danger'>The Field is Required</small>}
                                                {errors.email && <small className='text-danger'>{errors.email.message}</small>}
                                            </Col>

                                            <Col md={4}>
                                                <Form.Group controlId="formGridEmail">
                                                    <Form.Label className='font-input'>Phone Number <span className='text-danger'>*</span></Form.Label>
                                                    <Form.Control onKeyPress={(event) => {
                                                    if (!/[0-9]/.test(event.key)) {
                                                        event.preventDefault();
                                                    }
                                                }}  {...register('phone', { required: true, maxLength: 10 })} name="phone" type="text" className='input-radius' />
                                                </Form.Group>
                                                {errors.phone && errors.phone.type === 'required' && <small className='text-danger'>The Field is Required</small>}
                                                {errors.phone && errors.phone.type === 'maxLength' && <small className='text-danger'>Max length exceeded</small>}
                                            </Col>

                                        </Row>

                                        <Row className="mb-3">
                                            <Col md={4}>
                                                <Form.Group controlId="formGridState">
                                                    <Form.Label className='font-input'>Education</Form.Label>
                                                    <Form.Select  {...register('education', { required: true })} name="education" defaultValue="Under Graduate" className='input-radius'>
                                                        <option>Under Graduate</option>
                                                        <option>Graduate</option>
                                                        <option>Masters</option>
                                                        <option>PhD</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                {errors.education && errors.education.type === 'required' && <small className='text-danger'>The Field is Required</small>}
                                            </Col>

                                            <Col md={4}>
                                                <Form.Group controlId="formGridState">
                                                    <Form.Label className='font-input'>Academic Subject</Form.Label>
                                                    <Form.Select  {...register('subject', { required: true })} name="subject" defaultValue="Choose..." className='input-radius'>
                                                        <option>Choose...</option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                {errors.subject && errors.subject.type === 'required' && <small className='text-danger'>The Field is Required</small>}
                                            </Col>

                                            <Col md={4}>
                                                <Form.Group controlId="formGridState">
                                                    <Form.Label className='font-input'>Paper Type</Form.Label>
                                                    <Form.Select  {...register('paper', { required: true })} name="paper" defaultValue="Choose..." className='input-radius'>
                                                        <option>Choose...</option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                {errors.paper && errors.paper.type === 'required' && <small className='text-danger'>The Field is Required</small>}

                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Col md={4}>
                                                <Form.Group controlId="formGridEmail">
                                                    <Form.Label className='font-input'>Number Of Pages <span className='text-danger'>*</span></Form.Label>
                                                    <Form.Control  {...register('pages', { required: true })} name="pages" type="number" className='input-radius' />
                                                </Form.Group>
                                                {errors.pages && errors.pages.type === 'required' && <small className='text-danger'>The Field is Required</small>}

                                            </Col>

                                            <Col md={4}>
                                                <Form.Group controlId="formGridState">
                                                    <Form.Label className='font-input'>Paper Quantity</Form.Label>
                                                    <Form.Select  {...register('quantity', { required: true })} name="quantity" defaultValue="Choose..." className='input-radius'>
                                                        <option>2:1</option>
                                                        <option>1st Class</option>
                                                        <option>2:2 Class</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                {errors.quantity && errors.quantity.type === 'required' && <small className='text-danger'>The Field is Required</small>}
                                            </Col>

                                            <Col md={4}>
                                                <Form.Group controlId="formGridEmail">
                                                    <Form.Label className='font-input'>Word Count</Form.Label>
                                                    <Form.Control  {...register('word', { required: true })} name="word" type="text" className='input-radius' />
                                                </Form.Group>
                                                {errors.word && errors.word.type === 'required' && <small className='text-danger'>The Field is Required</small>}
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">

                                            <Col md={4}>
                                                <Form.Group controlId="formGridState">
                                                    <Form.Label className='font-input'>Delivery Time</Form.Label>
                                                    <Form.Select  {...register('time', { required: true })} name="time" defaultValue="Choose..." className='input-radius'>
                                                        <option>Choose...</option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                {errors.time && errors.time.type === 'required' && <small className='text-danger'>The Field is Required</small>}
                                            </Col>

                                            <Col md={4}>
                                                <Form.Group controlId="formGridEmail">
                                                    <Form.Label className='font-input'>Major/Course <span className='text-danger'>*</span></Form.Label>
                                                    <Form.Control  {...register('course', { required: true })} name="course" type="text" className='input-radius' />
                                                </Form.Group>
                                                {errors.course && errors.course.type === 'required' && <small className='text-danger'>The Field is Required</small>}
                                            </Col>

                                            <Col md={4}>
                                                <Form.Group controlId="formGridEmail">
                                                    <Form.Label className='font-input'>Topic <span className='text-danger'>*</span></Form.Label>
                                                    <Form.Control  {...register('topic', { required: true })} name="topic" type="text" className='input-radius' />
                                                </Form.Group>
                                                {errors.topic && errors.topic.type === 'required' && <small className='text-danger'>The Field is Required</small>}
                                            </Col>

                                        </Row>

                                        <Row className="mb-3">

                                            <Col md={4}>
                                                <Form.Group controlId="formGridEmail">
                                                    <Form.Label className='font-input'>Price &euro;</Form.Label>
                                                    <Form.Control  {...register('price', { required: true })} name="price" type="text" className='input-radius' />
                                                </Form.Group>
                                                {errors.price && errors.price.type === 'required' && <small className='text-danger'>The Field is Required</small>}
                                            </Col>

                                            <Col md={4}>
                                                <Form.Group controlId="formGridEmail">
                                                    <Form.Label className='font-input'>Discount 10% &euro;</Form.Label>
                                                    <Form.Control  {...register('discount', { required: true })} name="discount" type="text" className='input-radius' />
                                                </Form.Group>
                                                {errors.discount && errors.discount.type === 'required' && <small className='text-danger'>The Field is Required</small>}

                                            </Col>

                                            <Col md={4}>
                                                <Form.Group controlId="formGridEmail">
                                                    <Form.Label className='font-input'>Final Price &euro;</Form.Label>
                                                    <Form.Control  {...register('fprice', { required: true })} name="fprice" type="text" className='input-radius' />
                                                </Form.Group>
                                                {errors.fprice && errors.fprice.type === 'required' && <small className='text-danger'>The Field is Required</small>}

                                            </Col>

                                        </Row>

                                        <Row className="mb-3">

                                            <Col md={3}>
                                                <Form.Group controlId="formGridEmail">
                                                    <Form.Label className='font-input'>Upload File</Form.Label>
                                                    <Form.Control name='file' {...register('file', { required: true })} type="file" className='input-radius' />
                                                </Form.Group>
                                                {errors.file && errors.file.type === 'required' && <small className='text-danger'>The Field is Required</small>}

                                            </Col>

                                            <Col md={3}>
                                                <Form.Group controlId="formGridState">
                                                    <Form.Label className='font-input'>Who Assisted You?</Form.Label>
                                                    <Form.Select  {...register('assign', { required: true })} name="assign" defaultValue="Choose..." className='input-radius'>
                                                        <option>Choose...</option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                {errors.assign && errors.assign.type === 'required' && <small className='text-danger'>The Field is Required</small>}

                                            </Col>

                                            <Col md={3}>
                                                <Form.Group controlId="formGridState">
                                                    <Form.Label className='font-input'>Citation Style</Form.Label>
                                                    <Form.Select  {...register('styles', { required: true })} name="styles" defaultValue="Choose..." className='input-radius'>
                                                        <option>Choose...</option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                {errors.styles && errors.styles.type === 'required' && <small className='text-danger'>The Field is Required</small>}

                                            </Col>

                                            <Col md={3}>
                                                <Form.Group controlId="formGridEmail">
                                                    <Form.Label className='font-input'>Reference <span className='text-danger'>*</span></Form.Label>
                                                    <Form.Control  {...register('reference', { required: true })} name="reference" type="text" className='input-radius' />
                                                </Form.Group>
                                                {errors.reference && errors.reference.type === 'required' && <small className='text-danger'>The Field is Required</small>}

                                            </Col>
                                        </Row>

                                        <Row className='mb-3'>

                                            <Col md={6}>
                                                <Form.Group controlId="formGridEmail">
                                                    <Form.Label className='font-input'>Paper Description</Form.Label>
                                                    <Form.Control  {...register('description', { required: true })} name="description" as="textarea" rows={5} />
                                                </Form.Group>
                                                {errors.description && errors.description.type === 'required' && <small className='text-danger'>The Field is Required</small>}

                                            </Col>

                                            <Col md={6}>
                                                <Form.Group controlId="formGridEmail">
                                                    <Form.Label className='font-input'>Extra Requirment</Form.Label>
                                                    <Form.Control {...register('requirement', { required: true })} name="requirement" as="textarea" rows={5} />
                                                </Form.Group>
                                                {errors.requirement && errors.requirement.type === 'required' && <small className='text-danger'>The Field is Required</small>}

                                            </Col>

                                        </Row>

                                        <Row className='mb-3'>
                                            <Col md={6}>
                                                {/* <Form.Group controlId="formGridState">
                                                    <Form.Select {...register('payment', { required: true })} name="payment" defaultValue="Choose..." className='input-radius'>
                                                        <option>Pay With Stripe</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                {errors.payment && errors.payment.type === 'required' && <small className='text-danger'>The Field is Required</small>} */}

                                            </Col>

                                            <Col md={12}>
                                                <Form.Group controlId="formGridEmail">
                                                    <div className="d-grid gap-2">
                                                        <Button
                                                            className='btns-button'
                                                            variant="primary"
                                                            type="submit"
                                                            disabled={isLoading}
                                                        >
                                                            {
                                                                isLoading ?
                                                                    <Spinner animation="border" role="status" size="sm">
                                                                        <span className="visually-hidden">Loading...</span>
                                                                    </Spinner> : 'submit'
                                                            }
                                                        </Button>


                                                    </div>
                                                </Form.Group>
                                            </Col>


                                        </Row>

                                        {/* <Form.Group className="mb-3" id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group> */}


                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3} className="flush-mt">
                            <ListGroup variant="flush" className='list-group'>
                                <ListGroup.Item as="h5" className='transp-color fw-bolder' active>
                                    Order Includes
                                </ListGroup.Item>
                                <ListGroup.Item className='transp'><img src={check} className="img-fluid" /> Free Revisions Within the Scope </ListGroup.Item>
                                <ListGroup.Item className='transp'><img src={check} className="img-fluid" /> 100% Confidentiality Guaranteed</ListGroup.Item>
                                <ListGroup.Item className='transp'><img src={check} className="img-fluid" /> Free Plagiarism Report</ListGroup.Item>
                                <ListGroup.Item className='transp'><img src={check} className="img-fluid" /> Extensive Grammarly Report</ListGroup.Item>
                                <ListGroup.Item className='transp'><img src={check} className="img-fluid" /> Timely Delivery</ListGroup.Item>
                                <ListGroup.Item className='transp'><img src={check} className="img-fluid" /> Free Revisions Within the Scope</ListGroup.Item>
                            </ListGroup>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section
