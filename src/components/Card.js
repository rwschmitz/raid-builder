import React from 'react';
import PropTypes from 'prop-types';
import Tiertiaryline from './Tertiaryline';
import Button from './Button';
import '../styles/card.css';

class Card extends React.Component {
  render() {
    const { content, buttonContent, headlineContent } = this.props;
    return (
      <div className="card">
        <Tiertiaryline
          content={ headlineContent }
        />
        <p className="">{ content }</p>
        <Button
          content={ buttonContent }
        />
        <h4>{ this.props.isChecked }</h4>
      </div>
    );
  }
}

export default Card;

Card.defaultProps = {
  buttonContent: '',
  content: ''
}

Card.propTypes = {
  buttonContent: PropTypes.string,
  content: PropTypes.string,
  headlineContent: PropTypes.string.isRequired
}
