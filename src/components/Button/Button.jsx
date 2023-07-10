import React from 'react';
import { Btn } from './Button.styles';

export const Button = ({ clickHandler, children }) => {
  return <Btn onClick={clickHandler}>{children}</Btn>;
};
