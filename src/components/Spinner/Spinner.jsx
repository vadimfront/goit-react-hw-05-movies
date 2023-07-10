import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Overlay } from './Spinner.styled';

export const Spinner = () => {
  return (
    <Overlay>
      <ThreeDots color="#000" />
    </Overlay>
  );
};
