import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from './../../router/routes';
import './location-card.scss';

/**
 * @LocationCard is a component 
 * @prop {
 *    id: number,
 *    cover: string,
 *    title: string 
 * }
 * @returns component use for display location card 
 * Its use by @HomeCardList
**/

export const LocationCard = ({ id ,cover, title }) => {
  const navigate = useNavigate();
  
  return (
      <article 
        onClick={() => navigate(routes.LOGEMENT_NAVIGATE(id))}
        className='home_articles'
      >
        <div className='home_articles_filter'/>
        <img className='home_article_img' src={cover} alt=''/>
        <p>{title}</p>
      </article>
  )
};
