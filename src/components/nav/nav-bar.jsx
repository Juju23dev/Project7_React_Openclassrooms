import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from './../../asset/svg/logo.svg'
import { routes } from "../../router/routes";
import { string } from "../../asset/string/string_fr";
import './nav-bar.scss'

const { nav_home, nav_about_us } = string;

export const NavBar = (props) => {
  return (
    <nav>
      <Logo />
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
}