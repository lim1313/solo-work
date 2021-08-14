import './App.css';
import React, { Component } from 'react';
import Habits from './components/habits';
import AddHabit from './components/addHabit';
import ResetAll from './components/resetAll';
import Header from './components/header';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'reading', count: 0 },
      { id: 2, name: 'studying', count: 0 },
      { id: 3, name: 'eating', count: 0 },
    ],
  };

  increaseNum = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };

  decreaseNum = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    if (habits[index].count === 0) {
      habits[index].count = 0;
    } else {
      habits[index].count--;
    }
    this.setState({ habits });
  };

  deleteHabit = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const filter = habits.filter((v) => v !== habits[index]);
    this.setState({ habits: filter });
  };

  addHabit = (v) => {
    const newHabit = {
      id: Date.now(),
      name: v,
      count: 0,
    };
    const habits = [newHabit, ...this.state.habits];
    this.setState({ habits });
  };

  resetAll = () => {
    const habits = [...this.state.habits];
    const resetNum = habits.map((v) => {
      return { ...v, count: 0 };
    });
    this.setState({ habits: resetNum });
  };

  render() {
    return (
      <>
        <Header state={this.state} />
        <AddHabit state={this.state} addHabit={this.addHabit} />
        <Habits
          state={this.state}
          increase={this.increaseNum}
          decrease={this.decreaseNum}
          deleteAll={this.deleteHabit}
        />
        <ResetAll state={this.state} resetAll={this.resetAll} />
      </>
    );
  }
}

export default App;
