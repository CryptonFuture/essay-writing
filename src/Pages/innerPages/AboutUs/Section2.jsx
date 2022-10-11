import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'

const Section2 = () => {
  return (
    <>
      <section id='section2'>
        <section id='section3'>
          <Container className=" cols-section">
            <Row className='justify-content-center align-items-center'>
              <Col md={8} className='section-font '>
                <h1 className='text-center'>WHY CHOOSE US?</h1>
                <p className='text-center'>A question might have aroused in your mind; why should you hire us? We have qualified expert writers on our team who are available round-the-clock to assist you. Let’s have a look at more of our unique features:

                  Our expert writers strive to deliver the quality content to you within the stipulated
                  deadline, irrespective of the type of order.</p>

                {/* <p className='text-center'></p> */}
                {/* <ul>
                  <li>Our expert writers strive to deliver quality content to you within the stipulated deadline, irrespective of the type of order.</li>
                  <li>We have designed our pricing structure right according to the needs of the customers to ensure quality deliverance at budget-friendly prices.</li>
                  <li>If you’re not satisfied with the quality of the content, avail yourself of the money-back guarantee.</li>
                </ul> */}
                <div className='d-flex flex-row justify-content-center'>
                  <Button className="get-started ms-3">
                    <span> Order Now</span>
                  </Button>
                </div>

              </Col>
            </Row>
          </Container>
        </section>
      </section>
    </>
  )
}

export default Section2
