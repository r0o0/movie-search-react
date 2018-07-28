import React, {Component} from 'react';
import { el } from '../Assets/Helpers';

class SelectLang extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const body = el('html');
    const lang = e.target.value;

    body.setAttribute('lang', lang);
    this.props.onChange(lang);
  }

  render() {
    return (
      <label htmlFor="lang-select">Choose a language:
        <select id="lang-select" onChange={this.handleChange}>
          <option value="en-US">English</option>
          <option value="ko-KR">한국어</option>
          <option value="fr-FR">Français</option>
        </select>
      </label>
    );
  }
}

export default SelectLang;