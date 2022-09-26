import React, { useState } from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'

const Card2 = ({ title, img }) => {
    const [changeBacgroundColor, setChangeBackgroundColor] = useState(false)

    const handleOnChange = () => {
        setChangeBackgroundColor(!changeBacgroundColor)
    }
    return (
        <>
            <Col md={2} className="mt-2 cols-mds-2">
                <Card  border="light" onClick={handleOnChange} className={changeBacgroundColor ? 'card-active' : 'card-1'}>
                    <div className='d-flex flex-row align-items-center'>
                        <Card.Img variant="top" src={img} className="card-img" />
                        <Card.Body>
                            <Card.Title className='title-text mt-2'>{title}</Card.Title>
                        </Card.Body>
                    </div>

                </Card>
            </Col>

           
        </>
    )
}

export default Card2
