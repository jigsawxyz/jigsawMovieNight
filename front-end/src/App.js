import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {    
    }

  }

  getData() {
    Axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=121486b23802e0b6735125ff1892f340')
          .then(res => {
            this.setState({movies: res.data})
            
            return console.log(this.state)
            
          })
          .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getData()
  }
  render() {
    const { movies } = this.state
    return (
      <div className="App">
        <header className="App-header">  
          <h1 className="App-title">My Favourite Films</h1>            
        </header>
          {movies && movies.results.map(movie => <h2>{movie.title}</h2>)}        
      </div>
    );
  }
}

export default App;
