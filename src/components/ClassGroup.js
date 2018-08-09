import React from 'react';
import PropTypes from 'prop-types';
import '../styles/card.css';

class ClassGroup extends React.Component {
  state = {
    isChecked: false
  }
  render() {
    const { characters, characterClass } = this.props;

    const monitorCheck = () => {
      this.setState({
        isChecked: !this.state.isChecked
      });
      console.log(this.state.isChecked);
    }

    const generateCharacters = chars => {
    const character = chars.map(item =>
      (
        <li className="card__menu-item-container" key={ `${item}-list-item` }>
          <span className="card__menu-item" key={ `${item}-span-item` }>{ item }</span>
          <input type="checkbox" onChange={ monitorCheck } />
        </li>
      )
    );
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
