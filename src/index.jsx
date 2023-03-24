import React, { StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './index.scss';

/**
 * @root is the function render all the app
 * @returns all the childs compoments of @App
 * @StrictMode is use only for dev
 * @BrowserRouter is use for the app routing 
**/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
