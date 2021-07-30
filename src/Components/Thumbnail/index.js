import React from 'react';
import { Image } from './thumbstyles';
import { Link } from 'react-router-dom';

const Thumbnail = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt='movie-thumb' />
      </Link>
    ) : (
      <Image src={image} alt='movie-thumb' />
    )}
  </div>
);

export default Thumbnail;
