import React from 'react';

const Movie = (props) => {
  return(
    <div>
      <p>{ props.title }</p>
      <img src={ props.path } alt='movie' style={{width: '100px'}}/>
      <p>{ props.overview }</p>
    </div>
  )
}

export default Movie;
