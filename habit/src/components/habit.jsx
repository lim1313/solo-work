import React, { Component } from 'react';

class Habit extends Component {
  increaseHandle = () => {
    this.props.increase(this.props.habit);
  };
  decreaseHandle = () => {
    this.props.decrease(this.props.habit);
  };
  deleteHandle = () => {
    this.props.deleteHabit(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className='habit'>
        <span className='habit-name'>{name}</span>
        <span className='habit-count'>{count}</span>
        <button
          className='habit-button habit-increase'
          onClick={this.increaseHandle}
        >
          <i className='far fa-plus-square'></i>
        </button>
        <button
          className='habit-button habit-decrease'
          onClick={this.decreaseHandle}
        >
          <i className='far fa-minus-square'></i>
        </button>
        <button
          className='habit-button habit-delete'
          onClick={this.deleteHandle}
        >
          <i className='fas fa-trash'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
