import React from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

import Grid from './Grid';
import Loading from './Loading';
import MovieInfo from './MovieInfo';

import { useMovieFetch } from '../hooks/useMovieFetch';
import BreadCrumb from './BreadCrumb';

const Movie = () => {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);

  console.log(movie);

  if (loading) return <Loading />;
  if (error) return <div>Something went wrong... :(</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
    </>
  );
};

export default Movie;
