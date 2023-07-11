import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const LinkPrevPage = ({ location }) => {
  const backLinkLocationRef = useRef(location);
  const backLinkHref = backLinkLocationRef.current.state?.form ?? '/';
  return <Link to={backLinkHref}>Back to prev page</Link>;
};

LinkPrevPage.propTypes = {
  location: PropTypes.object.isRequired,
};
