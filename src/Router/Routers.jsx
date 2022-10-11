import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutsUs from '../Pages/innerPages/AboutUs/AboutUs'
import Cookie from '../Pages/innerPages/Cookie/Cookie'
import Faqs from '../Pages/innerPages/Faqs/Faqs'
import Guarantee from '../Pages/innerPages/Guarantee/Guarantee'
import HowItWork from '../Pages/innerPages/HowItworks/HowItWork'
import Pricing from '../Pages/innerPages/Pricing/Pricing'
import Privacy from '../Pages/innerPages/Privacy/Privacy'
import ReferFriend from '../Pages/innerPages/ReferFriend/ReferFriend'
import Refund from '../Pages/innerPages/Refund/Refund'
import Reviews from '../Pages/innerPages/Reviews/Reviews'
import Revision from '../Pages/innerPages/Revision/Revision'
import TermUs from '../Pages/innerPages/TermUs/TermUs'
import WhyChooseUs from '../Pages/innerPages/WhyChooseUs/WhyChooseUs'
import Home from '../Pages/view/Home'
import Order from '../Pages/innerPages/Order/Order'
import Blog from '../Pages/innerPages/Blog/Blog'
import BuydissertationUK from '../Pages/innerPages/DissertationWriting/BuydissertationUK'
import CheapdissertationwritingservicesinUK from '../Pages/innerPages/DissertationWriting/CheapdissertationwritingservicesinUK'
import Cheaplawdissertationwritingservice from '../Pages/innerPages/DissertationWriting/Cheaplawdissertationwritingservice'
import DissertationAbstractWritingServices from '../Pages/innerPages/DissertationWriting/DissertationAbstractWritingServices'
import DissertationChapterWritingServices from '../Pages/innerPages/DissertationWriting/DissertationChapterWritingServices'
// import Dissertationconclusionwritingservice from '../Pages/innerPages/DissertationWriting/DissertationDiscussionWritingServices'
import DissertationFormattingService from '../Pages/innerPages/DissertationWriting/DissertationFormattingService'
import DissertationIntroductionWritingService from '../Pages/innerPages/DissertationWriting/DissertationIntroductionWritingService'
// import DissertationMethodologyHelp from '../Pages/innerPages/DissertationWriting/DissertationMethodologyHelp'
import DissertationPresentationWritingServices from '../Pages/innerPages/DissertationWriting/DissertationPresentationWritingServices'
import OnlineDissertationHelp from '../Pages/innerPages/DissertationWriting/OnlineDissertationHelp'
import PhDQualitativeDataAnalysisservices from '../Pages/innerPages/DissertationWriting/PhDQualitativeDataAnalysisservices'
import BlogDetails from '../Pages/innerPages/BlogDetails/BlogDetails'
import Dissertationconclusionwritingservice from '../Pages/innerPages/DissertationWriting/Dissertationconclusionwritingservice'
import LiteratureReviewHelp from '../Pages/innerPages/DissertationWriting/LiteratureReviewHelp'
import DissertationEditingandProofreadingServices from '../Pages/innerPages/DissertationWriting/DissertationEditingandProofreadingServices'
import MastersDissertationProposalHelp from '../Pages/innerPages/DissertationWriting/MastersDissertationProposalHelp'
import MBADissertationProposalHelp from '../Pages/innerPages/DissertationWriting/MBADissertationProposalHelp'
import PhDdissertationeditingservices from '../Pages/innerPages/DissertationWriting/PhDdissertationeditingservices'
import PhDDissertationProposalHelp from '../Pages/innerPages/DissertationWriting/PhDDissertationProposalHelp'
import DissertationProposal from '../Pages/innerPages/DissertationWriting/DissertationProposal'
import WriteMyDissertationUK from '../Pages/innerPages/DissertationWriting/WriteMyDissertationUK'
import ResearchDataCollectionServices from '../Pages/innerPages/DissertationWriting/ResearchDataCollectionServices'
import QualitativeDataDissertationServices from '../Pages/innerPages/DissertationWriting/QualitativeDataDissertationServices'
import DissertationPosterDesigningServices from '../Pages/innerPages/DissertationWriting/DissertationPosterDesigningServices'
import DissertationMethodologyHelp from '../Pages/innerPages/DissertationWriting/DissertationMethodologyHelp'
import DissertationDiscussionWritingServices from '../Pages/innerPages/DissertationWriting/DissertationDiscussionWritingServices'
import PhDDataCollectionHelp from '../Pages/innerPages/DissertationWriting/PhDDataCollectionHelp'
import Referrals from '../Pages/innerPages/Referrals/Referrals'
import MoneyBackGuarantee from '../Pages/innerPages/MoneyBackGuarantee/MoneyBackGuarantee'
import DissertationDataAnalysisServices from '../Pages/innerPages/DissertationWriting/DissertationDataAnalysisServices'
import DissertationWritingServices from '../Pages/innerPages/DissertationWriting/DissertationWritingServices'
import PrimaryDataCollectionHelp from '../Pages/innerPages/DissertationWriting/PrimaryDataCollectionHelp'

