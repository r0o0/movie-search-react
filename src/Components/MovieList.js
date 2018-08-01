import React, { Component } from 'react';
import Movies from './Movies';

class MovieList extends Component {
  render() {
  return (
    <main>
      <Movies lang={this.props.lang} keyword={this.props.keyword} />
    </main>
  );
  }
}

export default MovieList;