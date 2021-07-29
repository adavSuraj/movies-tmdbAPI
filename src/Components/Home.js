import React, { useEffect, useState } from 'react';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumbnail from './Thumbnail';
import SearchBar from './SearchBar';
// import ImgNotFound from '../images/#.jpg'

import { useHomeFetch } from '../hooks/useHomeFetch';

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm } = useHomeFetch();
  console.log(state);
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
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : null
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Home;
