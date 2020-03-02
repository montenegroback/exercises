import React, { Component } from 'react';
import './styles/App.css';

// import { tasks } from './assets/data/tasks.json';

import AddTasks from './components/AddTasks';
import ListTasks from './components/ListTasks';
import NoneTasks from './components/NoneTasks';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      tasks: []
    }
  }

  handleAddTasks = (task) => {
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }

  handleRemoveTasks = (indexTask) => {
    this.setState({
      tasks: this.state.tasks.filter((task, index) => indexTask !== index)
    });
  }

  handleToggleTasks = (indexTask) => {
    const { tasks } = this.state;
    tasks[indexTask].completed = !tasks[indexTask].completed;
    this.setState({
        tasks,
    });
  }

  render(){
    let showComponentlist;

    if(this.state.tasks.length){
      showComponentlist = <ListTasks 
        tasks={this.state.tasks} 
        onRemoveTask={this.handleRemoveTasks}
        onToggleTask={this.handleToggleTasks}
        />
    } else {
      showComponentlist = <NoneTasks/>
    }      
    return (
      <div className="App">
        <div className="ui fluid container"> 
          { showComponentlist }
          <AddTasks onAddTasks={this.handleAddTasks} />
        </div>
      </div>
    );
  }  
}

export default App;
