import React from 'react';
import { NavBar } from './components/nav/nav-bar';
import { Router } from './router/router';
import { Footer } from './components/footer/footer';

export const App = () => (
  <>
    <NavBar />
    <Router />
    <Footer />
  </>
);
