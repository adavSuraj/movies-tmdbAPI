import React from 'react';
import { Wrapper, Image } from './castStyles';

const Cast = ({ actorName, character, imageURL }) => (
  <Wrapper>
    <Image src={imageURL} alt='cast-img' />
    <h3> {actorName}</h3>
    <p> as {character}</p>
  </Wrapper>
);

export default Cast;
