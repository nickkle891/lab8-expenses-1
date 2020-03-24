import React, { Component } from 'react'
import Proptypes from 'prop-types'  // for props validation

export default class AddTodo extends Component {
  state = {
    title: ''
  }

  onChange = (e) => {
    // let value = e.target.value;
    // this.setState( {title: value});
    this.setState( { [e.target.name]:[e.target.value]} )
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title:'' });
  }

  render() {
    return (
      <form style={{display: 'flex'}} onSubmit={this.onSubmit} >
        <input 
          type="text" 
          name="title" 
          placeholder="Add todo ..."
          style={{ flex: '10', padding: '5px'}}
          value={this.state.title}
          onChange={this.onChange}/>

        <input 
          type="submit" 
          value="Submit"
          style={{ flex: '1'}}/>
      </form>
    )
  }
}

AddTodo.propTypes = {
  addTodo: Proptypes.func.isRequired
}