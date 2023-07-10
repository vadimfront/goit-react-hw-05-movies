import React from 'react';
import PropTypes from 'prop-types';
import { ContainerWrapper } from './Container.styled';

export const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
