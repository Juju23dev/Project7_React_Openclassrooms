import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from './../../router/routes';
import { string } from './../../asset/string/string_fr';
import './not-found.scss';

const { 
  not_found_404, 
  not_fount_text,
  not_found_return_home
} = string;

export const NotFound = () => (
  <div id='not_found_container'>
    <h1>
      {not_found_404}
    </h1>
    <p>
      {not_fount_text}
    </p>
    <Link to={routes.HOME}>
      {not_found_return_home}
    </Link>
  </div>
);
