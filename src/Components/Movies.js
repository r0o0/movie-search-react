import React, { Component } from 'react';
import NowPlaying from './NowPlaying';


class MovieSearch extends Component {
  componentDidMount() {
  }
  render() {
  return (
    <main>
      <NowPlaying lang={this.props.lang} />
    </main>
  );
  }
}

export default MovieSearch;