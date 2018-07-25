import React, { Component } from 'react';
import IconSearch from '../Assets/Icons/iconSearch';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
      placeholder: 'Search a movie',
      name: 'Search Bar',
      button: 'Search'
    };
  }

  render() {
    return (
      <form id="form-search"> 
        <input type="text" id="mvs" value="" autocomplete="off" placeholder={this.state.placeholder} aria-label={this.state.name} />
          <button type="button" id="send">
            <span class="a11y-hidden">{this.state.button}</span>
            <IconSearch />
          </button>
      </form>
    );
  }
}

export default SearchBar;