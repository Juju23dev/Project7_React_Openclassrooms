import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './../pages/home/home';
import { AboutUs } from './../pages/about-us/about-us';
import { Location } from './../pages/location/location';
import { NotFound } from './../pages/not-found/not-found';
import { routes } from './routes';

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
