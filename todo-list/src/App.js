import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import shortid from 'shortid';

function createItem()
{
  return {};
}

const defaultTodos =[
'test','test1','test2'

].map(createItem);


handleToggle =(id)=>{
  const{todoItems}= this.state;
  const index = todoItems.findIndex();

};


class App extends Component {

handleInsert= ()=>{


};


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
