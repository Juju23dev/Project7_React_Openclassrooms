import React, { useMemo } from 'react';
import './location.scss'
import { ImageCarrousel } from './../../components/image-caroussel/image-caroussel';
import { Tags } from './../../components/tag/tags';
import { StarRating } from './../../components/stars-rating/start-rating';
import { DropdownCard } from './../../components/dropdown-card/dropdown-card';
import { string } from '../../asset/string/string_fr';

const { 
  product_dropdown_description_title,
  product_dropdown_equipement_title
} = string;

export const Location = ({ content }) => {
  const {
    title,
    pictures,
    location,
    tags,
    host,
    rating,
    description,
    equipments
  } = content;

  const hostName = host.name.split(' ');
  const equipmentText = useMemo(() => {
    const elements = equipments.map((element, index) => {
      return <span key={index}>{element}<br /></span>
  })
    return <>{elements}</>
  },[equipments])

  return (
    <div id='location_container'>
      <ImageCarrousel
        images={pictures} 
      />
      <section>
        <div id='left_container'>
          <h1>{title}</h1>
          <p>{location}</p>
          <Tags tags={tags} />
        </div>
        <div id='right_container'>
          <StarRating rate={rating} />
          <div>
            <p>
              {hostName[0]}<br/> 
              {hostName[1]}
            </p>
            <img src={host.picture} alt='' />
          </div>
        </div>
      </section>
      <DropdownCard 
        title={product_dropdown_description_title} 
        content={description} 
      />
      <DropdownCard 
        title={product_dropdown_equipement_title} 
        content={equipmentText} 
      />
    </div>
  )
}