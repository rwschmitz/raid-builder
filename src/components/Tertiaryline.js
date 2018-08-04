import React from 'react';
import PropTypes from 'prop-types';
import '../styles/containers.css';
import '../styles/headings.css';
import '../styles/padding.css';

class Tertiary extends React.Component {
  render() {
    const { content, styles } = this.props;
    return (
      <div className="container container--w">
        <h3 className={ `${ styles }` }>{ content }</h3>
      </div>
    );
  }
}

export default Tertiary;

Tertiary.defaultProps = {
  styles: ''
}

Tertiary.propTypes = {
  content: PropTypes.string.isRequired,
  styles: PropTypes.string
}
