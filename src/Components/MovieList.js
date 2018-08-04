import React, { Component } from 'react';
import api from '../Assets/API';
import Movies from './Movies';
import { addClass, removeClass } from '../Assets/Helpers';
import './CSS/MovieList.scss';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    this._init();
  }
  componentDidUpdate(prevState) {
    this._init();
  
    if (this.props.keyword !== undefined && prevState.keyword !== this.props.keyword) {
      this._getTotalResult(this.props.lang, this.props.keyword);
    }
  }
  _getTotalResult(lang, keyword) {
    const settings = `${api.language}${lang}&${api.query}${keyword}&${api.page}1`;
    const url = `${api.tmdbURL}/${api.movieSearch}&${settings}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          total_results: data.total_results
        })  
      }).then(this._addSearchResult);
  }
  _init() {
    addClass('.search-title', 'hide');
  }
  _addSearchResult() {
    removeClass('.search-title', 'hide');
  }
  render() {
    return (
      <main>
        <h3 className="search-title"><span className="search-result">{this.state.total_results}</span> search results for <span className="search-keyword">{this.props.keyword}</span></h3>
        <Movies lang={this.props.lang} keyword={this.props.keyword} />
      </main>
    );
  }
}

export default MovieList;