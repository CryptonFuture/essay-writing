import React, { useState } from 'react'
import { Container, Col, Row, Accordion } from 'react-bootstrap'
import CalculatePrice from '../../../components/Card/CalculatePrice'
import PriceCalculate from '../../../components/Card/PriceCalculate'
import ServiceForm from '../../../components/Card/ServiceForm'
import { Accordian, Accordian1, Accordian2, Accordian5, Accordian6 } from '../../../Item/Accordion'

const Section1 = () => {
    return (
        <>
            <section id='section-back'>
                <section id="section-back-1">
                    <Container className='py-5'>

                        <Row>
                            <Col md={7} className="cols-12">
                                <h3 className='fw-bold'>Queries related to Our Orders</h3>
                                <Accordion className='mt-4'>
                                    <div className='mt-3'>
                                        <Accordion.Item eventKey="0" className='accordion shadow-sm'>
                                            <Accordion.Header><span className='fw-bolder'>What's the process of ordering a paper from a dissertation proposal?</span></Accordion.Header>
                                            <Accordion.Body>
                                                <span>Our ordering process is quite easy and simple to follow:</span>

                                                <ol>
                                                    <li>
                                                        How to Order your assignment <br />
                                                        <strong>Step1: </strong> <p>Open our website, and fill out the order form on the website. Mention all necessary details of your paper, and make sure to select and briefly describe the requirements. Make sure to upload all the materials also that need to be added to your paper.</p><br />
                                                        <strong>Step2: </strong> <p>Open our website, and fill out the order form on the website. Mention all necessary details of your paper, and make sure to select and briefly describe the requirements. Make sure to upload all the materials also that need to be added to your paper.</p><br />
                                                        <strong>Step3: </strong> <p>Open our website, and fill out the order form on the website. Mention all necessary details of your paper, and make sure to select and briefly describe the requirements. Make sure to upload all the materials also that need to be added to your paper.</p><br />
                                                        <strong>Step4: </strong> <p>Open our website, and fill out the order form on the website. Mention all necessary details of your paper, and make sure to select and briefly describe the requirements. Make sure to upload all the materials also that need to be added to your paper.</p><br />
                                                    </li>

                                                    <li>
                                                        Give us time to further proceed <br />
                                                        We will start the writing process, once your order is marked as paid. In the dissertation Proposal, the Customer Support department will be involved fully in following up on your order. We will notify you through an e-mail, as soon as an expert is assigned for your work. Customers can have access to their account at any day or time and connect with their assigned expert if in the case of any assistance and further clarifications are needed.
                                                    </li>

                                                    <li>
                                                        Receive your writing order<br />
                                                        Within the specified time, your final paper will be delivered and uploaded to your account. We'll update you through an e-mail, and you can download your paper to your device at any time. Feel free to reach us if you want a free revision within the next 14 days after your order delivery or if you need any modifications in your paper.
                                                    </li>

                                                    <li>
                                                        Rate your paper<br />
                                                        Want to rate us? Do rate us in the My feedback section of your account. Your feedback matters to us!
                                                    </li>
                                                </ol>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                </Accordion>

                                <Accordion className='mt-4'>
                                    <div className='mt-3'>
                                        <Accordion.Item eventKey="1" className='accordion shadow-sm'>
                                            <Accordion.Header><span className='fw-bolder'>What kind of papers do dissertation proposals are providing?</span></Accordion.Header>
                                            <Accordion.Body>
                                                <p>Our diversified team of experts can write different paper styles or types on various subjects and topics as per the client's requirements</p>
                                                <span>The various types of paper that we are currently providing:</span>

                                                <ul>
                                                    <li>Essay</li>
                                                    <li>Research papers & Terms</li>
                                                    <li> Dissertation / Thesis (full / chapter wise)</li>
                                                    <li>Capstone proposals/project</li>
                                                    <li>PowerPoint(PPT) presentation</li>
                                                    <li>Lab report</li>
                                                    <li> Case study</li>
                                                    <li>Book reviews/reports</li>
                                                    <li>Article & article analysis/ critique</li>
                                                    <li> Coursework</li>
                                                    <li>Summary</li>
                                                    <li>Multiple-choice test</li>
                                                    <li> Admission essays / personal statement</li>
                                                    <li> Annotated bibliography</li>
                                                </ul>
                                                <p>Feel free to reach our Customer Support Team, if still you can't find your type of assignment on the order form. We will happy to assist you on how to order it. We are also available to rewrite your paper from scratch or can work to improve the draft of your paper.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                </Accordion>

                                <Accordion className='mt-4'>
                                    <div className='mt-3'>
                                        <Accordion.Item eventKey="1" className='accordion shadow-sm'>
                                            <Accordion.Header><span className='fw-bolder'>Is using your writing services legal?</span></Accordion.Header>
                                            <Accordion.Body>
                                                <p>Dissertation proposal is a trustable company having years of experience in providing academic paper writing services. Partnering with a legitimate payment platform, as we care for our customers. Your cooperation and support with us are fully legal, safe & secure.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                </Accordion>

                                <Accordion className='mt-4'>
                                    <div className='mt-3'>
                                        <Accordion.Item eventKey="1" className='accordion shadow-sm'>
                                            <Accordion.Header><span className='fw-bolder'>Do you claim to deliver your papers timely?</span></Accordion.Header>
                                            <Accordion.Body>
                                                <p>To meet our client's expectations, we deal in timely delivery, staying among the core guarantees from dissertation proposal as our services are client-centric. We always deliver papers timely, as we understand that our product is written mainly for the following submission.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                </Accordion>

                                <Accordion className='mt-4'>
                                    <div className='mt-3'>
                                        <Accordion.Item eventKey="1" className='accordion shadow-sm'>
                                            <Accordion.Header><span className='fw-bolder'>What happens next if in case I ain't happy with the paper?</span></Accordion.Header>
                                            <Accordion.Body>
                                                <p>You can avail the right of revision of your paper as per the request within 14 days after its delivery. You can provide the instructions on what has to be changed or further included we will transform your paper as per your requirements. We aim to provide you with a flawless piece of writing to ensure your satisfaction with your order.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                </Accordion>

                                <Accordion className='mt-4'>
                                    <div className='mt-3'>
                                        <Accordion.Item eventKey="1" className='accordion shadow-sm'>
                                            <Accordion.Header><span className='fw-bolder'>Can I see my paper first and pay after seeing it?</span></Accordion.Header>
                                            <Accordion.Body>
                                                <p>We are prepaid online service providers, we deal with pre-payment conditions too with our experts. To start the writing process, we should have to receive the whole payment in advance.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                </Accordion>

                                <Accordion className='mt-4'>
                                    <div className='mt-3'>
                                        <Accordion.Item eventKey="1" className='accordion shadow-sm'>
                                            <Accordion.Header><span className='fw-bolder'>Where dissertation proposal is located?</span></Accordion.Header>
                                            <Accordion.Body>
                                                <p>Dissertation Proposal is a Cyprus-based company. We have dedicated experts and well-experienced freelancers with a degree in their relevant domains.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                </Accordion>


                                <h3 className='fw-bold mt-5'>Queries about Our Writers</h3>
                                <Accordion className='mt-4'>
                                    <div className='mt-3'>
                                        <Accordion.Item eventKey="" className='accordion shadow-sm'>
                                            <Accordion.Header><span className='fw-bolder'>Who are your writing experts?</span></Accordion.Header>
                                            <Accordion.Body>
                                                We have a team of experts who are well-experienced writers and competent freelancers, who have a degree in their related subject areas. Mostly, we have native speakers from the UK, USA, AU, and CA.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                </Accordion>

                                <Accordion className='mt-4'>
                                    <div className='mt-3'>
                                        <Accordion.Item eventKey="" className='accordion shadow-sm'>
                                            <Accordion.Header><span className='fw-bolder'>Will I get a chance to talk to my specialist who is assigned to work on my task?</span></Accordion.Header>
                                            <Accordion.Body>
                                                You can connect with your writer anytime, use your messenger feature right in your account to contact your writer. Your recommendations are always welcomed by us, they are also available for your further assistance and questions if you have any.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                </Accordion>

                                <Accordion className='mt-4'>
                                    <div className='mt-3'>
                                        <Accordion.Item eventKey="" className='accordion shadow-sm'>
                                            <Accordion.Header><span className='fw-bolder'>) Do you have native speakers in your expert team?</span></Accordion.Header>
                                            <Accordion.Body>
                                                Yes, absolutely. We have a wide range of native speakers and we are offering good terms of collaboration to specialists, that are from English-speaking countries.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                </Accordion>

                                <h3 className='fw-bold mt-5'>Questions related to our guarantees</h3>
                                <Accordion className='mt-4'>

                                    <div className='mt-3'>
                                        <Accordion.Item eventKey="" className='accordion shadow-sm'>
                                            <Accordion.Header><span className='fw-bolder'>Do a dissertation proposal guarantee me a grade?</span></Accordion.Header>
                                            <Accordion.Body>
                                                We don't guarantee you a specific grade. However, we do guarantee our writing and quality paper, while following all your instructions thoroughly. We have experts who have very vast experience in academic writing, they know how to find the best possible approach to every task that's assigned to them.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>

                                </Accordion>

                                <Accordion className='mt-4'>

                                    <div className='mt-3'>
                                        <Accordion.Item eventKey="" className='accordion shadow-sm'>
                                            <Accordion.Header><span className='fw-bolder'>Can I trust your services? My previous experience with other service providers wasn't satisfactory. Is the dissertation proposal better than others?</span></Accordion.Header>
                                            <Accordion.Body>
                                                Our company guarantees timely delivery of your order as we always stick to our promises. Also, we are providing you with an opportunity to follow up on your orders at any time, just connect to your assigned specialist directly or through our customer support team that's available round-the-clock to assist you. By delivering and ensuring quality products and services we are more focused on earning our customer's loyalty by delivering them quality services.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>

                                </Accordion>

                                <Accordion className='mt-4'>

                                    <div className='mt-3'>
                                        <Accordion.Item eventKey="" className='accordion shadow-sm'>
                                            <Accordion.Header><span className='fw-bolder'> Is your services confidential</span></Accordion.Header>
                                            <Accordion.Body>
                                                We are online writing service providers and our services are secure and confidential to use. Your details can't be shared with any third party, even our experts who will only get to know your Customer ID. Your contact information and details will only be shared with our customer Support department, for the sake of communication with you when it's needed only.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>

                                </Accordion>

                                <Accordion className='mt-4'>

                                    <div className='mt-3'>
                                        <Accordion.Item eventKey="" className='accordion shadow-sm'>
                                            <Accordion.Header><span className='fw-bolder'>Does the dissertation proposal guarantee that my paper will be original?</span></Accordion.Header>
                                            <Accordion.Body>
                                                We guarantee to deliver your original order on time. You will also get a chance to make a follow-up on your order at every stage. If in case of ambiguity, you can connect to your expert any time or to our Customer Support Team which is available round-the-clock for clarification.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>

                                </Accordion>

                                <Accordion className='mt-4'>

                                    <div className='mt-3'>
                                        <Accordion.Item eventKey="" className='accordion shadow-sm'>
                                            <Accordion.Header><span className='fw-bolder'>Is it safe to use your writing services? By any chance, does anyone knows that I've ordered my paper?</span></Accordion.Header>
                                            <Accordion.Body>
                                                Your information remains private, there is no third-party involvement not even a chance to get to know you have ordered a paper from us. Even your details can't be shared with anyone, not even with your expert who will get to know your customer ID only.</Accordion.Body>
                                        </Accordion.Item>
                                    </div>

                                </Accordion>

                                <Accordion className='mt-4'>

                                    <div className='mt-3'>
                                        <Accordion.Item eventKey="" className='accordion shadow-sm'>
                                            <Accordion.Header><span className='fw-bolder'>Is the procedure of the payment secure?</span></Accordion.Header>
                                            <Accordion.Body>
                                            We are partnering with a reputable payment platform to process your all payment transactions. Your all personal and financial information is safe and encrypted on a secure website.</Accordion.Body>
                                        </Accordion.Item>
                                    </div>

                                </Accordion>

                              
                               
                            </Col>

                            <Col md={5} className="col-wd-5">
                                {/* <CalculatePrice />
                                <PriceCalculate /> */}
                                <ServiceForm />
                            </Col>
                        </Row>
                    </Container>

                </section>
            </section>
        </>
    )
}

export default Section1
