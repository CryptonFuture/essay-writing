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
                <Link className="nav-link" aria-current="page" to="/blog">Blog</Link>
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
      {/* <nav>
        <div class="wrapper">
          <div class="logo"><span>Coding</span>Engineer</div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul class="nav-links">
            <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
            <li><a href="#">Home</a></li>
            <li><Link to="/blog">Blog</Link></li>
            <li>
              <a href="#" class="desktop-item">Dropdown Menu</a>
              <input type="checkbox" id="showDrop" />
              <label for="showDrop" class="mobile-item">Dropdown Menu</label>
              <ul class="drop-menu">
                <li><a href="#">Drop menu 1</a></li>
                <li><a href="#">Drop menu 2</a></li>
                <li><a href="#">Drop menu 3</a></li>
                <li><a href="#">Drop menu 4</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="desktop-item">Mega Menu</a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile-item">Mega Menu</label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <img src="Ape.png" alt="" />
                  </div>
                  <div class="row">
                    <header>Mega 1 Services</header>
                    <ul class="mega-links">
                      <li><a href="#">UI/UX</a></li>
                      <li><a href="#">Website Design</a></li>
                      <li><a href="#">App Development</a></li>
                      <li><a href="#">Custom Logo</a></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>Mega 2 Services</header>
                    <ul class="mega-links">
                      <li><a href="#">Business Email</a></li>
                      <li><a href="#">Personal Email</a></li>
                      <li><a href="#">Mobile Email</a></li>
                      <li><a href="#">Website Marketing</a></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>Mega 3 Services</header>
                    <ul class="mega-links">
                      <li><a href="#">Website Hosting</a></li>
                      <li><a href="#">Site Seal</a></li>
                      <li><a href="#">Privacy Seal</a></li>
                      <li><a href="#">Business Cards</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li><a href="#">Contact</a></li>
          </ul>
          <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
        </div>
      </nav> */}
    </>

  )
}

export default Navbars