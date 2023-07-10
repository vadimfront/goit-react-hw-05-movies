import React from 'react';
import PropTypes from 'prop-types';
import { MovieCards } from 'components/MovieCards/MovieCards';
import { useLocation } from 'react-router-dom';

export const MovieSearchResults = ({ moviesdata }) => {
  const location = useLocation();
  const movieList = moviesdata.results ?? [];
  return <MovieCards moviesData={movieList} location={location} />;
};

MovieSearchResults.propTypes = {
  moviesdata: PropTypes.shape({
    page: PropTypes.number,
    results: PropTypes.arrayOf(
      PropTypes.shape({
        adult: PropTypes.bool,
        backdrop_path: PropTypes.string,
        genre_ids: PropTypes.array,
        id: PropTypes.number,
        media_type: PropTypes.string,
        original_language: PropTypes.string,
        original_title: PropTypes.string,
        overview: PropTypes.string,
        popularity: PropTypes.number,
        poster_path: PropTypes.string,
        release_date: PropTypes.string,
        title: PropTypes.string,
        video: PropTypes.bool,
        vote_average: PropTypes.number,
        vote_count: PropTypes.number,
      })
    ).isRequired,
    total_pages: PropTypes.number,
    total_results: PropTypes.number,
  }).isRequired,
};
