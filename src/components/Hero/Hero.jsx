import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import backpic from '../../assets/images/backgroundpics.png'
import Layer from '../../assets/images/Layer.png'
import arrow from '../../assets/images/rightarrow.png'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Cards from '../Card/Cards';
import Rating from '../Rating/Rating';
import CardForm from '../Card/CardForm';

const Hero = () => {
  return (
    <section id='img-hero3'>
      <section id="img-hero2">

        <Container className='hero_container'>
          <Row className="align-items-center">
            <Col md={6}>
              <div className='content'>
                <h1>
                  Ph.D. dissertation
                  editing services</h1>
                <p className='font-sizes'>Get the Best and Cheapest Ph.D. dissertation
                  Editing Services in the UK Market now!</p>
                <Button className='btn'>
                  <span>Get 14 Days Free Trial</span>
                  {/* <i className="fa- fa-arrow-right paddings"></i> */}
                  <img src={arrow} alt="" className='paddings' />
                </Button>
              </div>
              <Rating />
            </Col>
            <Col md={6}>

              {/* <Cards /> */}
              <CardForm />
            </Col>
          </Row>
        </Container>
      </section>
    </section>

  )
}

export default Hero