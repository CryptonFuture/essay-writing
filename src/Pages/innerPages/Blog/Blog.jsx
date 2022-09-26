import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navbars from '../../../components/Navbar/Navbars'
import BlogSection from './BlogSection'

const Blog = () => {
  return (
    <>
      <Navbars />
      <section id="blog">
            <Container className='py-5 p-5 mt-5'>
                <Row className='justify-content-center'>
                    <Col md={6} className=" order_margin">
                        <h1 className='text-center text-h1'>Latest Blogs are on top all times</h1>
                    </Col>
                </Row>
            </Container>
      </section>
      <BlogSection />
    </>
  )
}

export default Blog
