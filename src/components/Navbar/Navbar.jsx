import React from 'react'
import '../../components/css/Navbars.css'
import Logo1 from '../../assets/images/Logo/Logo1.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='fixed-top navbar-expand-lg '>
                <div class="wrapper">
                    <div class="logo"><a href="#"> <img src={Logo1} className="img-logo" /></a></div>
                    <input type="radio" name="slider" id="menu-btn" />
                    <input type="radio" name="slider" id="close-btn" />
                   
                    <ul class="nav-links">
                        <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
                        <li><a href="#">Home</a></li>
                        <li><Link to="/blog">Blog</Link></li>
                        {/* <li>
                            <a href="#" class="desktop-item">Dropdown Menu</a>
                            <input type="checkbox" id="showDrop" />
                            <label for="showDrop" class="mobile-item">Dropdown Menu</label>
                            <ul class="drop-menu">
                                <li><a href="#">Drop menu 1</a></li>
                                <li><a href="#">Drop menu 2</a></li>
                                <li><a href="#">Drop menu 3</a></li>
                                <li><a href="#">Drop menu 4</a></li>
                            </ul>
                            </li> */}
                        <li>
                            <a href="#" class="desktop-item">Dissertation Writing</a>
                            <input type="checkbox" id="showMega" />
                            <label for="showMega" class="mobile-item">Dissertation Writing</label>
                            <div class="mega-box">
                                <div class="content-1">
                                    
                                    <div class="row row-1">
                                        <ul class="mega-links">
                                            <li><a href="#">Buy dissertation UK</a></li>
                                            <li><a href="#">Cheap dissertation writing </a></li>
                                            <li><a href="#">Cheap law dissertation</a></li>
                                            <li><a href="#">Dissertation Abstract</a></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <ul class="mega-links">
                                            <li><a href="#">Dissertation Chapter</a></li>
                                            <li><a href="#">Dissertation conclusion</a></li>
                                            <li><a href="#">Dissertation Discussion</a></li>
                                            <li><a href="#">Dissertation Editing</a></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <ul class="mega-links">
                                            <li><a href="#">Dissertation Formatting</a></li>
                                            <li><a href="#">Dissertation Introduction</a></li>
                                            <li><a href="#">Dissertation Methodology</a></li>
                                            <li><a href="#">Dissertation Poster</a></li>
                                        </ul>
                                    </div>

                                    <div class="row">
                                        <ul className='mega-links'>
                                            <li><a href="#">Dissertation Presentation</a></li>
                                            <li><a href="#">Dissertation Proposal</a></li>
                                            <li><a href="#">Literature Review Help</a></li>
                                            <li><a href="#">Masters Dissertation</a></li>
                                        </ul>
                                    </div>

                                    <div class="row">
                                        <ul className='mega-links'>
                                            <li><a href="#">MBA Dissertation Proposal</a></li>
                                            <li><a href="#">Online Dissertation Help</a></li>
                                            <li><a href="#">PhD dissertation editing</a></li>
                                            <li><a href="#">PhD Dissertation Proposal</a></li>
                                        </ul>
                                    </div>

                                    <div class="row">
                                        <ul className='mega-links'>
                                            <li><a href="#">PhD Qualitative Data Analysis</a></li>
                                            <li><a href="#">Qualitative Data Dissertation</a></li>
                                            <li><a href="#">Research DataCollection</a></li>
                                            <li><a href="#">Write My Dissertation UK</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><a href="#">Review</a></li>
                    </ul>
                    <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
                </div>
            </nav>
        </>
    )
}

export default Navbar