import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const LinkPrevPage = ({ location }) => {
  const backLinkHref = location.state?.form ?? '/movies';
  return <Link to={backLinkHref}>Back to prev page</Link>;
};

LinkPrevPage.propTypes = {
  location: PropTypes.object.isRequired,
};
