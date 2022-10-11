import React, { useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Group1 from '../../../assets/images/Guarantee/Group1.png'
import Group2 from '../../../assets/images/Guarantee/Group2.png'
import Group3 from '../../../assets/images/Guarantee/Group3.png'
import Group4 from '../../../assets/images/Guarantee/Group4.png'
import Group5 from '../../../assets/images/Guarantee/Group5.png'
import Group6 from '../../../assets/images/Guarantee/Group6.png'
import Group7 from '../../../assets/images/Guarantee/Group7.png'
import Group8 from '../../../assets/images/Guarantee/Group8.png'
import Group9 from '../../../assets/images/Guarantee/Group9.png'
import { Cards } from '../../../Item/Card'

const Section1 = ({ img, title, description }) => {
    const [cards, setCard] = useState(Cards)

    return (
        <>
            <Col md={4} className="mt-4">
                <Card className='border-0 shadow card-transistions p-3'>
                    <Card.Body>
                        <Card.Title><img src={img} className="img-gurantee" /> <span className='fw-bold ms-2 fonted'>{title}</span></Card.Title>
                        <Card.Text>
                            <p className='lorem-text '>{description} </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </>
    )
}

export default Section1
