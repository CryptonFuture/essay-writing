import React from 'react'
import Breadcrumbs from '../../../components/Breadcrumb/Breadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import CalculatePrice from '../../../components/Card/CalculatePrice'

const section = () => {
    return (
        <>
            <section id="privacy">
                <Container className='py-5 py-mg'>
                    <Row>
                        <Col md={6} className='col-ms'>
                            <Breadcrumbs />
                            <h1 className='fw-bold mt-3'>Privacy policy</h1>
                            <p>We follow a proper privacy policy to ensure that our customer&#39;s information is safe and secure and is in the right hands.</p>
                            <ul>
                               <li> The information that you provided to us such as your name, your contact number, as well as your email ID is the primary</li>
                               <li> requirements that we need from you to process your order.</li>
                               <li> Your details are confidential with us and are not shared with anyone</li>
                               <li> To ensure our customer&#39;s safety, every order is provided with an ID number</li>
                               <li> We care about our customer&#39;s privacy, and for this, we follow a strict check &amp; balance system to control illegal access to our</li>
                               <li> customer information.</li>
                               <li> To make the information secure and confidential, contact between the writer and the customer directly is restricted by us.</li>
                            </ul>
                        </Col>

                        {/* <Col md={6}>
                            <CalculatePrice />
                        </Col> */}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default section
