import React from 'react';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumbnail from './Thumbnail';
import SearchBar from './SearchBar';
import Button from './Button';
import Loading from './Loading';
import ImgNotFound from '../images/no_image.jpg';

import { useHomeFetch } from '../hooks/useHomeFetch';

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();
  console.log(state);

  if (error) {
    return <div> Something went wrong..please try again. </div>;
  }
  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? 'Search Results' : 'Popular'}>
        {state.results.map((movie) => (
          <Thumbnail
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : ImgNotFound
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Loading />}
      {state.page < state.total_pages && !loading && (
        <Button text='Show More' callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
