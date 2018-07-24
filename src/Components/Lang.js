import React, {Component} from 'react';
import { el } from '../Assets/Helpers';

class SelectLang extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'EN'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const body = el('html');
    let body_lang = e.target.value;
    
    this.setState({value: body_lang});
    body.setAttribute('lang', body_lang);
  }

  render() {
    return (
      <label htmlFor="lang-select">Choose a language:
        <select id="lang-select" value={this.state.value} onChange={this.handleChange}>
          <option value="en">English</option>
          <option value="ko-KR">한국어</option>
          <option value="fr">Français</option>
        </select>
      </label>
    );
  }
}

export default SelectLang;