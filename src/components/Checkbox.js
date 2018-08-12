import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  state = {
    isChecked: false
  }
  render() {
    const { label } = this.props;

    const monitorCheck = () => {
      this.setState({
        isChecked: !this.state.isChecked
      });
    }

    return (
      <React.Fragment>
        { this.state.isChecked === false  ? 
          <input style={ { outline: '2px solid red' } } type="checkbox" label={ label } checked={ this.state.isChecked } onChange={ monitorCheck } />
          :
          <input style={ { outline: '2px solid green' } } type="checkbox" label={ label } checked={ this.state.isChecked } onChange={ monitorCheck } />
        }

      </React.Fragment>
    );
  }
}

export default Checkbox;

Checkbox.propTypes = {
  label: PropTypes.string.isRequired
}