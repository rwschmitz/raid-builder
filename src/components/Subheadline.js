import React from 'react';
import PropTypes from 'prop-types';
import '../styles/containers.css';
import '../styles/headings.css';

class Subheadline extends React.Component {
  render() {
    const { content, styles } = this.props;
    return (
      <div className="container container--w">
        <h2 className={ `${ styles }` }>{ content }</h2>
      </div>
    );
  }
}

export default Subheadline;

Subheadline.defaultProps = {
  styles: ''
}

Subheadline.propTypes = {
  content: PropTypes.string.isRequired,
  styles: PropTypes.string
}
