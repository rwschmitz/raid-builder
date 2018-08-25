import React from 'react';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';

class Checkbox extends React.Component {

  state = {
    isChecked: false
  }

  toggleState = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  }

  render() {
    const { isChecked } = this.state;
    const { character, monitorCheck } = this.props;



    return (
      <React.Fragment>
        <Switch onClick={ () => { monitorCheck(character, isChecked); this.toggleState() } } color="primary" />
      </React.Fragment>
    );
  }
}

export default Checkbox;

Checkbox.propTypes = {
  character: PropTypes.string.isRequired,
  monitorCheck: PropTypes.func.isRequired
}
