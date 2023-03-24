import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './../pages/home/home';
import { AboutUs } from './../pages/about-us/about-us';
import { Location } from './../pages/location/location';
import { NotFound } from './../pages/not-found/not-found';
import { routes } from './routes';

/**
 * @Router the function in charge of routing
 * @returns Component deppending on the route use 
 * Its use By @App
**/

export const Router = () => (
  <main>
    <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.ABOUT_US} element={<AboutUs />} />
        <Route path={routes.LOGEMENT} element={<Location />} />
        <Route path={routes.NOT_FOUND} element={<NotFound />} />    
    </Routes>
  </main>
);
