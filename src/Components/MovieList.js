import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    // console.log('movie list',this.props);
    return (
      <li>
        <h3>{this.props.title}</h3>
      </li>
    );
  }
}

export default MovieList;