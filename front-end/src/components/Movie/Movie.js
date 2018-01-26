import React from 'react';

const Movie = (props) => {
  return(
    <div>
      <p>{ props.title }</p>
      <p>{ props.overview }</p>
      <p>{ props.path }</p>
    </div>
  )
}

export default Movie;
