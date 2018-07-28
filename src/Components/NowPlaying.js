import React, {Component} from 'react';
import {el} from '../Assets/Helpers';
import api from '../Assets/API';
import MovieList from './MovieList';

class NowPlaying extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const curr_lang = el('html').getAttribute('lang');
    const curr_region = curr_lang.substr(3, 4);
    const settings = `${api.language}${curr_lang}&${api.page}1&${api.region}${curr_region}`;

    fetch(`${api.tmdbURL}/movie/${api.nowPlaying}&${settings}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        movies: data.results
      });
    });
  }
  _getList() {
    const movie = [];
    
    for (let list in this.state.movies) {
      const movieList = this.state.movies[list];
      movie.push(<MovieList title={movieList.title} key={list} />);
    }
    return movie;
  }
  render() {
    return (
      <ul className="movies-playing-now">
        {this._getList()}
      </ul>
    );
  }
}

export default NowPlaying;
