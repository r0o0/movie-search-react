import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form id="form-search"> 
        <input type="text" id="mvs" value="" autocomplete="off" placeholder="Search a movie" aria-label="Search Bar" />
          <button type="button" id="send">
            <span class="a11y-hidden">Search</span>
            <svg id='icon-search' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 250.313 250.313'>
            <title>Search Icon</title>
              <path d='M244.186,214.604l-54.379-54.378c-0.289-0.289-0.628-0.491-0.93-0.76 c10.7-16.231,16.945-35.66,16.945-56.554C205.822,46.075,159.747,0,102.911,0S0,46.075,0,102.911 c0,56.835,46.074,102.911,102.91,102.911c20.895,0,40.323-6.245,56.554-16.945c0.269,0.301,0.47,0.64,0.759,0.929l54.38,54.38 c8.169,8.168,21.413,8.168,29.583,0C252.354,236.017,252.354,222.773,244.186,214.604z M102.911,170.146 c-37.134,0-67.236-30.102-67.236-67.235c0-37.134,30.103-67.236,67.236-67.236c37.132,0,67.235,30.103,67.235,67.236 C170.146,140.044,140.043,170.146,102.911,170.146z'
                fillRule='evenodd' clipRule='evenodd' id='search-el' />
            </svg>
          </button>
      </form>
    );
  }
}

export default SearchBar;