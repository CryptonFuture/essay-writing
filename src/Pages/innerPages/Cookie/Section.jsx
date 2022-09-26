import React from 'react'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'
import CalculatePrice from '../../../components/Card/CalculatePrice'
import Breadcrumbs from '../../../components/Breadcrumb/Breadcrumb'

const Section = () => {
    return (
        <>
            <section id='cookie'>
                <Container className='py-5 py-mg'>
                    <Row>
                        <Col md={6} className='col-ms'>
                            <Breadcrumbs />
                            <h1 className='fw-bold mt-5'>Cookie Policy</h1>
                            <p>This document is created to provide all the relevant information to our customers/visitors who
                                are interested to learn about our use of web beacons, cookies, methodologies, and tracking
                                tools. The usage of these technologies may be applied to our website, apps, and other linked
                                platforms. All policies here are designed regarding the use of these technologies for our
                                vendors, associates, and contractors to use these technologies as authorized agents.</p>

                            <p>  The purpose of providing this document is to ensure that all readers must know to understand
                                the need about how their information is being utilized by us. Kindly, read our privacy policy as
                                well as our use page terms. However, the support team is available 24/7 if you have more
                                questions.</p>

                            <h4 className='fw-bold'>GLOSSARY TERMS</h4>

                            <h6 className='fw-bold mt-3'>1.Different Types of Cookies And How We Use Them on Our Site</h6>
                            <p>By visiting most websites, small files are downloaded on your device, these files are called
                                cookies. This includes Dissertation Proposal. Tablets, laptops, computers, and other linked
                                devices are impacted by cookies. The purpose of installing cookies is often used to collect
                                information on how you are using our website and other tools. Cookies help us to remember
                                our repeat visitors and maintain an easy way to navigate the website.</p>

                            <h6 className='fw-bold mt-3'>Session Cookies:</h6>
                            <p>It is relevant only to the current browsing session, it is deleted immediately
                                when that session ends..</p>

                            <h6 className='fw-bold'>Third Party Cookies:</h6>
                            <p>We are not responsible for 3rd party cookies, they are downloaded by
                                other third-party entities.</p>

                            <h6 className='fw-bold'>Persistent Cookies:</h6>
                            <p>A persistent cookie that remains installed after you exit a website. These
                                cookies maintain a good customer experience over multiple visits, the majority we set persistent
                                cookies.</p>

                            <h6 className='fw-bold'>First Party Cookies:</h6>
                            <p> These cookies are designed when you visit our web pages. These are the
                                cookies that are used to remember and record your details that are preferences, name, history,
                                and more.</p>

                            <h6>Web Beacon:</h6>
                            <p>Web beacons are invisible graphic files, stored on display screens. They can be
                                found on web pages and emails and are utilized to collect information about on-page behavior.</p>

                            <h6 className='fw-bold'>Other Related Technologies:</h6>
                            <p>Other related technologies included; Flash cookies, HTML5
                                cookies, and objects found in local storage as well as other technologies administered by your
                                device or the app you are using. These other technologies aren&#39;t managed by us.</p>

                            <h6>First And Third Party Cookies:</h6>
                            <p> To present information such as advertisements and content, we
                                may use advertising cookies. To improve our advertising, these cookies are also used by us. </p>

                            <p> We reserve our right to contract with third-party service providers who may do any of the
                                following:</p>

                            <ul>
                                <li>Provide us with website or content</li>
                                <li> Give us tools to use on our website/apps, or anywhere we are providing services</li>
                                <li> Providing with any other functionality required</li>
                            </ul>


                            <p> These 3rd parties may use web beacons, cookies, and some other technologies in the same way
                                that we do as they are our authorized agents. Also, these cookies may store data on the device
                                you use, its IP address, and other information.</p>

                            <p> Referring to the links below for details on clearing cookies, we have opted to link to the most
                                commonly used browsers.</p>

                            <ul>
                                <li>Firefox </li>
                                <li> Google Chrome  </li>
                                <li> Safari</li>
                                <li> Internet Explorer </li>
                            </ul>

                            <p> When deleting and blocking cookies, it is important to be aware of the outcomes. If you amend
                                your browser settings to delete and block cookies, many websites that you enter won&#39;t work
                                right. Dissertation Proposal is one of those sites. Also, the practice of deleting your cookies and
                                clearing your cache does not block cookies, it will reload when you visit that site again.</p>

                            <p> Your Consent regarding The Use of Cookies/Related Technologies
                                <ul>
                                    <li>We must be able to use cookies for our website to function and to provide you with</li>
                                    <li>In some scenarios, websites that use cookies will ask you to input your data like your
                                        contact information.</li>
                                    <li>Also, sometimes you will be asked more specific questions about your preferences,
                                        when you finish entering the information it will store in a cookie file, and installed on
                                        your computer. When returning to the same website, the cookie will upload. That&#39;s how
                                        our websites remember you. The cookie will open and be uploaded whenever a new
                                        page is entered.</li>
                                </ul>
                                content that is relevant to you. In accessing our website, messenger tools, and app, you
                                give your explicit consent for us to use web beacons, cookies, and other technology. If
                                you wish to revoke this consent, you must have to access browser settings to delete
                                cookies and block them in the future. </p>

                            <h6 className='fw-bold'>Additional Information on Our Usage of Cookies, Beacons, And Other Related
                                Technologies</h6>

                            <p> These files/technologies and their usage described here are for multiple reasons. It ensures us
                                that our online services and website work smoothly as designed. They also support us in
                                providing some additional functionality.</p>

                            <ul>
                                <li>
                                    Some beacons and cookies are essential, without having them you won&#39;t be able to view
                                    orders you&#39;ve placed, or access your accounts. If in case these cookies are blocked, this
                                    function is no longer available to work properly. You must accept these cookies to use
                                    our website smoothly without getting any errors. Also, if you block these cookies pages
                                    may not load/ work correctly. These cookies don&#39;t store your information.
                                </li>

                                <li>
                                    We use performance cookies as part of our efforts to improve our website and user
                                    experience. These are the cookies that mainly track the information about your
                                    interactions with us, they also gather error data. These cookies help us to provide data
                                    that allows us to improve our web page functionality. You must have to accept these
                                    cookies so that our web pages may perform properly. These cookies also give us a better
                                    understanding of the various user navigation patterns, so that we can create a better
                                    customer/user experience. Performance cookies only collect non-identifying
                                    information.
                                </li>
                            </ul>



                        </Col>

                        {/* <Col md={6}>
                            <CalculatePrice />
                        </Col> */}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section
