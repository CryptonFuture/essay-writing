import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Breadcrumbs from '../../../components/Breadcrumb/Breadcrumb'
import CalculatePrice from '../../../components/Card/CalculatePrice'
import ServiceForm from '../../../components/Card/ServiceForm'

const Section = () => {
  return (
    <section id='refund'>
                <Container className='py-5 py-mg'>
                    <Row>
                        <Col md={7} className='col-ms'>
                            <Breadcrumbs />
                            <h1 className='fw-bold'>Refund policy</h1>
                            <p>Our satisfaction rate is high. More than 95% of our Customers return with consequent orders. However, sometimes things can go wrong, and in these cases, you can always refer to our Refund Policy.</p>

                            <p>  The Company strives to ensure a clear understanding of financial relations between Experts and Customers with respect to the services we provide. Therefore, the Company is held responsible for delivering the Product in a timely manner and according to the Customer requirements indicated in the Order. Should any of the Expert’s commitments in respect of Order delivery be violated, the Customer is entitled to a partial or a full reimbursement according to our Refund Policy.</p>

                            <h5 className='fw-bold'>General</h5>
                            <p>The Website is only a platform, and in no case will it be a party to any contracts made by Experts and Customers or any other service or materials provided by the Expert. The Company will in no way be responsible for monitoring any transactions between Customers and Experts.</p>

                            <p> Our Refund Policy gives you the right to request reimbursement if the given Product wasn’t performed by the Expert in accordance with the requirements set out in your Order. As our Website offers Services related to legitimate academic assistance, we want to be 100% sure that you leave fully satisfied!</p>

                            <p>  In order to make our Policy as transparent as possible, we emphasize that there are certain situations when we can offer a refund. These are:</p>

                            <p> <strong>No Expert Assigned Yet:</strong>  This is a rare situation, but sometimes it happens. The amount of the refund is always 100%.</p>

                            <p>  <strong>Late Cancellation:</strong>  The Expert was confirmed, but you decided to cancel the Order. In this case, the refund amount varies from 100% to 70% to cover the effort of the Company and the Expert in their attempt to provide you with the Product and services purchased. This applies to cases when the paper has not been uploaded yet. If the work was already completed, then the case will be checked as a Disputed Claim. Such claims are checked by our Quality Assurance department which decides the amount of refund on offer.</p>

                            <p>  <strong>Late Delivery:</strong>  The Company will refund an appropriate amount to compensate for the late delivery. The exact amount will be discussed with the Customer. In cases of Late Delivery due to the Customer’s inability to provide necessary information for order completion, no refund can be granted. That is why the best scenario is to send all information regarding the task, including any additional sources that must be used all at once when placing the order initially.</p>

                            <p>   <strong></strong>If the Order has been completed after the initial deadline passed yet the Customer still needs to use the work, they may get a partial refund.</p>

                            <p>   <strong>Disputed claims:</strong>  If the Customer is not satisfied and would like to get a refund instead, the Quality Assurance Department will conduct an investigation. The refund claim will be approved or denied based on the result of the investigation. Keep in mind that we always want our Customers to be fully satisfied. Hence, we will always do our best to treat the Customer fairly and achieve maximum Customer satisfaction.</p>

                            <p>   <strong>Accidental Duplicate Order:</strong>  In order to cancel an Order placed by mistake, you need to contact us as soon as possible. You need to clarify that the other Order is not needed, and a full refund will be processed. The Order would be treated as being valid if we did not receive any cancellation request before an Expert has been assigned. You can still cancel the Order, but one of the situations listed above will be applied.</p>

                            <p>   <strong>Two invoices received:</strong>  If you are billed twice, you need to notify us immediately, especially if Your Personal Balance didn’t change. You need to send us both receipts so we can properly address the issue and process the full refund for the extra charge. This instance happens on very rare occasions. There is no way for a Customer to be billed for any single order unless they paid for it by mistake.</p>

                            <p>  <strong>Content originality:</strong>  If there is a claim in respect of the Product’s originality, a clear report (by any reputable service) with evidence is required, or else no refund is possible.</p>

                            <h5 className='fw-bold'>You are not entitled to a refunds</h5>
                            <p><strong>You used the Product for personal purposes or as a part of another Order on the Website:</strong>  In that case, at least 70% of the contract price should be released. Yet, the sum may be modified according to the QA Department investigation. </p>

                            <p> <strong> A lower grade than what was expected is received:</strong>  Please keep in mind that we do not guarantee high grades. Our Website is a learning platform that cooperates with Customers and education Experts with the purpose of improving Customer’s educational levels. Thus, we can’t offer a refund for a claim of a failed course or a similar one because the Expert’s task is to help the Customer in accordance with the requirements set out in the Order. It is the Customer’s duty to perform educational tasks independently. </p>

                            <p>  <strong>The editing and proofreading Order did not meet your expectations:</strong>  Your task is to provide Experts with clear requirements and expectations with respect to Order to be delivered. Thus we are not responsible for errors of contextual nature or instances of content originality problems in materials provided by you to the Expert. The Customer is not entitled to a refund if the Product delivery failed due to quality issues when it is an editing or proofreading order. Moreover, any attempt to choose editing/rewriting Orders as initial instructions and pressuring Experts to produce new content will be deemed as malicious acts. ? </p>

                            <p>  <strong>The refund period has passed:</strong>  Refunds are available within six months of the original transaction date. Money can be returned to the original payment method that was used for the initial purchase. If six months have passed since the transaction date, we cannot offer you a refund.
                            </p>

                            <h5 className='fw-bold'>Refund Processing</h5>
                            <p>Once you receive the refund confirmation, the Company will process it within two business days. Please note that the Company can not be held responsible for your Bank Transfer fees, transfer anomalies, and/or possible delays occurring due to any Bank service issues.</p>

                            <h5 className='fw-bold'>Chargeback</h5>
                            <p>In the event of a chargeback by a credit card company (or similar action by another payment provider allowed by us) in connection with your purchase of the Services, you agree that we may suspend access to any and all accounts you have with us. Fees incurred as the result of chargebacks or other payment disputes brought by you, your bank, or a payment provider and disputes that require accounting or legal services shall be covered by you.</p>

                            <h5 className='fw-bold'>Expired Account</h5>
                            <p>In case your last activity on the Website as of the last payment date is for more than 180 (one hundred eighty) days, your account will be considered expired and get deleted. Along with your account or profile, all personal data processed by the Company will be erased.</p>

                            <h5 className='fw-bold'>Deletion of an account</h5>
                            <p>You may request to delete your account at any time. However, there are no refunds for cancellation. In case the Website shall suspend or terminate your account because of a breach of any of our policies, you understand and agree that you shall receive no refund or exchange for any unused Services, any content or data associated with your account, or for anything else.</p>

                            <h5 className='fw-bold'>Payment Services</h5>
                            <p>We use third-party payment services to bill you through an online payments account in lieu of directly processing your credit/debit card information. Your paid balance is safe in your account as we use an integrated iframe for checkouts from our partners-payment providers, and the Experts get paid for each confirmed Product. Correspondingly all transactions are secured as our partners-payment providers use encryption protection. We do not store your payment information on our servers.</p>

                            <h5 className='fw-bold'>Data Provided by you</h5>
                            <p>You agree and understand that billing information, which you provide to make payment for Services through the Website, namely your credit card information, is processed by our partners-payment providers only. We do not collect, store or otherwise process your billing information.</p>

                            <p> You agree that the Company will not be responsible for any failures of the third party to adequately protect such information. The processing of payments will be subject to the terms, conditions, and privacy policies of our partners-payment providers in addition to this policy.</p>

                            <p>  You acknowledge that we may change our partners-payment providers and require them to transfer your information to other service providers that encrypt your information using secure socket layer technology (SSL) or other comparable security technology.</p>

                            <h5 className='fw-bold'>Payments and Taxes</h5>
                            <p>Upon receiving payment from the Customer, the Website will hold such payment and disburse it to the applicable Expert when an ordered Product is ready (at the previously agreed price). Customers and Experts will be liable for all transaction fees on the services related to the delivery and consumption of services through our Website. Registering to become a user of the Website is free. Parties are responsible for paying all fees and applicable taxes associated with the delivery and consumption of Services through our Website. We charge Experts a commission for our Services. The Expert’s failure to pay the required fees shall be a material breach of this Policy and Terms and Conditions.</p>

                            <h5 className='fw-bold'>Payouts</h5>
                            <p>The Experts get paid for each confirmed Product by a Customer to their account on the platform. To make the payout, Experts may use our third-party payment services for secured transactions.</p>


                            <h5 className='fw-bold'>Other</h5>
                            <p>Any payments made via our Website are made solely for the purpose of consumption and delivery of educational Services between Customers and Experts. Such payments may not be made and used for any fraudulent, criminal or illegal activity as defined by the law.

                            </p>

                            <h5 className='fw-bold'>Authorship after a refund</h5>
                            <p>If the Order is canceled, the Customer is prohibited from using the Products that have been provided before the cancellation. According to our Terms and Conditions, we keep full authorship of the Products from the canceled order, and you will have no right to use them. In addition, the Product will be uploaded to repository services repositories; thus, it will be marked as 100% not original.</p>

                            <h5 className='fw-bold'>Changes to this policy</h5>
                            <p>We will post the changes or information about them on our Website, and we will notify you of major modifications by email or through our Website. The most recent version of this Policy will be maintained on the Website.

                                Normally, we will try to give you some warning before the new terms become effective. However, sometimes changes will need to be made immediately and if this happens, we will not give you any notice.</p>
                        </Col>

                        <Col md={5} className="col-wd-5">
                            <ServiceForm />
                        </Col>
                    </Row>
                </Container>
            </section>
  )
}

export default Section