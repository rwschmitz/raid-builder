import React from 'react';
import PropTypes from 'prop-types';
import '../styles/card.css';

class ClassGroup extends React.Component {
  render() {
    const { characters, characterClass } = this.props;

    const generateCharacters = chars => {
    const character = chars.map(item => <li className="card__menu-item" key={ item }>{ item }</li>);
      return character;
    }
    return (
      <div className="card">
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
  characterClass: PropTypes.string.isRequired
}
