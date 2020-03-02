import React, { Component } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react'

class AddTasks extends Component{

    constructor(props){
        super(props);

        this.state = this.handleInitialState();
    }

    handleInitialState = () => {
        return {
            openModal: false,
            task: {
                title: '',
                description: '',
                completed: false
            }
        }
    }

    handleInput = (e) => {
        const { value, name } = e.target;
        this.setState({
            task: {
                  ...this.state.task,
                  [name]: value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if(!this.state.task.title || !this.state.task.description) return false;
        this.props.onAddTasks(this.state.task);
        this.setState(this.handleInitialState());
        this.handleToggleModal();
    }


    handleToggleModal = () => {
        let toggle = !this.state.openModal;
        this.setState({"openModal" : toggle});
    }

    

    render(){
        return(
            <Modal 
                open={this.state.openModal}    
                trigger={
                <Button  onClick={this.handleToggleModal} className="ui huge facebook circular icon button button-add-task">
                   <i aria-hidden="true" className="plus icon"></i>
                </Button>
                } basic size='small'>
                <Header icon='tasks' content='New tasks' />
                <Modal.Content>
                    <form className="ui form" onSubmit={this.handleSubmit} id="add-tasks">
                        <div className="field">
                            <div className="ui left icon input">
                                <input 
                                    onChange={this.handleInput}                         
                                    type="text" 
                                    placeholder="Title" 
                                    name="title" />
                                <i aria-hidden="true" className="tasks icon"></i>
                            </div>
                        </div>
                        
                        <div className="field">
                            <textarea
                                onChange={this.handleInput}
                                name="description"
                                placeholder="Description..." rows="3"></textarea>
                        </div>

                        <button type="submit" className="ui button">Save</button>
                        <button type="button" className="ui inverted button" onClick={this.handleToggleModal}>Close</button>
                    </form>
                </Modal.Content>
            </Modal>
        );
    }
}

export default AddTasks;