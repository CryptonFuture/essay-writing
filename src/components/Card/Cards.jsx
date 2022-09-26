import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'


const Cards = () => {
  // const [active, setActive] = useState("")
  const [active1, setActive1] = useState("")
  const [active3, setActive3] = useState("")
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeIndex1, setActiveIndex1] = useState(0)
  const [activeIndex2, setActiveIndex2] = useState(0)
  const [activeIndex3, setActiveIndex3] = useState(0)

  const [price, setPrice] = useState(12)
  const [count, setCount] = useState(1)
  const [orders, setOrders] = useState({
    paper: '',
    date: ''
  })

  const {paper, date} = orders

  const navigate = useNavigate()


  // const handleClick = (event) => {
  //   setActive(event.target.id)
  // }

  const handleOnClicked = index => {
    setActiveIndex(index)
  };

  const handleOnClicked2 = index => {
    setActiveIndex2(index)
  };

  const handleOnClicked1 = index => {
    setActiveIndex1(index)
  };



  const names = ['Academic Writing Writing from scratch', 'Academic Writing Writing from scratch', 'Academic Writing Writing from scratch']
  const name = names.map((el, index) => {
    return (
      <button
        key={index}
        onClick={() => handleOnClicked(index)}
        className={activeIndex === index ? "activated" : "ms-2 unactive"}
      >
        {el}
      </button>
    )
  })

  const schools = ['High School', 'High School', 'High School', 'High School']
  const school = schools.map((el, index) => {
    return (
      <button
        key={index}
        onClick={() => handleOnClicked1(index)}
        className={activeIndex1 === index ? "activated-school-btn" : "ms-2 unactive-school-btn"}
      >
        {el}
      </button>
    )
  })

  const pages = ['Pages', 'Word']
  const page = pages.map((el, index) => {
    return (
      <button
        key={index}
        onClick={() => handleOnClicked2(index)}
        className={activeIndex2 === index ? "ms-2 activated-pages-btn" : " unactive-pages-btn"}
      >
        {el}
      </button>

    )
  })

  const handleOnClick = (event) => {
    setActive1(event.target.id)
  }

  const handleInputOnClick = (event) => {
    setActive3(event.target.id)
  }

  const increment = (index) => {
    setCount(count + 1)
    setPrice(price + 12)
    setActiveIndex3(index)
  }

  const decrement = () => {
    if (count < 2) {
      setCount(count - 0)
    } else {
      setCount(count - 1)
      setPrice(price - 12)

    }
  }

  const order = () => {
    if(paper == "" || date == "") {
        toast.error('Please fill Out All Field')
    } else {
      navigate('/order')
    }
  }

  const handleOnChangeInput = (e) => {
    e.persist()
    setOrders({...orders, [e.target.name]: e.target.value})
  }

  return (
    <>
    <Container>
      <Row className='justify-content-md-center align-items-md-center'>
        <Col md={10} style={{ marginLeft: '22%' }}>
          <Card className='cards'>
            <Card.Body>
              <Card.Title>Caculate Price</Card.Title>

              <div className='d-flex flex-row'>
                {name}
              </div>

              <div className='mt-3'>
                <Card.Title>Academic Level</Card.Title>


                <div className='d-flex flex-row'>
                  {school}
                </div>
              </div>

              <div className='mt-3'>
                <Card.Title>Type Paper</Card.Title>
                <input value={paper} onChange={handleOnChangeInput} name="paper" type="text" className="form-control inputs" placeholder='Essay' />
              </div>

              <div className='mt-3'>
                <Card.Title>Quantity</Card.Title>
                <Row>
                  <Col md={4}>
                    <div className='d-flex flex-row'>
                      <button onClick={decrement} className='btn-radius'>-</button>
                      <input value={count} className='form-control forms' />
                      <button onClick={increment} className='btn-radius-1'>+</button>
                      <div className='ms-2 d-flex flex-row'>
                        {/* <ButtonGroup className='btns-group-3' aria-label="Basic example">
                          <Button id={"1"} onClick={handleOnClick} className={active3 === "1" ? "actives" : 'buttons-3 active'}>
                            <span>Pages</span>
                          </Button>
                          <Button id={"2"} onClick={handleOnClick} className={active3 === "2" ? "actives" : 'buttons-3'}>
                            <span>Word</span>
                          </Button>
                        </ButtonGroup> */}
                        {page}
                      </div>
                      <div className='ms-3 dates'>
                        <input value={date} name="date" onChange={handleOnChangeInput}  className='form-control forms-1' type="date" />
                      </div>

                    </div>

                  </Col>
                  <div className='display-flex mt-3'>
                    <p>Approix price</p>
                    <Button onClick={order} className='gradient'>
                      Proceed To Order
                    </Button>
                  </div>
                  <div>
                    <h5 className='fw-bolder'>${price}</h5>
                  </div>
                </Row>

              </div>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Toaster />
    </>
  )
}

export default Cards