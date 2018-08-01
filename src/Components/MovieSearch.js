 import React, { Component } from 'react';
 import MovieList from './MovieList';

 class MovieSearch extends Component {
   render() {
     console.log(this.props);
     return (
      //  <MovieList />
      <h3>Search Result</h3>
     );
   }
 }

 export default MovieSearch;