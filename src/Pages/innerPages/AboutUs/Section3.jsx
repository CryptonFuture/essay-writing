import React from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'

const Section3 = () => {
    return (
        <>
        <section id="about-us">
            <Container className='py-5'>
                <Row className='justify-content-center'>
                    <Col md={6}>
                        <Card className='border-0 shadow-sm'>
                            <Card.Body className='p-3'>
                                <Card.Title className='fw-bold'>ABOUT OUR ADROIT WRITERS</Card.Title>
                                <Card.Text><p className='paras'> A team of a dedicated and dexterous writers who are well-experienced and professional
                                    in their own academic domain by engrossing their passion, vast experiences and diverse
                                    knowledge to deliver the premium quality services to the clients.

                                    Following the recent format, Our proficient and qualified team of writers is enlightened
                                    with various formats of the assignments; thus, it ensures to deliver a premium quality
                                    assignment provisioning your specified needs while maintaining standard. Complex
                                    assignments are no more a headache now as the team is also well-trained to deal with
                                    complex assignments in an effective way.</p></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card className='border-0 shadow-sm'>
                            <Card.Body className='p-3'>
                                <Card.Title className='fw-bold'>Timely CUSTOMER SUPPORT</Card.Title>
                                <Card.Text ><p className='paras'> A team of proactive young lads that believes in professionalism yet helpful and friendly
                                    to provide customer support and work round-the-clock to provide needed assistance to
                                    you within a single click. We are available 24/7 to reply to your queries and proffer
                                    assistance to you. </p></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card className='border-0 shadow-sm mt-3'>
                            <Card.Body className='p-3'>
                                <Card.Title  className='fw-bold'>OUR MISSION</Card.Title>
                                <Card.Text><p className='paras'> When the students are assigned a lot of tasks, they become stressed out. Our mission is
                                    to establish a platform which provides relief and peace of mind to such students by
                                    eradicating their fears and ambiguities. We do not only aim to provide the students with
                                    quality assignments and assistance, we also strive to help them develop significant skills.
                                    Our top priority is to achieve customer satisfaction and make constant efforts to retain
                                    it.</p></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card className='border-0 shadow-sm mt-3'>
                            <Card.Body className='p-3'>
                                <Card.Title className='fw-bold'>OUR SPECIALIZED AREAS</Card.Title>
                                <Card.Text><p className='paras'>The predominant feature that helps us to attain the confidence, trust, and satisfaction
                                    of the customers is the level of quality assignments we offer to them. We have a range
                                    of qualified experts in our team which efficiently deals with the assignments of varying
                                    complexity levels.

                                    We are experts in delivering the top-notch assignments with proper referencing in
                                    specified style and 100% plagiarism-free content along with the editing and
                                    proofreading service. We care for the students; therefore, we have designed a fair
                                    pricing plan which fits in the pocket of the students.</p></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </section>
        </>
    )
}

export default Section3
