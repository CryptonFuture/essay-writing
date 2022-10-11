import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import student from '../../../assets/images/Guarantee/Group1.png'
import students from '../../../assets/images/Guarantee/student.png'
import backstudent from '../../../assets/images/Guarantee/Ellipse2.png'

const Section = () => {
    return (
        <>
            <section id="blur-img">
                <Container className=''>
                    <Row className="align-items-center">
                        <Col md={6} className="mt-5 cols-h1">
                            <h1 className='fw-bold'>Looking for the best
                                quality essay, experienced
                                writers, and extraordinary
                                client relations?</h1>
                            <p className='fs-7'>Trust us, with CheapestEssay; you’ll get all these when you avail our essay writing services. At CheapestEssay, we completely understand how tough it gets to lay your trust in someone else with your custom academic writing. That’s the reason we guarantee you complete confidentiality of your data, 100% refund, etc. Read on to know more about our guarantees.</p>
                            <div className='buttons'>
                                <Button className='bg-purple'>Get Started</Button>

                            </div>
                        </Col>
                        <Col md={6}>

                            <img src={students} className="imgs img-fluid" />
                            {/* <img src={backstudent} alt="" className='img-pos' /> */}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section
