import React, { useState } from 'react'
import '../../components/css/Navbars.css'
import Logo1 from '../../assets/images/Logo/Logo1.png'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

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
            <nav className='fixed-top navbar-expand-lg'>
                <div class="wrapper">
                    <div class="logo"><a href="#"> <img src={Logo1} className="img-logo" /></a></div>
                    <input type="radio" name="slider" id="menu-btn" />
                    <input type="radio" name="slider" id="close-btn" />

                    <ul class="nav-links">
                        <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
                        <li><Link to="/" className='active'>Home</Link></li>
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
                                            <li><Link to="/BuydissertationUK">BuyDissertationUK</Link></li>
                                            <li><Link to="/CheapdissertationwritingservicesinUK">CheapDissertationWriting </Link></li>
                                            <li><Link to="/Cheaplawdissertationwritingservice">CheapLawDissertation</Link></li>
                                            <li><Link to="/DissertationAbstractWritingServices">DissertationAbstract</Link></li>
                                            <li><Link to="/PhDDataCollectionHelp">PhDDataCollectionHelp</Link></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <ul class="mega-links">
                                            <li><Link to="/DissertationChapterWritingServices">DissertationChapter</Link></li>
                                            <li><Link to="/Dissertationconclusionwritingservice">DissertationConclusion</Link></li>
                                            <li><Link to="/DissertationDiscussionWritingServices">DissertationDiscussion</Link></li>
                                            <li><Link to="/DissertationEditingandProofreadingServices">DissertationEditing</Link></li>
                                            <li><Link to="/DissertationDataAnalysisServices">DissertationDataAnalysis</Link></li>
                                       </ul>
                                    </div>
                                    <div class="row">
                                        <ul class="mega-links">
                                            <li><Link to="/DissertationFormattingService">DissertationFormatting</Link></li>
                                            <li><Link to="/DissertationIntroductionWritingService">DissertationIntroduction</Link></li>
                                            <li><Link to="/DissertationMethodologyHelp">DissertationMethodology</Link></li>
                                            <li><Link to="/DissertationPosterDesigningServices">DissertationPoster</Link></li>
                                            <li><Link to="/DissertationWritingServices">DissertationWriting</Link></li>
                                        </ul>
                                    </div>

                                    <div class="row">
                                        <ul className='mega-links'>
                                            <li><Link to="/DissertationPresentationWritingServices">DissertationPresentation</Link></li>
                                            <li><Link to="/DissertationProposal">DissertationProposal</Link></li>
                                            <li><Link to="/LiteratureReviewHelp">LiteratureReviewHelp</Link></li>
                                            <li><Link to="/MastersDissertationProposalHelp">MastersDissertation</Link></li>
                                            <li><Link to="/PrimaryDataCollectionHelp">PrimaryDataCollection</Link></li>
                                        </ul>
                                    </div>

                                    <div class="row">
                                        <ul className='mega-links'>
                                            <li><Link to="/MBADissertationProposalHelp">MBADissertationProposal</Link></li>
                                            <li><Link to="/OnlineDissertationHelp">OnlineDissertationHelp</Link></li>
                                            <li><Link to="/PhDdissertationeditingservices">PhDdissertationediting</Link></li>
                                            <li><Link to="/PhDDissertationProposalHelp">PhDDissertationProposal</Link></li>
                                        </ul>
                                    </div>

                                    <div class="row">
                                        <ul className='mega-links'>
                                            <li><Link to="/PhDQualitativeDataAnalysisservices">PhDQualitativeData</Link></li>
                                            <li><Link to="/QualitativeDataDissertationServices">QualitativeDataDissertation</Link></li>
                                            <li><Link to="/ResearchDataCollectionServices">ResearchDataCollection</Link></li>
                                            <li><Link to="/WriteMyDissertationUK">WriteMyDissertationUK</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><Link to="/reviews">Review</Link></li>
                        <li>
                            <a className='anchor-button' href='#'>Get Started</a>
                        </li>

                        <li>
                            <Link  className='anchor-button' to='/order'>Order Now</Link>
                        </li>

                    </ul>
                    <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
                </div>
            </nav>
        </>
    )
}

export default Navbar