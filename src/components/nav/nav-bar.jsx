import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './../../asset/svg/logo.svg';
import { routes } from './../../router/routes';
import { string } from './../../asset/string/string_fr';
import './nav-bar.scss';

const { nav_home, nav_about_us } = string;

/**
 * @NavBar is the Nav component of the app
 * @return his components 
 * Its use by @App
**/

export const NavBar = () => {
  return (
    <nav>
      <div id='nav_logo_container'>
        <Logo />
      </div>
      <div>
        <Link to={routes.HOME}>
          { nav_home }
        </Link>
        <Link to={routes.ABOUT_US}>
         { nav_about_us }
        </Link>
      </div>
    </nav>
  )
};
