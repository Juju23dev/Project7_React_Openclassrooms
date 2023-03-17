import React from 'react';
import './home.scss'
import backgroundImage from './../../asset/images/home-background.jpg'
import { ImageBox } from '../../components/image-box/image-box';
import { HomeCardList } from '../../components/home-card-list/home-card-list';
import { string } from '../../asset/string/string_fr';
import { data } from './../../data/index';
const { home_background_image_text, home_background_image_alt } = string;

export const Home = () => {

  return (
    <div id='home_container'>
      <ImageBox 
        imgText={home_background_image_text}
        imgAlt={home_background_image_alt}
        imgUrl={backgroundImage}
      />
      <HomeCardList data={JSON.parse(data)}/>
    </div>
  )
}
