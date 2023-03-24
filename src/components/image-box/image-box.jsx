import React from 'react';
import './image-box.scss';

export const ImageBox = ({ 
  id,
  imgUrl,
  imgAlt = '',
  imgText = undefined,
  children = null 
}) => {
  return (
      <div id={id}>
        {
          imgText
          ? <h1>{imgText}</h1>
          :null
        }
        <img src={imgUrl} alt={imgAlt} />
        <div id={`${id}_filter`}></div>
        { children ?? null } 
      </div>
  )
};
