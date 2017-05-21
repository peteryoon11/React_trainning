import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import MyComponent from './MyComponent';
import Container from './Container';
import MyComponent from './MyComponent';

/*
var obj ={
  prop: 'Hello'
  , sayHello : function()
  {
    console.log(this.prop);
  }
};
obj.sayHello();

var reference= obj.sayHello;
reference();
*/

class App extends Component {
/*
    var obj = {
prop : 'Hello',
sayHello : function()
{
    console.log(this.prop);
}
   }
   obj.sayHello();
  var /// <reference path="" />*/

  render() {
    return (
    <div>
      <MyComponent/>
      </div>
      
      );
  }
}

export default App;
