import React from 'react';
import PropTypes from 'prop-types';
import { NotFound, TitelH1, TitelH2, Text } from './ErrorMessage.styled';

export const ErrorMessage = ({ errorCode, errorMessage }) => {
  return (
    <NotFound>
      <TitelH1>Oops!</TitelH1>
      {errorCode && <TitelH2>Error {errorCode}</TitelH2>}
      {errorMessage && <Text>{errorMessage}</Text>}
    </NotFound>
  );
};

ErrorMessage.propTypes = {
  errorCode: PropTypes.number,
  errorMessage: PropTypes.string,
};
