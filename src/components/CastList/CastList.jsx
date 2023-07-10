import React from 'react';
import PropTypes from 'prop-types';
import noImage from '../../assets/image-not-found.jpg';
import { Photo, Item, List } from './CastList.styled';

export const CastList = ({ castData, elemToLoad }) => {
  const { cast } = castData;
  const slicedItems = cast.slice(0, elemToLoad);
  return (
    <List>
      {cast.length
        ? slicedItems.map(({ id, name, profile_path }) => (
            <Item key={id}>
              <p>{name}</p>
              <Photo
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                    : noImage
                }
                alt={name}
              />
            </Item>
          ))
        : 'There is no cast'}
    </List>
  );
};

CastList.propTypes = {
  castData: PropTypes.shape({
    cast: PropTypes.array,
    crew: PropTypes.array,
    id: PropTypes.number,
  }).isRequired,
  elemToLoad: PropTypes.number,
};
