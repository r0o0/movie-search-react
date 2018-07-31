import React, { Component } from 'react';
import api from '../Assets/API';
import MovieList from './MovieList';
import './CSS/NowPlaying.scss';

class NowPlaying extends Component {
  state = {
      lang: this.props.lang
  }
  componentDidMount() {
    // call api with default language settings
    const settings = this._changeLang(this.state.lang);
    this._requestList(settings);
  }
  componentDidUpdate(prevState) {
    // check if the language has changed then
    // if the changed language is different from the previous one
    // change this components language and request another api call
    if (prevState.lang !== this.props.lang) {
      this.setState({
        lang: this.props.lang
      });
      const settings = this._changeLang(this.props.lang);
      this._requestList(settings);
    }
  }
  _changeLang(lang) {
    // get current language & region
    const region = lang.substr(3, 4)
    // set settings of api
    const settings = `${api.language}${lang}&${api.page}1&${api.region}${region}`;
    console.log(settings);
    return settings;
  }
  _requestList(settings) {
    // request top 10 now playing movie list from TMDb api
    fetch(`${api.tmdbURL}/movie/${api.nowPlaying}&${settings}`)
    .then(res => res.json())
    .then(data => {
      const topTen = [];
      for (let i=0, l=10; i < l; i++) {
        topTen.push(data.results[i]);
      }
      console.log('10', topTen);
      this.setState({
        movies: topTen
      });
    });
  }
  _getList() {
    // get movie list
    const movie = [];
    for (let list in this.state.movies) {
      console.log(this.state.movies[list]);
      const mv = this.state.movies[list];
      movie.push(<MovieList topN={+list + 1} title={mv.title} poster={mv.poster_path} vote={mv.vote_average} released={mv.release_date} adult={mv.adult} key={list} />);
    }
    return movie;
  }
  render() {
    return (
      <ul className="mv-now-playing">
        {this._getList()}
      </ul>
    );
  }
}

export default NowPlaying;
