import React, { Component } from 'react';
import './CSS/Header.scss';
import SelectCountry from './Lang';
import SearchBar from './SearchForm';


class Header extends Component {
  render () {
    return (
      <header className="header">
        <h1 className="app-title">Movie Search</h1>
        <SelectCountry lang={this.props.lang} />
        <SearchBar className="mv-search" lang={this.props.lang}/>
      </header>
    );
  }
}

export default Header;