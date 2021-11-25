import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './starRating.scss';

interface StarRatingProps {}

export const StarRating = (props: StarRatingProps) => {
  const [rating, setRating] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(10)].map((star, i) => {
        // return <FontAwesomeIcon icon={faStar} />;
        i += 1;
        return (
          <button
            type="button"
            key={i}
            className={i <= rating ? 'on star' : 'off star'}
            onClick={() => setRating(i)}
          >
            <FontAwesomeIcon icon={faStar} />
          </button>
        );
      })}
    </div>
  );
};
