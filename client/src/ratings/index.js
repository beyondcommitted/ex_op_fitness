import React, { useState } from "react";

import Rate from "../components/Rate";

const Rating = () => {
  const [rating, setRating] = useState(0);
  return (
    <>
      <div className="row">
        <div className="col stars-center">
          <h5>Rate This Workout</h5>
          <Rate rating={rating} onRating={(rate) => setRating(rate)} />
          <p>Rating - {rating} stars</p>
        </div>
      </div>
    </>
  );
};

export default Rating;
