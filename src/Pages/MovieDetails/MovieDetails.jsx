import React, { useRef } from 'react';
import { Container } from 'components/Container/Container';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Spinner } from 'components/Spinner/Spinner';
import { isEmptyObject } from 'helpers/helpers';
import { useFetch } from 'hooks/useFetch';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { CustomLink, ListLinks, ListLinksItem } from './MovieDetails.styled';
import { LinkPrevPage } from 'components/LinkPrevPage/LinkPrevPage';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { loading, data, error } = useFetch(`/movie/${movieId}`);
  const location = useLocation();
  const backLinkLocationRef = useRef(location);

  const { title, poster_path, overview, genres } = data;
  return (
    <Container>
      {loading && <Spinner />}
      {error && (
        <ErrorMessage
          errorCode={error}
          errorMessage={'We are already working to fix this'}
        />
      )}
      {!isEmptyObject(location) && (
        <LinkPrevPage location={backLinkLocationRef.current} />
      )}
      {!isEmptyObject(data) && (
        <div className="movie_details">
          <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />
          <p>{title}</p>
          <p>User score: {Math.round(data.vote_average * 10)}%</p>
          <p>Overview: {overview}</p>
          {<p>Genres: {genres.map(genre => genre.name).join(' ')}</p>}
        </div>
      )}
      <ListLinks>
        <ListLinksItem>
          <CustomLink to="cast">Cast</CustomLink>
        </ListLinksItem>
        <ListLinksItem>
          <CustomLink to="reviews">Reviews</CustomLink>
        </ListLinksItem>
      </ListLinks>
      <Outlet />
    </Container>
  );
};

export default MovieDetails;
