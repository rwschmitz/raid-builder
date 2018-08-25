import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import '../styles/card.css';

class ClassGroup extends React.Component {
  render() {

    const { characters, characterClass, monitorCheck } = this.props;

    const generateCharacters = chars => {
    const character = chars.map(item =>
      (
        <li className="card__menu-item-container" key={ `${item}-list-item` }>
          <span className="card__menu-item" key={ `${item}-span-item` }>{ item }</span>
          <Checkbox character={ item } monitorCheck={ monitorCheck } />
        </li>
      )
    );
      return character;
    }
    return (
      <div className={ `card ${this.props.classColor}` }>
        <h3 className="card__headline">{ characterClass }</h3>
        <ul className="card__menu">
          { generateCharacters(characters) }
        </ul>
      </div>
    );
  }
}

export default ClassGroup;

ClassGroup.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.string).isRequired,
  characterClass: PropTypes.string.isRequired,
  monitorCheck: PropTypes.func.isRequired
}
