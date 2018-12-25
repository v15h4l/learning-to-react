import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';
import UserInput from './TwoWayBindingAssgn/UserInput';
import UserOutput from './TwoWayBindingAssgn/UserOutput';
import Validation from './ConditionalsAndListsAssgn/Validation';
import Char from './ConditionalsAndListsAssgn/Char'
class App extends Component {

  state = {
    userName: "Josh",
    textVal:""
  }

  nameChangeHandler = (event) => {
    this.setState({userName: event.target.value});
  }

  textChangeHandler = (event) => {
    this.setState({textVal: event.target.value});
  }

  clickCharHandler = (event, index) => {
    let chars = this.state.textVal.split('');
    chars.splice(index,1);
    this.setState({textVal: chars.join('')});
  }

  render() {

    const charArr = this.state.textVal.split('');
    const chars = charArr.map( (c,index) => {
      return <Char char={c} click={this.clickCharHandler.bind(this, null, index)}/>
    });

    return (
      <div className="App">
        <div style={this.style} >This is a react app</div> 
        <Person name="Bauaa"> My lastname: Singh  </Person>
        <UserInput userName={this.state.userName} nameChangeHandler = {this.nameChangeHandler}/>
        <UserOutput userName = {this.state.userName}/>

        <input type="text" value={this.state.textVal} onChange={this.textChangeHandler}></input>
        <Validation textLength={this.state.textVal.length} />

        {chars}
      </div>
    );
  }
}

export default App;
