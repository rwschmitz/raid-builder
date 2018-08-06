import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <a href="/">{ content }</a>
    );
  }
}

export default Button;

Button.propTypes = {
  content: PropTypes.string.isRequired
}

