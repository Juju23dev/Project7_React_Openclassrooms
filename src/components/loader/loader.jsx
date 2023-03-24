import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import './loader.scss';

export const Loader = () => (
  <div id='loader_container'>
    <MagnifyingGlass
      visible={true}
      ariaLabel='MagnifyingGlass-loading'
      wrapperStyle={{}}
      wrapperClass='MagnifyingGlass-wrapper'
      glassColor = '#c0efff'
      color = '#e15b64'
    />
  </div>
);
