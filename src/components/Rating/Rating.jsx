import React from 'react'
import Star1 from '../../assets/images/star.png'
import Star2 from '../../assets/images/star2.png'
import Star3 from '../../assets/images/star3.png'

import ReactStars from "react-rating-stars-component";

const Rating = () => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <>
            <div className='mt-3 d-flex flex-row row-justify-content-center align-items-center widths'>
                <img src={Star1} className="images" />
                <h6 className='ms-2 mt-2 fw-bold'>
                    Trustpilot
                    <div className='d-flex flex-row'>
                        <span>4.9</span>
                        <ReactStars
                            classNames="ms-1"
                            count={5}
                            onChange={ratingChanged}
                            size={18}
                            color="#ffc107"
                            
                        />

                    </div>

                </h6>

                <img src={Star2} className="images ms-3" />
                <h6 className='ms-2 mt-2 fw-bold'>
                    SiteJabber
                    <div className='d-flex flex-row'>
                        <span>4.7</span>
                        <ReactStars
                            classNames="ms-1"
                            count={5}
                            onChange={ratingChanged}
                            size={18}
                            color="#ffc107"
                            
                        />

                    </div>

                </h6>

                {/* <img src={Star3} className="images ms-3" />
                <h6 className='ms-2 mt-2 fw-bold'>
                    Google
                    <div className='d-flex flex-row'>
                        <span>4.9</span>
                        <ReactStars
                            classNames="ms-1"
                            count={5}
                            onChange={ratingChanged}
                            size={18}
                            color="#ffc107"
                            
                        />

                    </div>

                </h6> */}

            </div>


        </>


    )
}

export default Rating