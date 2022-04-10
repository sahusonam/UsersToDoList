import Tasks from "./Tasks";
import {TodoList} from './components/TodoList.js'
import { AddItem } from './components/AddItem';

class App extends Tasks {
  state = { tasks: [], currentTask: "" };
  render() {
    const { tasks } = this.state;
    return (
      <div className="App">

        <h1>Todo List</h1>
        <AddItem handleSubmit={ this.handleSubmit } handleOnchangeInput={this.handleOnChange} newItem={this.state.currentTask} ></AddItem>
        <TodoList todosList={ tasks}  />
      </div>
    );
};
}

export default App;
