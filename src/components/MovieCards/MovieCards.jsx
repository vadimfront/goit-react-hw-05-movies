import React from 'react';
import PropTypes from 'prop-types';
import noImage from '../../assets/image-not-found.jpg';
import { Container } from 'components/Container/Container';
import {
  CardContent,
  CardDescription,
  CardItem,
  CardLink,
  CardList,
  CardPoster,
  CardTitle,
} from './MovieCard.styled';
import { truncateText } from 'helpers/helpers';

export const MovieCards = ({ moviesData, location }) => {
  return (
    <Container>
      <CardList>
        {moviesData.map(({ id, title, name, poster_path, overview }) => (
          <CardItem key={id}>
            <CardLink to={`/movies/${id}`} state={{ form: location }}>
              <CardPoster
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
                    : noImage
                }
                alt={title ?? name}
              />
              <CardContent>
                <CardTitle>{title ?? name}</CardTitle>
                <CardDescription>{truncateText(150, overview)}</CardDescription>
              </CardContent>
            </CardLink>
          </CardItem>
        ))}
      </CardList>
    </Container>
  );
};

MovieCards.propTypes = {
  moviesData: PropTypes.arrayOf(
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
    }).isRequired
  ),
  location: PropTypes.object.isRequired,
};
