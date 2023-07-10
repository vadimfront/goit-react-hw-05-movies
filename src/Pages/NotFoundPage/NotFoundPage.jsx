import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import React from 'react';

export const NotFoundPage = () => {
  return <ErrorMessage errorCode="404" />;
};
