import React from 'react';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';

class Checkbox extends React.Component {
  render() {
    const { character, monitorCheck } = this.props;
    return (
      <React.Fragment>
        <Switch onClick={ () => monitorCheck(character) } color="primary" />
      </React.Fragment>
    );
  }
}

export default Checkbox;

Checkbox.propTypes = {
  monitorCheck: PropTypes.func.isRequired
}
