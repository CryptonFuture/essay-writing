import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Group5 from '../../../assets/images/ReferFriend/Group5.png'

const Section = () => {
    return (
        <>
            <Container className='py-5'>
                <Row className='align-items-center'>
                    <Col md={6} className="loot">
                        <h1 className='fw-bold'>Loot money with
                            Studycrumb! </h1>
                        <h5 className='mt-3 fw-bold'>What is this Program About?</h5>
                        <p className='font-friend'>For each friend you refer to PapersOwl, you’ll get $35.00 on your account. You will help them with their assignments, and you can use this money on your next purchase.</p>

                        <h5 className='fw-bold mt-5'>How do I do this?</h5>
                        <p className='font-friend'>It is simple – copy the referral link in your account. Send it to your friends via any messenger or social media. You can help us make it go all over the world!</p>

                        <p className='font-friend'> As soon as a referral registers via your unique link, they get a 10% discount for the first order, so it is beneficial to everyone!</p>

                        <h5 className='fw-bold mt-5'>When will I get money?</h5>
                        <p className='font-friend'>As soon as your referral’s order is complete, you get $35.00 on your PapersOwl account. You can check the results on the Refer a Friend page.</p>

                        <p className='font-friend'> If you have any questions, please contact our clients’ support team.</p>
                    </Col>
                    <Col md={6}>
                        <img src={Group5} className="img-friend" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Section