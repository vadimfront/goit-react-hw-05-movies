import React from 'react';
import PropTypes from 'prop-types';
import { Author, List, ListContent, ListItem } from './ReviewsList.styled';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

export const ReviewsList = ({ reviewsData }) => {
  const { results } = reviewsData;
  if (!results.length)
    return <ErrorMessage errorMessage="There is no content to load" />;

  return (
    <List>
      {results.map(({ id, author, content }) => (
        <ListItem key={id}>
          <Author>{author}</Author>
          <ListContent>{content}</ListContent>
        </ListItem>
      ))}
    </List>
  );
};

ReviewsList.propTypes = {
  reviewsData: PropTypes.shape({
    id: PropTypes.number,
    page: PropTypes.number,
    results: PropTypes.array.isRequired,
    total_pages: PropTypes.number,
    total_results: PropTypes.number,
  }),
};
