import React, { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList/MovieList';


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
    let movies = <MovieList movies={this.state.movieList} />

    return (
      <div className="App">
        {movies}
      </div>
    );
  }
}

export default App;
