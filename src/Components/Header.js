import React, { Component } from 'react';
import { el } from '../Assets/Helpers';
import './CSS/Header.scss';
import SelectCountry from './Lang';
import SearchBar from './SearchForm';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: el('html').getAttribute('lang')
    };
    this.changeLang = this._changeLang.bind(this);
    this.getKeyword = this._getKeyword.bind(this);
  }
  _changeLang(newLang) {
    this.setState({ lang: newLang });
    this.props.onChange(newLang);
  }
  _getKeyword(value) {
    this.setState({
      keyword: value
    });
    this.props.onSubmit(value);
  }
  render () {
    return (
      <header className="header">
        <h1 className="app-title">Movie Search</h1>
        <SelectCountry onChange={this.changeLang} />
        <SearchBar lang={this.state.lang} onSubmit={this.getKeyword} />
      </header>
    );    
  }
}

export default Header;