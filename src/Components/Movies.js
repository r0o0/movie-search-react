import React, { Component } from 'react';
import NowPlaying from './NowPlaying';

class Movies extends Component {
  render() {
  return (
    <main>
      <NowPlaying lang={this.props.lang} />
    </main>
  );
  }
}

export default Movies;    