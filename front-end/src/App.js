import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    movielist: [
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
      <h2> Hi </h2>
      </div>
    );
  }
}

export default App;
