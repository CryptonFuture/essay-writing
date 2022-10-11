import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Navbar from '../../../components/Navbar/Navbar'
import Foot from '../../sections/Foot'
import Footer from '../../sections/Footer'
import Footers from '../../sections/Footers'

const MoneyBackGuarantee = () => {
    return (
        <>
            <Navbar />
            <section id='MoneyBackGuarantee'>
                <Container className='py-5 p-5 mt-5'>
                    <Row className='justify-content-center'>
                        <Col md={6}>
                            <h1 className='text-center fw-bold mt-5'>Money Back Guarantee</h1>
                        </Col>
                    </Row>
                </Container>

            </section>

            <section id="money-back-guarantee">
                <Container className='py-5 p-5 mt-5'>
                    <Row className='justify-content-center'>
                        <Col md={6}>
                            <h2 className='text-center fw-bold'>Money Back Guarantee</h2>
                            <p className='text-center money-back'>Dissertation Proposal provides a money-back guarantee feature to our customers so that they can appeal for reimbursement. If the reimbursement request can't be placed in any of the scenarios mentioned below, the customer must notify the customer support team time for the discussion of the matter, and the application will be processed.</p>
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col md={4}>
                            <Card className='border-0 shadow-sm'>
                                <Card.Body className='p-4'>
                                    <Card.Title className='fw-bold'>When Customer Orders are Cancelled</Card.Title>
                                    <Card.Text>In case of order cancellation by a customer, the following guidelines are to be considered:
                                        <ul>
                                            <li> Before order cancellation, if no writer has been assigned. 100% remuneration is provided to the customer.</li>
                                            <li> After a writer has been assigned but the still customer chooses to revoke the order, the amount remunerated can't be exceeded 70% to cater to the writers' efforts.</li>
                                            <li> If half the deadline has passed and the customer decides to cancel the order after a writer has been assigned, he's authorized to get a 50% reimbursement.</li>
                                            <li> In case of order cancellation, all copyrights go back to the company. The customer can't use any of the drafts/products provided before the cancellation of the order.</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className='border-0 shadow-sm'>
                                <Card.Body className='p-4'>
                                    <Card.Title className='fw-bold'>When Delay in Delivery</Card.Title>
                                    <Card.Text>A time delivery difference compensation is calculated and is entitled to the customer depending on the initial deadline and time of delay. In case of late product delivery, the amount recompensate for long-term orders, that is 14 days and more equals 7%.
                                        The customer can't request compensation for delay if:
                                        <ul>
                                            <li> If the customer's actions were the actual reason for the delay, this involves a delay in payment, or delay in providing essential sources/information that is mainly required from the customers to complete an order.</li>
                                            <li> If the delay arises of technical difficulties of the customer's internet provider or the result of a browser or a system malfunctions.</li>
                                            <li> The customer is allowed to extend the deadline, which means he/she is provided additional time to complete the order without compensation.</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className='border-0 shadow-sm'>
                                <Card.Body className='p-4'>
                                    <Card.Title className='fw-bold'>Poor Quality Claims</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>In the case of customer dissatisfaction with the product and requests for compensation, an investigation will be led by the Quality Assurance Team. Detailed feedback is required from the customer indicating a mismatch of the instructions of the order that is not followed properly.</li>

                                        </ul>
                                            IMPORTANT NOTE: Compensation won't exceed 70% for the bad quality claim case, and the order was forwarded for revision purposes. This is because revision is the process of reviewing/editing/modifying a service or product. This clearly shows the paper is partially confirmed by the customer, once a revision request is filed against an order.
                                        <ul>
                                            <li> If the paper isn't ready for submission and it's for reference purposes only, this scenario will be considered invalid or non-acceptable for compensation</li>
                                            <li> In case of an unoriginal paper claim, a Turnitin.com report is required. Our Quality Assurance(QA) Team won't consider any other report for conducting an investigation other than this site.</li>
                                            <li> There's no investigation conducted if the compensation is requested for editing/proofreading or formatting orders.</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col md={4}>
                            <Card className='border-0 shadow-sm'>
                                <Card.Body className='p-4'>
                                    <Card.Title className='fw-bold'>Customer Order Preferences</Card.Title>
                                    <Card.Text>
                                        <ul className='bullet-points'>
                                            <li> The customer can avail of this opportunity to select his/her writer to work on the order by stipulating his/her ID number in the preferred/selected Writer ID field on the order form. So, the customer acknowledges that there's no full guarantee the specific writer is held responsible to work on his/her order. However, customers can rely on the company to select a writer for himself/herself, as the company reserves the right to assign the best available specialist in the order field. In such a scenario, match the preferred writer's performance level. The preferred writer feature cost can only be funded back to the customer's credit balance and is nonrefundable.</li>
                                            <li> No compensation will be granted for a non-applied discount. The Customer can only track the order accuracy, inclusive of the discount field.  For discount availability, the customer may take the support team's assistance.</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className='border-0 shadow-sm'>
                                <Card.Body className='p-4'>
                                    <Card.Title className='fw-bold'>Refund Procedure</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>The customer must contact the support team within two months after the order completion if he/she wants to submit a compensation request. The billing department will contact the customer over the phone/e-mail after 5 days of reviewing the request. Our representative partakes to request any additional information required from the customer to process the claims correctly.</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className='border-0 shadow-sm'>
                                <Card.Body className='p-4'>
                                    <Card.Title className='fw-bold'>Refund Processing</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li> The company will only process any received refund confirmation of customers within 5 business days from the order confirmation date. Also, please note Bank transfer fees, transfer peculiarities, or any possible delays that occur due to bank issues. The company isn't held responsible for these issues.</li>
                                            <li> The process of refund transaction may cost £10 and sometimes more. It can't process small transaction amounts, because it barely covers transaction fees both for the customer and the company. However, the amount will be added to the customer credit balance to use in future payments for the orders.</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Foot />
            <Footer />
            <Footers />
        </>
    )
}

export default MoneyBackGuarantee