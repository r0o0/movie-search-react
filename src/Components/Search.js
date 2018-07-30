import React, { Component } from 'react';
import SearchForm from './SearchForm';
import NowPlaying from './NowPlaying';


class MovieSearch extends Component {
  componentDidMount() {
  }
  render() {
  return (
    <main>
      <SearchForm lang={this.props.lang} />
      <NowPlaying lang={this.props.lang} />
    </main>
  );
  }
}

export default MovieSearch;