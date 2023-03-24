import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import './loader.scss';

/**
 * @Loader is a component for picture rendering
 * @returns a component that use the @MagnifyingGlass from react-loader-spinner lib 
 * Its use by @Home & @Location when data is loading  
**/

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
