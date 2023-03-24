import React from 'react';
import { ReactComponent as Logo } from './../../asset/svg/footer-logo.svg';
import { string } from './../../asset/string/string_fr';
import './footer.scss';

const { footer_text } = string;

/**
 * @Footer is the footer component of the app
 * @returns his components
 * Its use by @App
**/

export const Footer = (props) => {
  return (
    <footer>
      <Logo />
      <p>
        { footer_text }
      </p>
    </footer>
  )
};
