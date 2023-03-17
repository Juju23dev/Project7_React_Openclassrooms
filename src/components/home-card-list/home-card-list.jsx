import React from 'react';
import './home-card-list.scss';
import { LocationCard } from '../location-card/location-card';

export const HomeCardList = ({ data }) => {
  return (
    <div id='home_car_list_container' >
      {
        data.map((article) => {
          const { cover , title, id } = article;
          
          return (
            <LocationCard 
            key={id}
            cover={cover} 
            title={title} 
            />
          )})
      }
    </div>
  )
}