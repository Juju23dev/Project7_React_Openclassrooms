import React, { useState, useEffect } from 'react';
import './location.scss'
import { useParams } from 'react-router-dom';
import { getContentById, isIdValid } from './../../data/index';
import { ImageCarrousel } from '../../components/image-caroussel/image-caroussel';
import { NotFound } from '../not-found/not-found';

const UrlVerifier = ({ children, id }) => {
  return isIdValid(id) 
    ? children
    : <NotFound />
}

export const Location = () => {
  const { id } = useParams();
  const [content, setContent] = useState(getContentById(id));

  useEffect(() => {
    setContent((current) => {
      const actualContent = getContentById(id)
      
      if (actualContent !== current){
        return actualContent;
      }

      return current;
    })
  }, [id])

  return (
    <UrlVerifier id={id}>
      { content 
            ? <ImageCarrousel
              images={content.pictures} 
              />
            : null
      }
    </ UrlVerifier>
  )
}