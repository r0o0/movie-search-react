import React, { Component } from 'react';
import api from '../Assets/API';
// component style
import './CSS/MovieList.sass';

class MovieList extends Component {
  _releaseDate() {
    const getMonth = this.props.released.substring(5, 7);
    const months = () => {
      let mth;
      switch (getMonth) {
        case '01': mth = 'JAN';
          break;
        case '02': mth = 'FEB';
          break;
        case '03': mth = 'MAR';
          break;
        case '04': mth = 'APR';
          break;
        case '05': mth = 'MAY';
          break;
        case '06': mth = 'JUN';
          break;
        case '07': mth = 'JUL';
          break;
        case '08': mth = 'AUG';
          break;
        case '09': mth = 'SEP';
          break;
        case '10': mth = 'DEC';
          break;
        case '11': mth = 'NOV';
          break;
        case '12': mth = 'DEC';
      }
      return mth;
    };

    const month = months();
    const day = this.props.released.substr(8, 10);
    const date = `${month} ${day}`;
    return date;
  }
  render() {
    const isRetina = api.imgURL + api.p_retina + this.props.poster;
    const isDefault = api.imgURL + api.p_default + this.props.poster;
    return (
      <li className="mv-list">
        <h3 className="mv-title">{this.props.title}</h3>
        <figure className="mv-poster">
          <picture>
            <source media="(max-width: 768px)" srcSet={isRetina} />
            <img src={isDefault} alt={this.props.title} />
          </picture>
        </figure>
        <p className="mv-release">Released 
          <time className="mv-release-date" dateTime={this.props.released}>{ this._releaseDate() }</time>
        </p>
        <p className="mv-rating"><span className="a11y-hidden">Average rating is</span>{this.props.vote}</p>
      </li>
    );
  }
}

export default MovieList;