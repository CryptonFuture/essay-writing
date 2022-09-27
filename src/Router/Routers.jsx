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
import DissertationWritingServices from '../Pages/innerPages/DissertationWriting/DissertationWritingServices'
import BuydissertationUK from '../Pages/innerPages/DissertationWriting/BuydissertationUK'
import Cheaplawdissertationwritingservice from '../Pages/innerPages/DissertationWriting/Cheaplawdissertationwritingservice'
import PhDQualitativeDataAnalysisservices from '../Pages/innerPages/DissertationWriting/PhDQualitativeDataAnalysisservices'
const Routers = () => {
    return (
        <>
            <Router>
                <Routes>
                <Route path='/' element={<PhDQualitativeDataAnalysisservices />} />
                {/* <Route path='/' element={<Cheaplawdissertationwritingservice />} /> */}
                    {/* <Route path='/' element={<BuydissertationUK />} /> */}
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
                    {/* <Route path='/DissertationWritingServices' element={<DissertationWritingServices />} /> */}
                </Routes>
            </Router>
        </>
    )
}

export default Routers
