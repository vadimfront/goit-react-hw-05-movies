import { MovieCards } from 'components/MovieCards/MovieCards';
import { useFetch } from 'hooks/useFetch';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const { data } = useFetch('/trending/all/day');
  const location = useLocation();

  const moviesArr = data?.results ?? [];

  return (
    <>
      {moviesArr && <MovieCards moviesData={moviesArr} location={location} />}
    </>
  );
};

export default Home;
