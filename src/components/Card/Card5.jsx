import React from 'react'
import OurEssayWriters from '../../Pages/sections/OurEssayWriters'
import Avatar from '../../assets/images/OurEssayWriter/Avatar.png'
import Avatar1 from '../../assets/images/OurEssayWriter/Avatar1.png'
import Avatar2 from '../../assets/images/OurEssayWriter/Avatar2.png'
import Avatar3 from '../../assets/images/OurEssayWriter/Avatar3.png'
import RatingStar from '../../components/RatingStar/RatingStar';
import Group1 from '../../assets/images/OurEssayWriter/Group1.png'
import Group2 from '../../assets/images/OurEssayWriter/Group2.png'
import Group3 from '../../assets/images/OurEssayWriter/Group3.png'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Line from '../../assets/images/Line.png'

const Card5 = () => {
    return (
        <>
            <Container className='py-5' fluid>
                <Row className='justify-content-md-center'>
                    <Col md={6} className="">
                        <h1 className='text-white text-center fw-bolder'>
                            Our Essay
                            <span>
                                <img src={Line} className="layer-img-6" />
                            </span>
                            <span className='positions-6'>Writer</span>
                        </h1>
                        <p className='text-white text-center texted'>Lorem ipsum dolor sit amet,  elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua.
                            Quis ipsum suspendisse ultrices gravida.
                            Risus commodo viverra maecenas accumsan.
                            lacus vel facilisis.</p>
                    </Col>
                </Row>
                <Row>


                    <OurEssayWriters
                        img={Avatar}
                        name="Hannah"
                        rating="4.8"
                        review="126 reviews"
                        img1={Group1}
                        img2={Group2}
                        img3={Group3}
                        heading1="Finish Orders:"
                        heading2="Success Rate:"
                        heading3="Competence"
                        text1="1482"
                        text2="1482"
                        paragraph="English, Literature, Writing Studies, Philosophy,Communication"
                    />

                    <OurEssayWriters
                        img={Avatar}
                        name="Hannah"
                        rating="4.8"
                        review="126 reviews"
                        img1={Group1}
                        img2={Group2}
                        img3={Group3}
                        heading1="Finish Orders:"
                        heading2="Success Rate:"
                        heading3="Competence"
                        text1="1482"
                        text2="1482"
                        paragraph="English, Literature, Writing Studies, Philosophy,Communication"
                    />
                </Row>
            </Container>
        </>

    )
}

export default Card5
