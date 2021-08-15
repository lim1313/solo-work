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
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  decreaseNum = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count > 0 ? habit.count - 1 : 0 };
      }
      return item;
    });
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
    const resetNum = this.state.habits.map((v) => {
      if (v.count !== 0) {
        return { ...v, count: 0 };
      }
      return v;
    });
    this.setState({ habits: resetNum });
  };

  render() {
    return (
      <>
        <Header
          totalCount={this.state.habits.filter((v) => v.count > 0).length}
        />
        <AddHabit addHabit={this.addHabit} />
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
