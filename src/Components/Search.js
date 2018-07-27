import React, { Component } from 'react';
import SearchForm from './SearchForm';

class MovieSearch extends Component {
  componentDidMount() {
    const key = process.env.REACT_APP_TMDb_API_KEY;

    // get image url from TMDb API
    fetch(`//api.themoviedb.org/3/configuration?api_key=${key}`)
      .then(res => res.json())
      .then(data => console.log(data));
  }
  render() {
  return (
    <main>
      <SearchForm lang={this.props.lang} />
    </main>
  );
  }
}

export default MovieSearch;