import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Card2 from '../../components/Card/Card2'
import Card3 from '../../components/Card/Card3'
import Group1 from '../../assets/images/Subject/Group1.png'
import Group2 from '../../assets/images/Subject/Group2.png'
import Group3 from '../../assets/images/Subject/Group3.png'
import Group4 from '../../assets/images/Subject/Group4.png'
import Group5 from '../../assets/images/Subject/Group5.png'
import Group6 from '../../assets/images/Subject/Group6.png'
import Group7 from '../../assets/images/Subject/Group7.png'
import Group8 from '../../assets/images/Subject/Group8.png'
import Group9 from '../../assets/images/Subject/Group9.png'
import Line from '../../assets/images/Line.png'


const Subject = () => {
    return (
        <>
            <section>
                <section id="neon-img">
                    <Container className='py-5' >
                        <Row className='justify-content-md-center '>
                            <Col md={6} className="txt">
                                <h1 className='text-center fw-bolder'>
                                    Subject Specialist
                                    <span>
                                        <img src={Line} className="layer-img-5" />
                                    </span>
                                    <span className='positions-5'>Writers</span>
                                </h1>
                                <p className='text-center texted'>We understand and cater to the needs of every domain! Our proficient writers are specialized in every field from Nursing to Finance. In any subject or field, you'll get tailor-made writings </p>
                            </Col>
                        </Row>

                        <Row className='justify-content-md-center  mt-3'>
                            <Card2 title="Marketing" img={Group1} />
                            <Card2 title="Law" img={Group2} />
                            <Card2 title="Finance" img={Group3} />
                            <Card2 title="IT" img={Group4} />
                            <Card2 title="Accounting" img={Group5} />
                        </Row>

                        <Row className='justify-content-md-center mt-3'>
                            <Card2 title="Economics" img={Group6} />
                            <Card2 title="Nursing" img={Group7} />
                            <Card2 title="Supply" img={Group8} />
                            <Card3 />
                        </Row>

                        <Row className='justify-content-md-center mt-3'>
                            <Card2 title="Marketing" img={Group1} />
                            <Card2 title="Law" img={Group2} />
                            <Card2 title="Finance" img={Group3} />
                            <Card2 title="IT" img={Group4} />
                            <Card2 title="Accounting" img={Group5} />
                        </Row>

                        <Row className='justify-content-md-center mt-3'>
                            <Card2 title="Marketing" img={Group1} />
                            <Card2 title="Law" img={Group2} />
                            <Card2 title="Finance" img={Group3} />
                            <Card2 title="IT" img={Group4} />
                        </Row>

                        <Row className='justify-content-md-center mt-3'>
                            <Card2 title="Marketing" img={Group1} />
                            <Card2 title="Law" img={Group2} />
                            <Card2 title="Finance" img={Group3} />
                            <Card2 title="IT" img={Group4} />
                            <Card2 title="Accounting" img={Group5} />
                        </Row>
                    </Container>
                </section>
            </section>
        </>
    )
}

export default Subject
