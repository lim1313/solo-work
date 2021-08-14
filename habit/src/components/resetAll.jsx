import React, { Component } from 'react';

class ResetAll extends Component {
  render() {
    return (
      <button onClick={this.props.resetAll} className='habits-reset'>
        Reset All
      </button>
    );
  }
}

export default ResetAll;
