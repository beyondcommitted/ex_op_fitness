import React, { useState } from 'react';
import Header from 'components/header';
import Rate from 'components/Rate';

export default Rating = () => {
    const [rating, setRating] = useState(0);
    return(
        <>
        <Header title="star rating" />
        <div className="row">
            <div className="col stars-center">
                <h2>Rate This Workout</h2>
                  <Rate rating={rating} onRating={rate => setRating(rate)}/>
                <p>Rating - {rating} stars</p>
            </div>
        </div>
        </>
    )
}