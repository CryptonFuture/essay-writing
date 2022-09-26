import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/images/Logo/Logo.png'
import Logo1 from '../../assets/images/Logo/Logo1.png'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'

const Navbars = () => {
  // const [click, setClick] = useState(false)
  // const [button, setButton] = useState(true)
  const [navbar, setNavbar] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  // const handleClick = () => setClick(!click)
  // const closeMobileMenu = () => setClick(false)

  // const showButton = () => {
  //   if(window.innerWidth <= 960) {
  //     setButton(false)
  //   } else {
  //     setButton(true)
  //   }
  // }

  // useEffect(() => {
  //   showButton()
  // }, [])

  // window.addEventListener('resize', showButton)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <>
      <nav className='navbar active fixed-top navbar-expand-lg '>
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo1} className="img-logo" />
            {/* <span className='ms-2 bolders'>Logo</span> */}
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 links">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dissertation Writing
                  </a>
                  <ul class="dropdown-menu">
                    <div className='container p-3'>
                      <div className='row'>
                        <div className='col-12 col-md-6'>
                          <li><a class="dropdown-item" href="#">Online Dissertation Help</a></li>
                          <li><a class="dropdown-item" href="#">Dissertation Discussion Writing Services</a></li>
                          <li><a class="dropdown-item" href="#">Dissertation Presentation Writing Services </a></li>
                          <li><a class="dropdown-item" href="#">Dissertation Chapter Writing Services </a></li>
                          <li><a class="dropdown-item" href="#">Dissertation Abstract Writing Services </a></li>
                          
                        </div>
                      </div>
                    </div>

                  </ul>
                </li>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Editing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Other Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Review</a>
              </li>
              {/* <li className="nav-item">
            <a className="nav-link" href="#">Samples</a>
          </li> */}
              <li className="nav-item ms-3">
                <Button className="btns">
                  <span> Get Started</span>
                </Button>
              </li>

              <li className="nav-item ms-3">
                <Link to="/order">
                  <Button className="btns">
                    <span>Order Now</span>
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
    // <Navbar expand="lg" fixed='top'>
    //   <Container>
    //     <Navbar.Brand href="#home">
    //       <img src={Logo} />
    //       <span className='ms-2 bolders'>Logo</span>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className='ms-auto links'>
    //         <Nav.Link href="#home" className='ms-3'>Home</Nav.Link>
    //         <Nav.Link href="#link" className='ms-3'>Dissertation Writing </Nav.Link>
    //         <Nav.Link href="#home" className='ms-3'>Editing</Nav.Link>
    //         <Nav.Link href="#link" className='ms-3'>Other Services </Nav.Link>
    //         <Nav.Link href="#home" className='ms-3'>Review</Nav.Link>
    //         <Nav.Link href="#link" className='ms-3'>Samples </Nav.Link>
    //         <Button className="btns ms-3">
    //           <span> Get Started</span>
    //         </Button>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  )
}

export default Navbars