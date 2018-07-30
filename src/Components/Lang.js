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
      <div className="change-country">
        <label htmlFor="select-country">Choose a country:
          <select id="select-country" onChange={this.handleChange}>
            <option value="en-US">U.S</option>
            <option value="ko-KR">한국</option>
            <option value="fr-FR">France</option>
          </select>
        </label>
      </div>
    );
  }
}

export default SelectLang;