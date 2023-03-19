import React from "react";
import backgroundImage from './../../asset/images/about-us-background.jpg'
import { ImageBox } from "../../components/image-box/image-box";
import { DropdownCard } from "../../components/dropdown-card/dropdown-card";
import './about-us.scss';
import { string } from "../../asset/string/string_fr";
const {
  about_us_dropdown_fiability,
  about_us_dropdown_respect,
  about_us_dropdown_service,
  about_us_dropdown_security,  
} = string
export const AboutUs = () => {
  return(
    <>
      <ImageBox 
        id='home_background_image'
        imgUrl={backgroundImage} 
      />
      <DropdownCard 
        title='Fiabilité' 
        content={about_us_dropdown_fiability} 
      />
      <DropdownCard 
        title='Respect' 
        content={about_us_dropdown_respect}
      />
      <DropdownCard 
        title='Service' 
        content={about_us_dropdown_service}
      />
      <DropdownCard 
        title='Sécurité' 
        content={about_us_dropdown_security}
      />
    </>
  )
};