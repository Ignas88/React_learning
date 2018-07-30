import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
      name: 'John', 
      about: 'John is cool!'
  };

  changeInputHandler = (event) => {
    this.setState({name: event.target.value});
  };

  render() {
    return (
      <div className="App">
          <h1>Welcome to React</h1>
          <UserInput 
            changed={this.changeInputHandler}
            currentName={this.state.name} />
          <UserOutput name={this.state.name}>{this.state.about}</UserOutput>
          <UserOutput name={this.state.name}>{this.state.about}</UserOutput>
          <UserOutput name='Max'>{this.state.about}</UserOutput>
      </div>
    );
  }
}

export default App;
