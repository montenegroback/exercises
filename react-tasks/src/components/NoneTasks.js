import React, { Component } from 'react';

class NoneTasks extends Component{
    render(){
        return(
            <div className="ui card card-content-tasks">
                <div className="content">
                    <div role="list" className="ui list divided">
                        <h2 className="ui icon header" style={{"display": 'block'}}>
                            <i aria-hidden="true" className="tasks icon task-icon-color"></i>
                            ¡Empty task list!
                            <div className="sub header">Start creating your day's tasks now</div>
                        </h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoneTasks;