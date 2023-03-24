import React, { useMemo } from 'react';
import { ReactComponent as FullStar } from './../../asset/svg/full-star.svg';
import { ReactComponent as EmptyStar } from './../../asset/svg/empty-star.svg';
import './star-rating.scss'

export const StarRating = ({ rate }) => {

  const rating = useMemo(( limit = 5) => {
    let starsArray = [];

    for (let i = 1; i <= limit; i++) {
      const star = rate < i 
        ? <EmptyStar key={i} />
        : <FullStar key={i} />
      starsArray.push(star)
    }

    return starsArray;
  }, [rate]);

  return (
    <div id='stars_container'>
      {
        rating.map((star) => star)
      }
    </div>
  )
};
