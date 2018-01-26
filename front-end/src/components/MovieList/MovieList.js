import React from 'react';
import Movie from '../Movie/Movie'

const MovieList = (props) => {
  let movies = props.movies.map(function(movie) {
    return <Movie key={movie.id} title={movie.title} overview={movie.overview} path={movie.posterPath} />
  })
  return(
    <div>
      {movies}
    </div>
  )
}

export default MovieList;
