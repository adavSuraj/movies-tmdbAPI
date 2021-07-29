import React from 'react';
import { Image } from './thumbstyles';

const Thumbnail = ({ image, movieId, clickable }) => (
  <div>
    <Image src={image} alt='Movie Thumbnail' />
  </div>
);

export default Thumbnail;
