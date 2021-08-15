import React, { PureComponent } from 'react';

class Header extends PureComponent {
  render() {
    console.log('header');
    return (
      <>
        <div className='navbar'>
          <span>Habit Trakcer</span>
          <span className='navbar'>{this.props.totalCount}</span>
        </div>
      </>
    );
  }
}

export default Header;
