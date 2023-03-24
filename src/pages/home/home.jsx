import React from 'react';
import { ImageBox } from './../../components/image-box/image-box';
import { HomeCardList } from './../../components/home-card-list/home-card-list';
import { string } from './../../asset/string/string_fr';
import backgroundImage from './../../asset/images/home-background.jpg';
import './home.scss';

const { home_background_image_text, home_background_image_alt } = string;

/**
 * @Home is a page component
 * @returns his components and all childrens of 
 * @ImageBox , @HomeCardList
 * Its use By @Router
**/

export const Home = () => (
    <div id='home_container'>
      <ImageBox
        id='home_background_image'
        imgText={home_background_image_text}
        imgAlt={home_background_image_alt}
        imgUrl={backgroundImage}
      />
      <HomeCardList />
    </div>
);
