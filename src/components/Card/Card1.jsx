import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap'

const Card1 = ({ title, description, img }) => {
    return (
        <>
                <Col md={6} sm={6} lg={4}  className="mt-4 cols">
                    <Card border="light" className="text-center card-transistions p-3">
                        <div className='d-flex flex-row justify-content-center'>
                            <img src={img} className="img-h" />
                        </div>
                        <Card.Body >
                            <Card.Title className='fw-bold'>{title}</Card.Title>
                            <Card.Text className='font-style our_services'>
                                {description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            

        </>
    )
}

export default Card1