import React from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

import Grid from './Grid';
import Loading from './Loading';
import MovieInfo from './MovieInfo';
import BreadCrumb from './BreadCrumb';
import MovieBar from './MovieBar';
import Cast from './Cast';

import { useMovieFetch } from '../hooks/useMovieFetch';
import ImgNotFound from '../images/no_image.jpg';

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
      <MovieBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header='Cast'>
        {movie.actors.map((actor) => (
          <Cast
            key={actor.credit_id}
            actorName={actor.name}
            character={actor.character}
            imageURL={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : ImgNotFound
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
