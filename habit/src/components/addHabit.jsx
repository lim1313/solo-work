import React, { PureComponent } from 'react';

class AddHabit extends PureComponent {
  myRef = React.createRef();
  //formRef = React.createRef();

  habitAdd = (e) => {
    e.preventDefault();
    const name = this.myRef.current.value;
    name && this.props.addHabit(name);
    this.myRef.current.value = '';
    //this.formRef.current.reset();
  };

  render() {
    return (
      <form onSubmit={this.habitAdd} className='add-form'>
        <input
          type='text'
          className='add-input'
          placeholder='add your habit'
          ref={this.myRef}
        ></input>
        <button className='add-button'>Add</button>
      </form>
    );
  }
}

export default AddHabit;
