import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Featured from '../../assets/images/OurFeatured/featured.png'
import featureLogo from '../../assets/images/OurFeatured/featureLogo.png'
import featured1 from '../../assets/images/OurFeatured/featured1.png'
import featuredLogo1 from '../../assets/images/featuredLogo.png'
import featuredLogo2 from '../../assets/images/FeaturedLogos.png'

import company2 from '../../assets/images/OurFeatured/company2.png'
import featured2 from '../../assets/images/OurFeatured/featured2Logo.png'

const OurFeatured = () => {
  return (
    <>
    <Container className='py-5'>
        <h5 className='text-center fw-bold'>Our Featured</h5>
        <Row className='justify-content-center'>
            <Col md={6}>
                {/* <img src={Featured} className="img-featured img-fluid" /> */}
                <img src={featureLogo} className="img-3 mt-3" />
            </Col>

            <Col md={6}>
                {/* <img src={Featured} className="img-featured img-fluid" /> */}
                <img src={featured1} className="img-3 mt-3" />
            </Col>

            <Col md={6}>
                {/* <img src={Featured} className="img-featured img-fluid" /> */}
                <img src={featuredLogo1} className="img-3 mt-3" />
            </Col>

            <Col md={6}>
                {/* <img src={Featured} className="img-featured img-fluid" /> */}
                <img src={featuredLogo2} className="img-3 mt-3" />
            </Col>
        </Row>

    </Container>
       
    </>
  )
}

export default OurFeatured
