import React from 'react';
import PropTypes from 'prop-types';
import { BtnSubmit, FormMovies, SearchInput } from './MovieSearch.styled';
import { Container } from 'components/Container/Container';

export const MovieSearch = ({ setSearchTerm }) => {
  const sumbimHandler = e => {
    e.preventDefault();
    const { searchMovies } = Object.fromEntries(new FormData(e.currentTarget));
    if (!searchMovies.trim().length) return;
    setSearchTerm(searchMovies);
  };

  return (
    <Container>
      <FormMovies onSubmit={sumbimHandler}>
        <SearchInput
          type="search"
          placeholder="Movies searching"
          name="searchMovies"
        />
        <BtnSubmit type="submit">Search</BtnSubmit>
      </FormMovies>
    </Container>
  );
};

MovieSearch.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};
