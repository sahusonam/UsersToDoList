
import { useState } from 'react';
import Tasks from "./Tasks";
import './App.css';
import {TodoList} from './components/TodoList.js'
import {mockTaskList} from './__mockData__/mockTaskList';
class App extends Tasks {
  state = { tasks: [], currentTask: "" };
  render() {
    const { tasks } = this.state;
    return (
      <div className="App">
        <h1>todo-app</h1>
        <TodoList todosList={ tasks}  />
      </div>
    );
};
}

export default App;
