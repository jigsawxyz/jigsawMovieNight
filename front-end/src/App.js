import React, { Component } from 'react';
import './App.css';
import Movie from './components/Movie/Movie';


class App extends Component {
  state = {
    movieList: [
      {
        id: '1',
        title: 'Some-title',
        overview: 'Nice movie',
        posterPath: '/path'
      },
      {
        id: '2',
        title: 'allan',
        overview: 'pizza',
        posterPath: '/path'
      }
  ]
  }
  render() {
    let movies = this.state.movieList.map(function(movie) {
      return <Movie key={movie.id} title={movie.title} overview={movie.overview} path={movie.posterPath} />
    })

    return (
      <div className="App">
        {movies}
      </div>
    );
  }
}

export default App;
