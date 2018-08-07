import React, { Component } from 'react';
import { el, addClass, removeClass } from '../Assets/Helpers';
import browser from 'browser-detect';
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
    this.accessibilty = this._accessibilty.bind(this);
    this.ifIEorEdge = this._ifIEorEdge.bind(this);
    this.initInput = this._initInput.bind(this);
  }
  _onFormSubmit(e) {
    // prevent form default action
    e.preventDefault();
  
    // get input value
    const search_val = el('#mvs').value;
    this.setState({ keyword: search_val }); 
    this.props.onSubmit(search_val);

    // clear input value
    this._initInput();
  }
  _initInput() {
    el('#mvs').value = '';
    el('#mvs').blur();
    
    if (this._ifIEorEdge() === 'ie' || this._ifIEorEdge() === 'edge') {
      el('#form-search').style.borderColor = '#eee';
    }
  }
  _accessibilty(e) {
    // blur btn search if user press enter when button is focused
    if (e.keyCode === 13 && e.target === el('.btn-search')) {
      el('.btn-search').blur();
    }
    // reset input if user press the 'esc' key when input is focused
    if (e.target === el('.input-search')) {
      if (e.keyCode === 27) {
        this._initInput();
        
        if (this._ifIEorEdge() === 'ie' || this._ifIEorEdge() === 'edge') {
          el('#form-search').style.borderColor = '#eee';
        }
        
        // if browser is ie or edge remove focus style
      }
    }
  }
  // if browser is ie or edge add focus style
  _ifIEorEdge() {
    const isBrowser = browser().name;
    if (isBrowser === 'ie' || isBrowser === 'edge') {
      el('#form-search').style.borderColor = '#000';
    }
    return isBrowser;
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
      <form id="form-search" onSubmit={this.onFormSubmit} onKeyDown={this.accessibilty}> 
        <input className="input-search" type="text" id="mvs" autoComplete="off" placeholder={content.placeholder} aria-label={content.name} onFocus={this.ifIEorEdge} onBlur={this.initInput} /> 
        <button className="btn-search" type="submit" id="send" onKeyDown={this.accessibilty} >
          <span className="a11y-hidden">{content.button}</span>
          <IconSearch />
        </button>
      </form>
    );
  }
}

export default SearchForm;