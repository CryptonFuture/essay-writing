import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Navbar from '../../../components/Navbar/Navbar'
import Speaker from '../../../assets/images/speaker.png'
import badge from '../../../assets/images/bag.png'
import tag from '../../../assets/images/tag.png'
import doller from '../../../assets/images/doller.png'
import rupees from '../../../assets/images/rupees.png'
import Foot from '../../sections/Foot'
import Footer from '../../sections/Footer'
import Footers from '../../sections/Footers'

const Referrals = () => {
    return (
        <div>
            <Navbar />
            <section id="Referrals">
                <Container className='py-5 p-5 mt-5'>
                    <Row>
                        <Col md={12} className="mb-0">
                            <h1 className='text-center fw-bold mt-4'>Referrals</h1>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="Referrals-1">
            <Container className='py-5'>
                <Row className='justify-content-center'>
                    <Col md={6}>
                        <h1 className='text-center fw-bold'>Referrals</h1>
                        <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quidem autem excepturi at expedita. Qui aliquam nesciunt illo temporibus ea at perspiciatis, labore ab placeat! Ratione animi nihil inventore.</p>
                    </Col>
                </Row>
            
                <Row className='justify-content-center mt-5'>
                    <Col md={3}>
                        <h3 className='fw-bold'>Get started</h3>
                        <p>Simply sign up on our website</p>
                    </Col>

                    <Col md={3}>
                        <h3 className='fw-bold'>Refer your friend</h3>
                        <p>Refer to our website further</p>
                    </Col>

                    <Col md={3}>
                        <h3 className='fw-bold'>Earn Rewards</h3>
                        <p>Earn rewards on orders</p>
                    </Col>

                    <Col md={3}>
                        <h3 className='fw-bold'>Top Referrals</h3>
                        <p>Check out our below top achievers who earned rewards based on their referrals.</p>
                    </Col>
                </Row>

                <Row className='justify-content-center mt-5'>
                    <Col md={3}>
                        <h3 className='fw-bold'>David Wallet</h3>
                        <p>Earned $4260 since 2017
                            David came to us for his undergraduate thesis and he started referring his university teammates afterward
                        </p>
                    </Col>

                    <Col md={3}>
                        <h3 className='fw-bold'>Angelina Gill</h3>
                        <p>Earned $3150 since 2018
                            Angelina got an outstanding result on her course project and she referred many friends to us since then.
                        </p>
                    </Col>

                    <Col md={3}>
                        <h3 className='fw-bold'>John Macgill</h3>
                        <p>Earned $4150 since 2016
                            John refers many of his friends to us who are pursuing their masters and want to get quality content for their master’s thesis.
                        </p>
                    </Col>

                    <Col md={3}>
                        <h3 className='fw-bold'>Bill Connor</h3>
                        <p>Earned $2510 since 2019
                            Bill refers to us as those people who want quality content for their publications in the journal.
                        </p>
                    </Col>
                </Row>
            </Container>
            </section>

            <section id="refer">
                <Container className='py-5 p-5 mt-5'>
                    <Row>
                        <Col md={4}>
                            <Card className='border-0 shadow-sm'>
                                <Card.Body className='p-3'>
                                    <div className='d-flex flex-row justify-content-center'>
                                        <Card.Img src={Speaker} className="img-speaker" />
                                    </div>
                                    {/* <Card.Title></Card.Title> */}
                                    <Card.Text className='text-center'>Copy and share the referral link with your colleagues</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card  className='border-0 shadow-sm'>
                                <Card.Body className='p-3'>
                                <div className='d-flex flex-row justify-content-center'>
                                        <Card.Img src={badge} className="img-speaker" />
                                    </div>
                                    {/* <Card.Title></Card.Title> */}
                                    <Card.Text className='text-center'>They will receive discount on their first order</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card  className='border-0 shadow-sm'>
                                <Card.Body className='p-3'>
                                <div className='d-flex flex-row justify-content-center'>
                                        <Card.Img src={tag} className="img-speaker" />
                                    </div>
                                    {/* <Card.Title></Card.Title> */}
                                    <Card.Text className='text-center'>You will receive 3% of the total of their order.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4} className="mt-3">
                            <Card className='border-0 shadow-sm'>
                                <Card.Body className='p-3'>
                                    <div className='d-flex flex-row justify-content-center'>
                                        <Card.Img src={doller} className="img-speaker" />
                                    </div>
                                    {/* <Card.Title></Card.Title> */}
                                    <Card.Text className='text-center'>You will receive 3% of the amount for the order made</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card  className='border-0 shadow-sm'>
                                <Card.Body className='p-3'>
                                <div className='d-flex flex-row justify-content-center'>
                                        <Card.Img src={rupees} className="img-speaker" />
                                    </div>
                                    {/* <Card.Title></Card.Title> */}
                                    <Card.Text className='text-center'>Keep referring us and earn exciting rewards</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        
                    </Row>
                </Container>
            </section>
            <Foot />
            <Footer />
            <Footers />
        </div>
    )
}

export default Referrals