import React from 'react';
import { movies } from '../data';
import Movie from './Movie';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => <div key={index}><Movie movie={movie} /></div>)}
    </div>
  );
};

export default Movies;
