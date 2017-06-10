import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import shortid from 'shortid';
import TodoItemList from './components/TodoItemList';
import TodoInsert from './components/TodoInsert';
import TodoReset from './components/TodoReset';

function createItem(name)
{
  return {
    id: shortid.generate(),
    name,
    finished : false
  }
}


const defaultTodos=[
  'todo1',
  'todo2'
  , 'todo3'
  ,'todo4'
].map(createItem);

class App extends Component {
  state ={
    todoItems :defaultTodos
  }
constructor(props)
{
  super(props);
  const todos = localStorage.getItem('todos');
  if(todos)
  {
    this.state={
      todoItems:JSON.parse(todos)
    };
  }
}
componentDidUpdate(prevProps, prevState) {
  localStorage.setItem('todos',JSON.stringify(this.state.todoItems));
}

handleInsert = (name)=>{
this.setState({
  todoItems:[...this.state.todoItems, createItem(name)]
})
}

handleToggle = (id)=>{
const {todoItems} = this.state;
const index = todoItems.findIndex(item=>item.id === id);
const item = todoItems[index];
this.setState({
  todoItems:[
    ...todoItems.slice(0,index),
    {...item,
    finished: !item.finished
  },
  ...todoItems.slice(index+1, todoItems.length)
  ]
})

}


handleRemove= (id)=>{
  const {todoItems} = this.state;
  const index = todoItems.findIndex(item=>item.id===id);
  this.setState({
    todoItems:[
    ...todoItems.slice(0,index),
    ...todoItems.slice(index+1,todoItems.length)
    ] 
 })
}
handleReset = ()=>{
  this.setState({
    todoItems:defaultTodos
  })
}

  render() {
    const {
      handleInsert,
      handleRemove,
      handleToggle,
      handleReset
    }= this;

    const {todoItems} = this.state;
    
    return (
      <div className="App">
        <h1>ToDO List</h1>
     <TodoReset onReset={handleReset}/>
        <TodoInsert onInsert={handleInsert}/>
        <TodoItemList items={todoItems}
        onToggle={handleToggle}
        onRemove={handleRemove}/>
      </div>
    );
  }
}

export default App;
