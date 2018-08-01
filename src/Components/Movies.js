import React, { Component } from 'react';
import NowPlaying from './NowPlaying';
import MovieSearch from './MovieSearch';

class Movies extends Component {
  render() {
    console.log('in Movies', this.props);
  return (
    <main>
      <NowPlaying lang={this.props.lang} />
      <MovieSearch keyword={this.props.keyword} />
    </main>
  );
  }
}

export default Movies;    