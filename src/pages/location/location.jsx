import React from 'react';
import { useParams } from 'react-router-dom';
import { useDatatById } from './../../data/data-hooks';
import { Loader } from './../../components/loader/loader';
import { NotFound } from './../not-found/not-found';
import { ImageCarrousel } from './../../components/image-carroussel/image-carroussel';
import { Tags } from './../../components/tag/tags';
import { StarRating } from '../../components/stars-rating/stars-rating';
import { DropdownCard } from './../../components/dropdown-card/dropdown-card';
import { string } from './../../asset/string/string_fr';
import './location.scss';

const { 
  product_dropdown_description_title,
  product_dropdown_equipement_title
} = string;

/**
 * @Location is a page component
 * this component use the custom hook @useDataById for fectch the data needed
 * @if data is success fectch  
 *  @returns his components and all childrens of
 *  @ImageCarrousel ,@Tags ,@StarRating ,@DropdownCard
 * @else 
 *  @return @Loader or @NotFound depending on case
 * Its use By @Router
**/

export const Location = () => {
  const { id } = useParams();
  const { isLoading, data, error } = useDatatById(id);

  if (isLoading || error) {

    return isLoading ? <Loader /> : <NotFound />;
  }

  const {
    title,
    pictures,
    location,
    tags,
    host,
    rating,
    description,
    equipments
  } = data;

  const hostName = host.name.split(' ');
  const getEquipmentText = () => {
    const elements = equipments.map((element, index) => (
      <span key={index}>{element}<br /></span>
    ));

    return <>{elements}</>
  }

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
        content={getEquipmentText()} 
      />
    </div>
  )
};
