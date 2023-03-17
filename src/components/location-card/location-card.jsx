import React from 'react';
import './location-card.scss'

export const LocationCard = ({ cover, title }) => {
  return (
      <article 
        className='home_articles'
        style={{'background-image': `url(${cover})`}}
      >
        <div className='home_articles_filter'/>
        <p>{title}</p>
      </article>
  )
}