import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import { Home } from './../pages/home/home';
import { Location } from '../pages/location/location';
import { NotFound } from './../pages/not-found/not-found';

export const Router = () => (
  <main>
    <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.ABOUT_US} element={<>a propos</>} />
        <Route path={routes.LOGEMENT} element={<Location />} />
        <Route path={routes.NOT_FOUND} element={<NotFound />} />    
    </Routes>
  </main>
)