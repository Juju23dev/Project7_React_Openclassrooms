import React, { useState } from 'react';
import { ReactComponent as UpArrow } from './../../asset/svg/up-arrow.svg';
import { ReactComponent as DownArrow } from './../../asset/svg/down-arrow.svg';
import './dropdown-card.scss';

export const DropdownCard = ({ title, content, }) => {
  const [open, setopen] = useState(false);

  const toggleCard = () => setopen((current) => !current);

  return (
    <article className='drop_down_container'>
      <div className='drop_down_title'>
        <p>{title}</p>
        {
          open 
          ? <UpArrow onClick={toggleCard}/> 
          : <DownArrow onClick={toggleCard}/> 
        }
      </div>
      {
        open 
        ? <div className='drop_down_content'>
            <p>{content}</p>
          </div>
        : null
      }
    </article>
  )
};