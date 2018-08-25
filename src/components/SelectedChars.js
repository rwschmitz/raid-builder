import React from 'react';
import PropTypes from 'prop-types';
import Tiertiaryline from './Tertiaryline';
import Button from './Button';
import '../styles/selected-chars.css';

class SelectedChars extends React.Component {
  render() {
    const { characters, buttonContent, headlineContent } = this.props;
    const characterArray = Array.from(characters);
    const characterItems = characterArray.map(item => <li className="selected-chars__menu-item" key={ item }>{ item }</li>)
    return (
      <div className="selected-chars">
        <Tiertiaryline
          content={ headlineContent }
        />
        <ul className="selected-chars__menu">
          { characterItems }
        </ul>
        <Button
          content={ buttonContent }
        />
      </div>
    );
  }
}

export default SelectedChars;

SelectedChars.defaultProps = {
  buttonContent: ''
}

SelectedChars.propTypes = {
  buttonContent: PropTypes.string,
  characters: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string.isRequired), PropTypes.objectOf(PropTypes.string.isRequired)]).isRequired,
  headlineContent: PropTypes.string.isRequired
}
