import React, { useState } from 'react'
import { Container, Row, Col, Button, Table } from 'react-bootstrap'

const Tables = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleOnClicked = index => {
        setActiveIndex(index)
      };

      const tables = ['10 + days', '$15.00', '$16.00', '$16.00', '$16.00', '$16.00']
      const table = tables.map((el, index) => {
        return(
            <button
                key={index}
                onClick={() => handleOnClicked(index)}
                className={activeIndex === index ? "activated-table" : "ms-2 unactive-table"}
            >
                {el}
            </button>
        )
      })

    return (
        <>
        <div className='table-responsive | table-responsive-{sm | md | lg | xl | xxl}'>
            <Container className='py-5'>
                <Row>
                    <Col md={12}>
                        <Table striped className='shadow-sm' id="no-more-tables">
                            <thead>
                                <tr className='tr-bg'>
                                    <th>Deadline</th>
                                    <th>College Standard</th>
                                    <th>Undergraduate/Diploma Standard and</th>
                                    <th>Masters Standard</th>
                               
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>15 Days</td>
                                    <td>£ 9</td>
                                    <td>£ 11</td>
                                    <td>£ 13</td>
                            
                                </tr>

                                <tr >
                                    
                                    {/* <td >{table}</td> */}
                                    <td>10 Days</td>
                               
                                     <td>£ 11</td>
                                    <td><Button className='gradients Buttons mb-0'>£ 13</Button></td>
                                    <td>£ 15</td>
                                  
                                </tr>

                                <tr >
                                <td>5 Days</td>
                                    <td>£ 15</td>
                                    <td>£ 17</td>
                                    <td>£ 19</td>
                                   
                                </tr>

                                <tr  className='tr-bg'>
                                    <td>3 Days</td>
                                    <td>£ 17</td>
                                    <td>£ 19</td>
                                    <td>£ 21</td>
                               
                                </tr>

                                <tr>
                                <td>48 Hours</td>
                                    <td>£ 21</td>
                                    <td>£ 23</td>
                                    <td>£ 25</td>
                                   
                                </tr>
                                
                                <tr  className='tr-bg'>
                                <td>24 Hours</td>
                                    <td>£ 23</td>
                                    <td>£ 25</td>
                                    <td>£ 27</td>
                                   
                                </tr>
                                <tr>
                                    <td>6 Hours</td>
                                    <td>£ 27</td>
                                    <td>£ 29</td>
                                    <td>£ 31</td>
                                  
                                </tr>

                               

                              
                                
                            </tbody>
                        </Table>
                    </Col>
                </Row>
          
            </Container>
            </div>
        </>
    )
}

export default Tables
