import React, { Component } from 'react';
import SearchForm from './SearchForm';

class MovieSearch extends Component {
  render() {
  return (
    <main>
      <SearchForm lang={this.props.lang} />
    </main>
  );
  }
}

export default MovieSearch;