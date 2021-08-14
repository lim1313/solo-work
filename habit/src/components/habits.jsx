import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  render() {
    const { state } = this.props;
    return (
      <ul>
        {state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            increase={this.props.increase}
            decrease={this.props.decrease}
            deleteHabit={this.props.deleteAll}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
