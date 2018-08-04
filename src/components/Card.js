import React from 'react';
import PropTypes from 'prop-types';
import Tiertiaryline from './Tertiaryline';
import Button from './Button';
import '../styles/containers.css';
import '../styles/headings.css';

class Card extends React.Component {
  render() {
    const { content, buttonContent, headlineContent, headlineStyles } = this.props;
    return (
      <div className="container container--w container--jcc container--4 container--card p2 pr3 pl3">
        <Tiertiaryline
          content={ headlineContent }
          styles={ headlineStyles }
        />
        <p className="lh20 tac pr2 pb2 pl2">{ content }</p>
        <Button
          content={ buttonContent }
        />
      </div>
    );
  }
}

export default Card;

Card.defaultProps = {
  headlineStyles: ''
}

Card.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  headlineContent: PropTypes.string.isRequired,
  headlineStyles: PropTypes.string
}
