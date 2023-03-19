import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import { Home } from './../pages/home/home';
import { LocationMiddleware } from '../pages/location/location-middleware';
import { AboutUs } from '../pages/about-us/about-us';
import { NotFound } from './../pages/not-found/not-found';

export const Router = () => (
  <main>
    <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.ABOUT_US} element={<AboutUs />} />
        <Route path={routes.LOGEMENT} element={<LocationMiddleware />} />
        <Route path={routes.NOT_FOUND} element={<NotFound />} />    
    </Routes>
  </main>
)