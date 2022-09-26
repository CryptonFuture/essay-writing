import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import group from '../../../assets/images/WhyChooseUs/Group.png'
import group1 from '../../../assets/images/WhyChooseUs/Group1.png'
import group2 from '../../../assets/images/WhyChooseUs/Group2.png'
import Choose from '../../../assets/images/WhyChooseUs/WhyChooseUs2.png'

const Section1 = () => {
    return (
        <>
            <Container className='py-5'>
                <Row>
                    <Col md={6} className="heading-cols">
                        <h1 className='fw-bold'>There are so many good
                            Reasons to avail services </h1>
                        <p className='font-choose'>Our writers are the experts who know how to ace when it comes to the quality. Their vast experience let them cover a number of topics without any hitch.</p>
                        <div className='d-flex flex-row flexiable-columns'>
                            <img src={group} className="img-group" />
                            <h5 className='ms-3'>
                                <span className='fw-bold'>GOOD REASONS TO AVAIL THE SERVICES FROM ASSIGNMENT EXPERTS!</span>
                                <p className='font-choose'>When it comes to quality, our writers are the experts who know how to master it. Their diverse
                                    and vast experience let them cover several topics about every subject without any hindrance.</p>
                            </h5>


                        </div>

                        <div className='d-flex flex-row flexiable-columns'>
                            <img src={group1} className="img-group" />
                            <h5 className='ms-3'>
                                <span className='fw-bold'>BEST SERVICES ALWAYS COME FROM THE BEST TEAM</span>
                                <p className='font-choose'>Our highly qualified and capable of producing the finest papers experts that won&#39;t disappoint
                                    and will make you avail our services again without a second thought. Best services mainly come
                                    with the best team as it is impossible to provide the best services without the best team,
                                    therefore we only hire high skilled writers in our team to ensure quality content.</p>
                            </h5>


                        </div>

                        <div className='d-flex flex-row flexiable-columns'>
                            <img src={group2} className="img-group" />
                            <h5 className='ms-3'>
                                <span className='fw-bold'>TAILORED ASSIGNMENTS</span>
                                <p className='font-choose'>We know plagiarism is considered to be illegal and we always try to keep ourselves away from
                                    these kinds of illegal acts. So, for ensuring high-quality assignments we write each paper from
                                    scratch. Following the standards, we try not to make any compromise on the quality of the
                                    papers.</p>
                            </h5>


                        </div>

                        <div className='d-flex flex-row flexiable-columns'>
                            <img src={group2} className="img-group" />
                            <h5 className='ms-3'>
                                <span className='fw-bold'>FRIENDLY CUSTOMER SUPPORT 24/7</span>
                                <p className='font-choose'>Our customer support will be happy and welcoming in resolving your issues and problems, So
                                    we won&#39;t mind helping you out anytime whether it&#39;s the day or night. You can contact us
                                    whenever you want to share your personal information or want the answers to questions. It&#39;s
                                    part of our culture to value our customers, as customer satisfaction is our utmost priority.</p>
                            </h5>


                        </div>

                        <div className='d-flex flex-row flexiable-columns'>
                            <img src={group2} className="img-group" />
                            <h5 className='ms-3'>
                                <span className='fw-bold'>POSITIVE FEEDBACK</span>
                                <p className='font-choose'>We are working day and night to win the hearts of our customers as we believe in hard work
                                    and our hard work is paid off when we receive positive feedback from our satisfied customers.
                                    Our dedicated team and our happy customers; both are very important to us.</p>
                            </h5>


                        </div>

                        <div className='d-flex flex-row flexiable-columns'>
                            <img src={group2} className="img-group" />
                            <h5 className='ms-3'>
                                <span className='fw-bold'>YOUR INFORMATION IS SECURE WITH US!</span>
                                <p className='font-choose'>We respect our customer&#39;s privacy and ensure confidentiality while using our services. Our
                                    customers aren&#39;t needed to bother about the information they shared with us. We are in the
                                    market and providing our services for a longer period; ensuring the safety of customers&#39; details.
                                    We observe strict practices to ensure that your information is highly confidential and is not
                                    passed on to anyone.</p>
                            </h5>


                        </div>


                    </Col>

                    <Col md={6}>
                        <img src={Choose} className="img-bg" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Section1