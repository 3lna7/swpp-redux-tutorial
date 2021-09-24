import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actionTypes from '../../../store/action/actionType';

import './NewTodo.css';

class NewTodo extends Component {
  state = {
    title: '',
    content: '',
    submitted: false,
  }

  postTodoHandler = () => {
    //modofied
    //lets remember that this.state is not a state from redux store but a state from the component todo
    this.props.onStoreTodo(this.state.title, this.state.content);
    //const data = { title: this.state.title, content: this.state.content };
    //alert('Submitted\n' + data.title + '\n' + data.content);
    this.setState({ submitted: true });
  }

  render() {
    let redirect = null;
    if (this.state.submitted) {
      redirect = <Redirect to='/todos' />
    }
    return (
      <div className="NewTodo">
        {redirect}
        <h1>Add a Todo</h1>
        <label>Title</label>
        <input type="text" value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })} />
        <label>Content</label>
        <textarea rows="4" type="text" value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })} />
        <button onClick={() => this.postTodoHandler()}>Submit</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onStoreTodo: (title, content) => {
      dispatch({type: actionTypes.ADD_TODO, title: title, content: content})
    }
  }
};
//modified
//connect function returns another function so that's why we add two ()
//for the second () we should add the component to be connected
export default connect(null,mapDispatchToProps)(NewTodo);