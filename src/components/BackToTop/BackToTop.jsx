import React, { useState, useEffect } from 'react'
import ArrowUp from '../../assets/images/ArrowUp/uparrow.png'
import { FaAngleUp } from 'react-icons/fa';

const BackToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false)

    const backToTop = () => {
        if (window.scrollY > 400) {
            setShowTopBtn(true)
        } else {
            setShowTopBtn(false)
        }
    }

    window.addEventListener('scroll', backToTop)

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="top-to-btm">
            {showTopBtn && (
                // <img src={ArrowUp} onClick={goTop} className="icon-position" />
                <FaAngleUp onClick={goTop} className="icon-position icon-style" />
            )}
        </div>
    )
}

export default BackToTop
