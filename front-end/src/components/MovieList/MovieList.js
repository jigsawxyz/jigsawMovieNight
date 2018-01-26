import React from 'react';
import Movie from '../Movie/Movie'

const MovieList = (props) => {
  let movies = props.movies.map(function(movie) {
    return <Movie key={movie.id} title={movie.title} overview={movie.overview} path={'https://image.tmdb.org/t/p/w500' + movie.poster_path} />
  })
  return(
    <div>
      {movies}
    </div>
  )
}

export default MovieList;
