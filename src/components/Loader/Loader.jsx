import React, { useRef, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Logo from '../../assets/images/Logo/Logo1.png'

const Loader = () => {


    return (
        <>

            <section id="loader">
                <Container className='py-5'>
                    <Row className='justify-content-center'>
                        <Col md={6}>
                            <img src={Logo} className="img-logos" />
                            {/* <div className="text-center position-spinner">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div> */}
                            {/* <div className="spinner-grow position-spinner" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div> */}
                            <div class="d-flex justify-content-center position-spinner">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>

        </>
    )
}

export default Loader
