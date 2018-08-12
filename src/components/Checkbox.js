import React from 'react';
import Switch from '@material-ui/core/Switch';

class Checkbox extends React.Component {
  state = {
    isChecked: false,
    selectedCharacters: []
  }
  render() {

    const monitorCheck = () => {
      this.setState({
        isChecked: !this.state.isChecked
      });
    }

    return (
      <React.Fragment>
        <Switch onChange={ monitorCheck } checked={ this.state.isChecked } color="primary" />
      </React.Fragment>
    );
  }
}

export default Checkbox;
