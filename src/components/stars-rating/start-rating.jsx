import React, { useCallback } from 'react';
import { ReactComponent as FullStar } from './../../asset/svg/full-star.svg';
import { ReactComponent as EmptyStar } from './../../asset/svg/empty-star.svg';
import './star-rating.scss'

export const StarRating = ({ rate }) => {

  const createRate = useCallback((rating, limit) => {
    console.log(rating)
    let starsArray = [];
    for ( let i= 1; i <= limit; i++) {
      const star = rating < i 
        ? <EmptyStar key={i} />
        : <FullStar key={i} />
      starsArray.push(star)
    }
  
    return starsArray;
  }, [])

  return (
    <div id='stars_container'>
      {
        createRate(rate, 5).map((element) => element)
      }
    </div>
  )
};

