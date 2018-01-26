import React, { Component } from 'react';
import logo from './logo.svg';
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
    return (
      <div className="App">
      <Movie title='ti' overview='cool' path='/path' />
      </div>
    );
  }
}

export default App;
