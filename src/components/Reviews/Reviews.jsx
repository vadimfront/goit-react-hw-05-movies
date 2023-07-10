import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { Spinner } from 'components/Spinner/Spinner';
import { isEmptyObject } from 'helpers/helpers';
import { useFetch } from 'hooks/useFetch';
import React from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const { loading, data, error } = useFetch(`/movie/${movieId}/reviews`);

  return (
    <>
      {loading && <Spinner />}
      {error && (
        <ErrorMessage errorCode={error} errorMessage="Something went wrong" />
      )}
      {!isEmptyObject(data) && <ReviewsList reviewsData={data} />}
    </>
  );
};

export default Reviews;
