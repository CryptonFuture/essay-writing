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
      {/* <nav>
        <div className='wrapper'>
          <div className='logo'><a href="#">CodingNepal</a></div>
          <ul className='nav-links'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li>
              <a href='#'>Dropdown Menu</a>
              <ul className='drop-menu'>
                <li><a href='#'>Drop menu 1</a></li>
                <li><a href='#'>Drop menu 2</a></li>
                <li><a href='#'>Drop menu 3</a></li>
                <li><a href='#'>Drop menu 4</a></li>

              </ul>
            </li>
            <li>
              <a href='#'>Mega Menu</a>
              <div className='mega-box'>
                <div className='content'>
                <div className='row'>
                    <img src="" alt="" />
                  </div>
                  <div className='row'>
                    <header>Design Services</header>
                    <ul className='mega-links'>
                      <li><a href='#'>Drop menu 1</a></li>
                      <li><a href='#'>Drop menu 2</a></li>
                      <li><a href='#'>Drop menu 3</a></li>
                      <li><a href='#'>Drop menu 4</a></li>
                    </ul>
                  </div>

                  <div className='row'>
                    <header>Design Services</header>
                    <ul className='mega-links'>
                      <li><a href='#'>Drop menu 1</a></li>
                      <li><a href='#'>Drop menu 2</a></li>
                      <li><a href='#'>Drop menu 3</a></li>
                      <li><a href='#'>Drop menu 4</a></li>
                    </ul>
                  </div>

                  <div className='row'>
                    <header>Design Services</header>
                    <ul className='mega-links'>
                      <li><a href='#'>Drop menu 1</a></li>
                      <li><a href='#'>Drop menu 2</a></li>
                      <li><a href='#'>Drop menu 3</a></li>
                      <li><a href='#'>Drop menu 4</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li><a href='#'>Feedback</a></li>
          </ul>
        </div>
      </nav> */}

      {/* <header>
      <div className='containers-list'>
        <div className='logo'></div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li>
              <a href="#">Services</a>
              <div className='megamenu'>
                  <div className='megamenuitems'>
                    <h3>Web Devlopment</h3>
                    <ul>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                    </ul>
                  </div>

                  <div className='megamenuitems'>
                    <h3>Web Devlopment</h3>
                    <ul>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                    </ul>
                  </div>

                  <div className='megamenuitems'>
                    <h3>Web Devlopment</h3>
                    <ul>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                    </ul>
                  </div>

                  <div className='megamenuitems'>
                    <h3>Web Devlopment</h3>
                    <ul>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                    </ul>
                  </div>
              </div>
            </li>
            <li><a href="#">Training</a></li>
            <li><a href="#">Internship</a></li>
            <li><a href="#">Student's Zone</a></li>
            <li><a href="#">Testimonial</a></li>
          </ul>
        </nav>
      </div>
    </header> */}
      <nav className='navbar active fixed-top navbar-expand-lg '>
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo1} className="img-logo" />
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
                <a className="nav-link" href="#">Editing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Other Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Review</a>
              </li>
            
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