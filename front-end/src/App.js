import React, { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList/MovieList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { movieList: null };
  }

  componentDidMount() {
    let self = this;
    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=121486b23802e0b6735125ff1892f340')
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        // Examine the text in the response
        response.json().then(function(data) {
          self.setState({ movieList: data.results })
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }

  render() {
    let movies = <MovieList movies={this.state.movieList} />
    if (!this.state.movieList) {
      return (
        <div className="App">
          <h1>Loading movies.</h1>
        </div>
      );
    } else {
      return (
        <div className="App">
          {movies}
        </div>
      )
    }
  }
}

export default App;
