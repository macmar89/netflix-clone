import React from 'react';
import {StyledLoader} from './StyledLoader'

export const Loader = () => {
  return (
    <StyledLoader style={{paddingTop: "100px", fontSize: '5rem'}}>
      <img src='/images/logo.png' alt=""/>
      Loading...
    </StyledLoader>
  );
};

