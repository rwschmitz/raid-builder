import React from 'react';
import PropTypes from 'prop-types';

class Tertiaryline extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <React.Fragment>
        <h3 className="">{ content }</h3>
      </React.Fragment>
    );
  }
}

export default Tertiaryline;

Tertiaryline.propTypes = {
  content: PropTypes.string.isRequired
}
