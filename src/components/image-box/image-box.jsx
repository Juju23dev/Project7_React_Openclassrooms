import React from 'react';
import './image-box.scss';

/**
 * @HomeCardList is a component for picture rendering
 * @prop {
 *    id: number,
 *    imgUrl: string,
 *    imgAlt:string = '' ,
 *    imgText:string = undefined,
 *    children: ReactElement = null 
 * }
 * @returns Diffrent style of image card depending of his props
 * Its use by @ImageCaroussel ,@AboutUs & @Home
**/

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
