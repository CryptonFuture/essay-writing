import React from 'react'
import Section1 from '../../Pages/innerPages/Guarantee/Section1'
import Group1 from '../../assets/images/Guarantee/Group1.png'
import Group2 from '../../assets/images/Guarantee/Group2.png'
import Group3 from '../../assets/images/Guarantee/Group3.png'
import Group4 from '../../assets/images/Guarantee/Group4.png'
import Group5 from '../../assets/images/Guarantee/Group5.png'
import Group6 from '../../assets/images/Guarantee/Group6.png'
import Group7 from '../../assets/images/Guarantee/Group7.png'
import Group8 from '../../assets/images/Guarantee/Group8.png'
import Group9 from '../../assets/images/Guarantee/Group9.png'
import { Container, Row, Col } from 'react-bootstrap'

const Card4 = () => {
  return (
    <section id="guranted">
      <Container className='py-5'>
        <Row className='justify-content-center'>
          <Col md={6} className="headings-1">
            <h1 className='text-center fw-bold'>Looking for the best
              quality essay, experienced </h1>
          </Col>
        </Row>
        <Row className='justify-content-center mt-3'>
          <Section1 img={Group1} title="Guarantee 100% Refund" description="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Section1 img={Group2} title="Unlimited Free Revision" description="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Section1 img={Group3} title="Plagiarism-Free" description="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Section1 img={Group4} title="Your Data is 100% Safe" description="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Section1 img={Group5} title="On-Time Delivery" description="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Section1 img={Group6} title="Cheapest in the Market" description="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Section1 img={Group7} title="Support Available 24/7 " description="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Section1 img={Group8} title="15% OFF on Your First Order" description="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Section1 img={Group9} title="High-Quality Papers" description="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </Row>
      </Container>
    </section>
  )
}

export default Card4
