import React, { Component } from 'react';
import api from '../Assets/API';
import Movie from './Movie';
import Loader from './Loader';
import './CSS/Movies.scss';
import {addClass, removeClass} from '../Assets/Helpers';

class Movies extends Component {
  state = {
      lang: this.props.lang
  }
  componentDidMount() {
    this._triggerLoader();
    // this._removeLoader();
    // call api with default language settings
    const settings = this._changeLang(this.state.lang);
    this._requestList('nowplaying', settings);
  }
  componentDidUpdate(prevState) {
    // check if the language has changed then
    // if the changed language is different from previous one
    // change component's language and request another api call
    if (prevState.lang !== this.props.lang) {
      this._triggerLoader();
      this.setState({
        lang: this.props.lang
      });
      // if there is no keyword
      if (this.props.keyword === undefined) {
        // only update to new language and region
        const settings = this._changeLang(this.props.lang);
        this._requestList('nowplaying', settings);
      } else {
        // update language with keyword search result
        const settings = this._getSearchResult(this.props.lang, this.props.keyword);
        this._requestList('search', settings);
      }
    }
    // if there is a keyword and the keyword is different from previous one
    // request another api call
    if (this.props.keyword !== undefined && prevState.keyword !== this.props.keyword) {
      this._triggerLoader();
      this.setState({
        keyword: this.props.keyword
      });
      const settings = this._getSearchResult(this.props.lang, this.props.keyword);
      this._requestList('search', settings);
    }
  }
  _triggerLoader() {
    removeClass('.loader', 'hide');
    addClass('.mv-list-wrapper', 'hide');
  }
  _removeLoader() {
    addClass('.loader', 'hide');
    removeClass('.mv-list-wrapper', 'hide');
  }
  // change language and region settings
  _changeLang(lang) {
    // get current language & region
    const region = lang.substr(3, 4)
    // set settings of api
    const settings = `${api.language}${lang}&${api.page}1&${api.region}${region}`;
    return settings;
  }
  // search movie settings
  _getSearchResult(lang, keyword) {
    const settings = `${api.language}${lang}&${api.query}${keyword}&${api.page}1`;
    return settings;
  }
  // request api for movies
  _requestList(type, settings) {
    // store api url
    let url;
    
    if (type === 'nowplaying') {
      // request top 10 now playing movie list from TMDb api
      url = `${api.tmdbURL}/${api.nowPlaying}&${settings}`;

      fetch(url)
        .then(res => res.json())
        .then(data => {
          const topTen = [];
          for (let i = 0, l = 10; i < l; i++) {
            topTen.push(data.results[i]);
          }
          this.setState({
            movies: topTen
          });
        }).then( this._removeLoader);
    } else if (type === 'search') {
      // request search result of keyword from TMDb api
      url =  `${api.tmdbURL}/${api.movieSearch}&${settings}`;

      fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ movies: data.results }))
      .then(this._removeLoader);
    } else {
      console.error('need to mention type');
    }
  }
  _getList() {
    // get movie list
    const movie = [];
    for (let list in this.state.movies) {
      const mv = this.state.movies[list];
      movie.push(<Movie topN={+list + 1} title={mv.title} poster={mv.poster_path} vote={mv.vote_average} released={mv.release_date} adult={mv.adult} key={list} />);
    }
    return movie;
  }
  render() {
    return (
      <div className="mv-wrapper">
        <div className="mv-list-wrapper">
          <ul className="mv-lists">
            {this._getList()}
          </ul>
        </div>
        <Loader />
      </div>
    );
  }
}

export default Movies;
