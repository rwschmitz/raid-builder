import React from 'react';
import PropTypes from 'prop-types';
import Tiertiaryline from './Tertiaryline';
import Button from './Button';

class Card extends React.Component {
  render() {
    const { content, buttonContent, headlineContent } = this.props;
    return (
      <div className="">
        <Tiertiaryline
          content={ headlineContent }
        />
        <p className="">{ content }</p>
        <Button
          content={ buttonContent }
        />
      </div>
    );
  }
}

export default Card;

Card.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  headlineContent: PropTypes.string.isRequired
}
