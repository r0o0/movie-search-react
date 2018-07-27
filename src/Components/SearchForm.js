import React, { Component } from 'react';
import IconSearch from '../Assets/Icons/iconSearch';

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
      <form id="form-search"> 
        <input type="text" id="mvs" autoComplete="off" placeholder={content.placeholder} aria-label={content.name}/> 
        <button type="button" id="send">
          <span className="a11y-hidden">{content.button}</span>
          <IconSearch />
        </button>
      </form>
    );
  }
}

export default SearchForm;