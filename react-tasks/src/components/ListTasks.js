import React, { Component } from 'react';
import { Checkbox } from 'semantic-ui-react'
class ListTasks extends Component{
    
    constructor(props){
        super(props);

        this.state = {
        }
        
    }

    handleRemoveTasks(indexTask){
      this.props.onRemoveTask(indexTask);
    }

    handleToggleTasks(indexTask){
      this.props.onToggleTask(indexTask);
    }

    render(){
        return(

            <div className="ui card card-content-tasks">
              <div className="content">
                <div role="list" className="ui list divided">
                  {this.props.tasks.map((task, indexTask) => {
                    return (
                      <div role="listitem" className={"item task-item " + (task.completed ? 'task-completed': 'task-incompleted')} key={indexTask}>
                        <div className="content">
                          <Checkbox
                            label={ task.title }
                            className="task-title"
                            checkbox="true"
                            checked={task.completed}
                            onChange={this.handleToggleTasks.bind(this, indexTask)}
                          />
                          <div className="description">
                            <p className="task-description">{ task.description }</p>
                          </div>
                          <button 
                            onClick={this.handleRemoveTasks.bind(this, indexTask)}
                            className="ui circular icon button task-button-delete">
                              <i aria-hidden="true" className="delete icon"></i>
                            </button>
                        </div>
                      </div>
                    );
                  })}
                
                </div>
              </div>
            </div>
        );
    }
}

export default ListTasks;