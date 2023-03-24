import React from 'react';
import { LocationCard } from './../location-card/location-card';
import { Loader } from '../loader/loader';
import { useData } from '../../data/data-hooks';
import { string } from '../../asset/string/string_fr';
import './home-card-list.scss';

const { home_error } = string;

export const HomeCardList = () => {
  const { isLoading, error, data} = useData();

  if (isLoading || error) {

    return isLoading ? <Loader /> : <h1>{home_error}</h1>;
  }

  return (
    <section id='home_grid_container'>
      <div id='home_car_list_container' >
        {
          data.map((article) => {
            const { cover , title, id } = article;
            return (
              <LocationCard
              key={id}
              id={id}
              cover={cover} 
              title={title} 
              />
            )})
        }
      </div>
    </section>
  )
};
