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
                            <h1 className='fw-bold'>Money Back Guarantee</h1>
                            <p className='fs-7'>Dissertation Proposal provides a money-back guarantee feature to our customers so that they can appeal for reimbursement. If the reimbursement request can't be placed in any of the scenarios mentioned below, the customer must notify the customer support team time for the discussion of the matter, and the application will be processed.</p>
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
