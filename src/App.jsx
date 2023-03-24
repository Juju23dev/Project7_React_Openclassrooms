import React from 'react';
import { NavBar } from './components/nav/nav-bar';
import { Router } from './router/router';
import { Footer } from './components/footer/footer';

/**
 * @App is the App function component 
 * @returns all the child compoments of @NavBar @Router & @Footer
 * it's use by @root
**/

export const App = () => (
  <>
    <NavBar />
    <Router />
    <Footer />
  </>
);
