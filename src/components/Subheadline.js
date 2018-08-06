import React from 'react';
import PropTypes from 'prop-types';

class Subheadline extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="">
        <h2 className="">{ content }</h2>
      </div>
    );
  }
}

export default Subheadline;


Subheadline.propTypes = {
  content: PropTypes.string.isRequired
}
