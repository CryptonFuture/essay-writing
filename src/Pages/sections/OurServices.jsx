import React from 'react'
import Line from '../../assets/images/Line.png'
import Card1 from '../../components/Card/Card1'
import Group1 from '../../assets/images/services/Group1.png'
import Group2 from '../../assets/images/services/Group2.png'
import Group3 from '../../assets/images/services/Group3.png'
import Group4 from '../../assets/images/services/Group4.png'
import Group5 from '../../assets/images/services/Group5.png'
import Group6 from '../../assets/images/services/Group6.png'

import { Container, Row, Col } from 'react-bootstrap'

const OurServices = () => {
  return (
    <section id="imgs-hero">
      <Container>
        <Row className='justify-content-center dolor'>
          <div className='mt-5 text-center'>
            <h1 className='fw-bold services_span'>Our Unmatched Top-
              Quality Services to our
              Clients

            </h1>
          </div>
          <Card1 title="College Essay Writing" description="Our proficient writers can help you in providing flawless college essay writing up to your
requirements" img={Group1} />
          <Card1 title="Assignment Writing" description="Now assignment writing is no more a nightmare! You will get assistance from scratch to
fulfill your assignment writing needs" img={Group2} />
          <Card1 title="Thesis Writing" description="Worried about the thesis writing? No more worries now, you will get your thesis writing
done just your fingertips" img={Group3} />
          <Card1 title="Dissertation Writing" description="Stuck badly to write a dissertation? Get help with us, as our writers have a solution for
all your dissertation problems" img={Group4} />
          <Card1 title="Homework Writing" description="Homework writing has become easy now with our high-quality and low-price services.
Order now and get the best!" img={Group5} />
          <Card1 title="Editing and Proofreading" description="Feeling burdensome while formatting your assignments? Relax now as the best editors
and proofreaders are here to rescue you!" img={Group6} />
        </Row>

      </Container>
    </section>
  )
}

export default OurServices