import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './starRating.scss';

interface StarRatingProps {
  onChange: Function;
}

const StarRating: React.FC<StarRatingProps> = ({ onChange }) => {
  const [rating, setRating] = useState(0);

  const changeRating = (i: number) => {
    setRating(i);
    onChange(i);
  };

  return (
    <div className="star-rating">
      <h4>Rate this book:</h4>
      {[...Array(10)].map((star, i) => {
        i += 1;
        return (
          <button
            type="button"
            key={i}
            className={i <= rating ? 'on star' : 'off star'}
            onClick={() => changeRating(i)}
          >
            <FontAwesomeIcon icon={faStar} />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
