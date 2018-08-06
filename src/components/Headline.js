import React from 'react';
import PropTypes from 'prop-types';

class Headline extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="">
        <h1 className="">{ content }</h1>
      </div>
    );
  }
}

export default Headline;

Headline.propTypes = {
  content: PropTypes.string.isRequired
}
