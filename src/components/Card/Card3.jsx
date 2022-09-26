import React, { useState } from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'
import Group6 from '../../assets/images/Subject/Group6.png'
import Group7 from '../../assets/images/Subject/Group7.png'
import Group8 from '../../assets/images/Subject/Group8.png'
import Group9 from '../../assets/images/Subject/Group9.png'

const Card3 = () => {
    const [changeBacgroundColor, setChangeBackgroundColor] = useState(false)

    const handleOnChange = () => {
        setChangeBackgroundColor(!changeBacgroundColor)
    }
  return (
    <>
            <Col md={2} className="mt-2 cols-mds-2">
                <Card onClick={handleOnChange} className={changeBacgroundColor ? 'card-active-1' : 'maroon-color  border-0 card-1'}>
                    <div className='d-flex flex-row align-items-center'>
                        <Card.Img variant="top" src={Group9} className="card-img" />
                        <Card.Body>
                            <Card.Title className='title-text'>Business <br /> Management </Card.Title>
                        </Card.Body>
                    </div>
                </Card>
            </Col>
    </>
  )
}

export default Card3
