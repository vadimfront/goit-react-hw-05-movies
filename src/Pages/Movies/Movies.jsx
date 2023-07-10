import React, { useEffect, useState } from 'react';
import { useFetch } from 'hooks/useFetch';
import { MovieSearch } from 'components/MovieSearch/MovieSearch';
import { MovieSearchResults } from 'components/MovieSearchResults/MovieSearchResults';
import { Spinner } from 'components/Spinner/Spinner';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { useSearchParams } from 'react-router-dom';
import { isEmptyObject } from 'helpers/helpers';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const { loading, data, error } = useFetch(
    query && `search/movie?query=${query}&include_adult=false&page=1`
  );

  useEffect(() => {
    if (searchTerm.length) setSearchParams({ query: searchTerm });
  }, [searchTerm, setSearchParams]);

  return (
    <>
      {loading && <Spinner />}
      {error && <ErrorMessage />}
      <MovieSearch setSearchTerm={setSearchTerm} />
      {!isEmptyObject(data) ? <MovieSearchResults moviesdata={data} /> : null}
    </>
  );
};

export default Movies;
