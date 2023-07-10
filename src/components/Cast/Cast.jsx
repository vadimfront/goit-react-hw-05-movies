import React, { useState } from 'react';
import { CastList } from 'components/CastList/CastList';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Spinner } from 'components/Spinner/Spinner';
import { isEmptyObject } from 'helpers/helpers';
import { useFetch } from 'hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Button } from 'components/Button/Button';

const Cast = () => {
  const { movieId } = useParams();
  const { loading, data, error } = useFetch(`/movie/${movieId}/credits`);
  const [elemToLoad, setElemToLoad] = useState(10);

  const clickHandler = () => {
    setElemToLoad(prevState => prevState + 10);
  };

  const isElementToLoad = () => {
    const { cast } = data;
    const maxItems = cast.length;
    if (elemToLoad > maxItems) return false;
    return true;
  };

  return (
    <>
      {loading && <Spinner />}
      {!(loading && error) && !isEmptyObject(data) && (
        <CastList castData={data} elemToLoad={elemToLoad} />
      )}
      {!isEmptyObject(data) && isElementToLoad() && (
        <Button clickHandler={clickHandler}>Load More</Button>
      )}
      {error && <ErrorMessage errorMessage="Something went wrong" />}
    </>
  );
};

export default Cast;
