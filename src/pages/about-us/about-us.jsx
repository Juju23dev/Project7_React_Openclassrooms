import React from 'react';
import { ImageBox } from './../../components/image-box/image-box';
import { DropdownCard } from './../../components/dropdown-card/dropdown-card';
import { string } from './../../asset/string/string_fr';
import backgroundImage from './../../asset/images/about-us-background.jpg';
import './about-us.scss';

const {
  about_us_dropdown_fiability_title,
  about_us_dropdown_fiability_content,
  about_us_dropdown_respect_title,
  about_us_dropdown_respect_content,
  about_us_dropdown_service_title,
  about_us_dropdown_service_content,
  about_us_dropdown_security_title,
  about_us_dropdown_security_content
} = string;

/**
 * @AboutUs is a page component
 * @returns his components and all childrens of 
 * @ImageBox , @DropdownCard
 * Its use By @Router
**/

export const AboutUs = () => {
  return(
    <section id='about_us_section'>
      <ImageBox 
        id='about_us_background_image'
        imgUrl={backgroundImage} 
      />
      <DropdownCard 
        title={about_us_dropdown_fiability_title} 
        content={about_us_dropdown_fiability_content} 
      />
      <DropdownCard 
        title={about_us_dropdown_respect_title}
        content={about_us_dropdown_respect_content}
      />
      <DropdownCard 
        title={about_us_dropdown_service_title}
        content={about_us_dropdown_service_content}
      />
      <DropdownCard 
        title={about_us_dropdown_security_title} 
        content={about_us_dropdown_security_content}
      />
    </section>
  )
};
