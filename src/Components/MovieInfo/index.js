import React from 'react';
import Thumbnail from '../Thumbnail';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { Wrapper, Content, Text } from './movieInfoStyles';
import ImgNotFound from '../../images/no_image.jpg';

const MovieInfo = ({ movie }) => (
  <Wrapper backdrop={movie.backdrop_path}>
    <Content>
      <Thumbnail
        image={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : ImgNotFound
        }
        clickable={false}
      />
      <Text>
        <h1>{movie.title}</h1>
        <p> {movie.overview}</p>

        <div className='ratings-directors'>
          <div>
            <h3>Ratings </h3>
            <div className='score'>{movie.vote_average}</div>
          </div>
          <div className='director'>
            <h3>Director{movie.directors.length > 1 ? 's' : ''}</h3>
            {movie.directors.map((director) => (
              <p key={director.credit_id}> {director.name} </p>
            ))}
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
);

export default MovieInfo;
