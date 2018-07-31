import React, { Component } from 'react';
import { el } from '../Assets/Helpers';
import IconSearch from '../Assets/Icons/iconSearch';
import './CSS/SearchForm.scss';

const contents = {
  en: {
    lang: 'en',
    placeholder: 'Search a movie',
    name: 'Search Bar',
    button: 'Search'
  },
  ko: {
    lang: 'ko-KR',
    placeholder: '영화를 검색해보세요',
    name: '검색 창',
    button: '검색'
  },
  fr: {
    lang: 'fr',
    placeholder: 'Rechercher un film',
    name: 'Rechercher',
    button: 'Recherche'
  }
};

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onFormSubmit = this._onFormSubmit.bind(this);
  }
  _onFormSubmit(e) {
    // prevent form default action
    e.preventDefault();

    // get input value
    const search_val = el('#mvs').value;
    this.setState({ keyword: search_val }); 
    this.props.onSubmit(search_val);
    console.log(search_val);
  }
  render() {
    // Get current language
    const curr_lang = this.props.lang.substr(0, 2);
    
    // Get the right content for each language
    let content;
    Object.keys(contents).forEach((lang, i) => {
      if (lang === curr_lang) {
        content = contents[lang];
      }
    });

    return (
      <form id="form-search" onSubmit={this.onFormSubmit}> 
        <input className="input-search" type="text" id="mvs" autoComplete="off" placeholder={content.placeholder} aria-label={content.name}/> 
        <button className="btn-search" type="button" id="send">
          <span className="a11y-hidden">{content.button}</span>
          <IconSearch />
        </button>
      </form>
    );
  }
}

export default SearchForm;