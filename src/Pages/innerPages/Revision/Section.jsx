import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Breadcrumbs from '../../../components/Breadcrumb/Breadcrumb'
import CalculatePrice from '../../../components/Card/CalculatePrice'

const Section = () => {
  return (
    <>
         <section id='revision'>
                <Container className='py-5 py-mg'>
                    <Row>
                        <Col md={6} className='col-ms'>
                            <Breadcrumbs />
                            <h1 className='fw-bold'>Revision policy</h1>
                            <p>In certain cases, customer might feel the need to alter to change certain things with a delivered paper. At EssayUSA.com we understand this quite well. Hence we provide the best possible academic assistance in revising a paper and this is done at no cost based on the simple conditions below:</p>

                            <p><strong> Submission:</strong> A request for revision must be initiated via the use of the “request revision button” on your personal order page.</p>
                            <p><strong>Deadline: </strong> It is possible to request for a revision at any point in time before you approve an order sent to you, however please note that only a 10 day period is allowed for a revision request after the order has been approved by you.  If Your order exceeds 20 pages, You can request a free revision within 14 days after approval.  A stipulated but minimal fee might be charged if and only if the original paper requires a substantial revision. This fee will be based on the length and complexity on the desired revision. Our operators will be on board to aid calculate a fee estimate.</p>

                            <h5 className='fw-bold'>Request for revision after the 10 day period of order approval</h5>
                            <p>A request for revision made after the 10 day period of order approval will require that a new order be placed via the use of the edit/rewriting service module. However in keeping to our excellent customer service approach, EssayUSA.com is able to extend the deadline for revisions if the initial deadline allows such an extension.</p>

                            <h5 className='fw-bold'>Revision Major Service</h5>
                            <p>In case the revision request comes with instructions that are different from the initial instructions, including the change of written instructions that were initially provided or the provision of subjectivity-based revision instructions, including, but not limited to, a change in the vision or perspective applied in the paper, a different course of research, a discontent with the content without a specific, solid rationale for the same, and if the implementation of such amendments to the paper would constitute from approximately 60% to no more than 100% of wordcount or effort needed to complete the assignment from scratch, we offer you the paid-for “Revision Major” service.</p>

                            <p>   The “Revision Major” service is offered at a fixed price of 60% of your selected wordcount and your selected revision deadline in case the paper under revision is used and a new paper to be written from scratch is ordered.</p>

                            <p>  This service serves a simple purpose: it aims to seamlessly enable you to get your new requirements to be implemented without paying for a whole new paper and allows to compensate the writer for the work done as they completed the original paper under the initial instructions and are requested to include new ones. </p>
                        </Col>

                        <Col md={6}>
                            <CalculatePrice />
                        </Col>
                    </Row>
                </Container>
            </section>
    </>
  )
}

export default Section