import React from 'react'
import ReactStars from "react-rating-stars-component";

const RatingStar = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <>
            <div className='top-positions'>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={18}
                    color="#ffc107"
                    activeColor="#808080"
                />
            </div>
        </>
    )
}

export default RatingStar
