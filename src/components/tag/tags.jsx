import React from 'react';
import './tags.scss';

/**
 * @StarRating is a component
 * @prop {
 *    tag: tags
 * }
 * @return list og tags depending of props send 
 * Its use by @Location
**/

export const Tags = ({ tags }) => (
  <div id='tags_container'>
    {
      tags.map((tag, index) => (
        <div className='tag' key={index} >
          {tag}
        </div>
      ))
    }
  </div>
);
