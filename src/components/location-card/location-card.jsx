import React, { Suspense } from 'react';
import './location-card.scss'
import { useNavigate } from 'react-router-dom';
import { routes } from '../../router/routes';

export const LocationCard = ({ id ,cover, title }) => {
  const navigate = useNavigate();
  
  return (
      <article 
        onClick={() => navigate(routes.LOGEMENT_NAVIGATE(id))}
        className='home_articles'
      >
        
        <Suspense>
          <div className='home_articles_filter'/>
          <img className='home_article_img' src={cover} alt=''/>
        </Suspense>
        <p>{title}</p>
      </article>
  )
}