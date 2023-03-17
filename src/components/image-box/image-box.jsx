import React from 'react';
import './image-box.scss'

export const ImageBox = ({ imgAlt, imgUrl, imgText = undefined }) => {
  return (
      <div id='home_background_image'>
        {
          imgText
          ? <h1>{imgText}</h1>
          :null
        }
        <img src={imgUrl} alt={imgAlt} />
        <div id='home_backgroung_image_filter'></div>
      </div>
  )
}