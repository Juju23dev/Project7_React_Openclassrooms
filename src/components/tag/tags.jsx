import React from 'react';
import './tags.scss';

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
