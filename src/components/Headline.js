import React from 'react';
import PropTypes from 'prop-types';
import '../styles/containers.css';
import '../styles/headings.css';

class Headline extends React.Component {
  render() {
    const { content, styles } = this.props;
    return (
      <div className="container container--w container--jcc">
        <h1 className={ `${styles}` }>{ content }</h1>
      </div>
    );
  }
}

export default Headline;

Headline.defaultProps = {
  styles: ''
}

Headline.propTypes = {
  content: PropTypes.string.isRequired,
  styles: PropTypes.string
}
