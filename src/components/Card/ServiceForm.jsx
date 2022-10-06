import React, { useState, useEffect } from 'react'
import { Col, Row, Container, Card, Form, Button, Spinner } from 'react-bootstrap'
import Book from '../../assets/images/checkicon/Book.png'
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate, Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import axios from 'axios';
import backpic from '../../assets/images/backgroundpics.png'

const SITE_KEY = "6LcBUB4iAAAAABIB_BExNRsYUvWkV_sLps02wCU7";

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000))
}

const ServiceForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm()

    const navigate = useNavigate()

    // function onChange(value) {
    //     console.log("Captcha value:", value);
    // }


    const submit = async (data) => {
        setIsLoading(true)
        await axios('http://localhost:3001/api/order', {
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
        window.grecaptcha.ready(() => {
            window.grecaptcha.execute(SITE_KEY, { action: 'submit' }).then(token => {
                submitData(token);
            });
        });
    }

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                Swal.fire({
                    title: 'Your Form Has been Submitted Successfully',
                    showConfirmButton: false,
                    showCancelButton: false,
                    icon: 'success',
                    timer: 2000
                }).then(() => {
                    setIsLoading(false)
                    // navigate('/order')
                }).catch((error) => {
                    console.log(error)
                })
            })
        }
    }, [isLoading])

    useEffect(() => {
        const loadScriptByURL = (id, url, callback) => {
            const isScriptExist = document.getElementById(id);

            if (!isScriptExist) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = url;
                script.id = id;
                script.onload = function () {
                    if (callback) callback();
                };
                document.body.appendChild(script);
            }

            if (isScriptExist && callback) callback();
        }

        loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`, function () {
            console.log("Script loaded!");
        });
    }, []);

    const submitData = token => {
        fetch('http://localhost:4000/verify', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "g-recaptcha-response": token
            })
        }).then(res => res.json()).then(res => {
            setIsLoading(false);
            setResponse(res);
        });
    }

    return (
        <Container>
            <Row>
                <Card className='cards-2 card-radius '>
                    <Row>
                        <Col md={8}>
                            <h3 className='fw-bold font-h3 ms-3 mt-2'> A Get <span className='color-blue'>25%</span>  OFF
                                On your 1st Order</h3>
                        </Col>

                        <Col md={4}>
                            <img src={Book} className="img-book" />
                        </Col>
                    </Row>

                    <Form onSubmit={handleSubmit(!isLoading ? submit : null)} method="POST">
                        <Container>
                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Label className='font-input'>Username</Form.Label>
                                        <Form.Control {...register('username', { required: true, maxLength: 30 })} className='input' name="username" type="text" placeholder='Full Name' />
                                    </Form.Group>
                                    {errors.username && errors.username.type === 'required' && <small className='text-danger'>The Field is Required</small>}
                                    {errors.username && errors.username.type === 'maxLength' && <small className='text-danger'>Max length exceeded</small>}
                                </Col>

                                <Col md={6}>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Label className='font-input'>Email</Form.Label>
                                        <Form.Control {...register('email', {
                                            required: true,
                                            pattern: {
                                                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                message: 'Please enter a valid email'
                                            }
                                        })} className='input' name="email" type="email" placeholder='Email Id' />
                                    </Form.Group>
                                    {errors.email && errors.email.type === 'required' && <small className='text-danger'>The Field is Required</small>}
                                    {errors.email && <small className='text-danger'>{errors.email.message}</small>}
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Label className='font-input'>Phone</Form.Label>
                                        <Form.Control onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)) {
                                                event.preventDefault();
                                            }
                                        }} {...register('phone', { required: true, maxLength: 10 })} className='input' name="phone" type="text" placeholder='Phone No' />
                                    </Form.Group>
                                    {errors.phone && errors.phone.type === 'required' && <small className='text-danger'>The Field is Required</small>}
                                    {errors.phone && errors.phone.type === 'maxLength' && <small className='text-danger'>Max length exceeded</small>}

                                </Col>

                                <Col md={6}>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Label className='font-input'>No Of Words</Form.Label>
                                        <Form.Control {...register('noOfWords', { required: true, maxLength: 15 })} className='input' name="noOfWords" type="text" placeholder='No Of Words' />
                                    </Form.Group>
                                    {errors.noOfWords && errors.noOfWords.type === 'required' && <small className='text-danger'>The Field is Required</small>}
                                    {errors.noOfWords && errors.noOfWords.type === 'maxLength' && <small className='text-danger'>Max length exceeded</small>}
                                </Col>
                            </Row>

                            <Row>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label className='font-input'>Select Subject</Form.Label>
                                    <Form.Select {...register('subject', { required: true })} name="subject" defaultValue="Choose..." >
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>
                                {errors.subject && errors.subject.type === 'required' && <small className='text-danger'>The Field is Required</small>}

                            </Row>

                            <Row >
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='font-input'>Message</Form.Label>
                                    <Form.Control {...register('message', { required: true })} name="message" as="textarea" rows={3} />
                                </Form.Group>
                                {errors.message && errors.message.type === 'required' && <small className='text-danger'>The Field is Required</small>}

                            </Row>

                            <Row className='mt-3'>

                                <Col md={6}>
                                    <Form.Group as={Col} controlId="formGridEmail" >
                                       
                                    </Form.Group>
                                </Col>

                                <Col md={12}>

                                    <Form.Group className='mb-3' controlId="formGridEmail">
                                        <div className='d-grid gap-2'>
                                            <Button
                                                type='submit'
                                                className='gradient mt-2'
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
                        </Container>
                    </Form>
                </Card>
            </Row>
        </Container>
    )
}

export default ServiceForm
