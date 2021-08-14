import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <>
        <div className='navbar'>
          <span>Habit Trakcer</span>
          <span className='navbar'>
            {this.props.state.habits.filter((v) => v.count > 0).length}
          </span>
        </div>
      </>
    );
  }
}

export default Header;
