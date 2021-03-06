import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rate = ({ count = 5, rating, color, onRating }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const getColor = (index) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }
    return color.unfilled;
  };

  const starRating = Array(count)
    .fill(0)
    .map((_, i) => i + 1)
    .map((idx) => (
      <FontAwesomeIcon
        key={idx}
        className="cursor-pointer"
        icon={faStar}
        onClick={() => onRating(idx)}
        style={{ color: getColor(idx) }}
        onMouseEnter={() => setHoverRating(idx)}
        onMouseLeave={() => setHoverRating(0)}
      />
    ));
  return <div>{starRating}</div>;
};

Rate.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onchange: PropTypes.func,
  color: PropTypes.object,
};

Rate.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: "#f5eb3b",
    unfilled: "#B6D0F2",
  },
};
export default Rate;