const Routers = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />

                    <Route path='/BuydissertationUK' element={<BuydissertationUK />} />
                    <Route path='/CheapdissertationwritingservicesinUK' element={<CheapdissertationwritingservicesinUK />} />
                    <Route path='/Cheaplawdissertationwritingservice' element={<Cheaplawdissertationwritingservice />} />
                    <Route path='/DissertationAbstractWritingServices' element={<DissertationAbstractWritingServices />} />
                    <Route path='/DissertationChapterWritingServices' element={<DissertationChapterWritingServices />} />
                    <Route path='/Dissertationconclusionwritingservice' element={<Dissertationconclusionwritingservice />} />
                    <Route path='/DissertationFormattingService' element={<DissertationFormattingService />} />
                    <Route path='/DissertationIntroductionWritingService' element={<DissertationIntroductionWritingService />} />
                    <Route path='/DissertationMethodologyHelp' element={<DissertationMethodologyHelp />} />
                    <Route path='/DissertationPresentationWritingServices' element={<DissertationPresentationWritingServices />} />
                    <Route path='/OnlineDissertationHelp' element={<OnlineDissertationHelp />} />
                    <Route path='/PhDQualitativeDataAnalysisservices' element={<PhDQualitativeDataAnalysisservices />} />
                    <Route path='/LiteratureReviewHelp' element={<LiteratureReviewHelp />} />
                    <Route path='/DissertationEditingandProofreadingServices' element={<DissertationEditingandProofreadingServices />} />
                    <Route path='/MastersDissertationProposalHelp' element={<MastersDissertationProposalHelp />} />
                    <Route path='/MBADissertationProposalHelp' element={<MBADissertationProposalHelp />} />
                    <Route path='/PhDdissertationeditingservices' element={<PhDdissertationeditingservices />} />
                    <Route path='/PhDDissertationProposalHelp' element={<PhDDissertationProposalHelp />} />
                    <Route path='/DissertationProposal' element={<DissertationProposal />} />
                    <Route path='/WriteMyDissertationUK' element={<WriteMyDissertationUK />} />
                    <Route path='/ResearchDataCollectionServices' element={<ResearchDataCollectionServices />} />
                    <Route path='/QualitativeDataDissertationServices' element={<QualitativeDataDissertationServices />} />
                    <Route path='/DissertationPosterDesigningServices' element={<DissertationPosterDesigningServices />} />
                    <Route path='/DissertationDiscussionWritingServices' element={<DissertationDiscussionWritingServices />} />
                    <Route path='/PhDDataCollectionHelp' element={<PhDDataCollectionHelp />} />
                    <Route path='/DissertationDataAnalysisServices' element={<DissertationDataAnalysisServices />} />
                    <Route path='/DissertationWritingServices' element={<DissertationWritingServices />} />
                    <Route path='/PrimaryDataCollectionHelp' element={<PrimaryDataCollectionHelp />} />


                    <Route path='/MoneyBackGuarantee' element={<MoneyBackGuarantee />} />
                    <Route path='/about-us' element={<AboutsUs />} />
                    <Route path='/faqs' element={<Faqs />} />
                    <Route path='/how-it-work' element={<HowItWork />} />
                    <Route path='/pricing' element={<Pricing />} />
                    <Route path='/reviews' element={<Reviews />} />
                    <Route path='/cookie' element={<Cookie />} />
                    <Route path='/guarantee' element={<Guarantee />} />
                    <Route path='/privacy' element={<Privacy />} />
                    <Route path='/refer-friend' element={<ReferFriend />} />
                    <Route path='/refund' element={<Refund />} />
                    <Route path='/revision' element={<Revision />} />
                    <Route path='/why-choose-us' element={<WhyChooseUs />} />
                    <Route path='/terms-us' element={<TermUs />} />
                    <Route path='/order' element={<Order />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/blogDetails/:id' element={<BlogDetails />} />
                </Routes>
            </Router>
        </>
    )
}

export default Routers
