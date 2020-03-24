import React, { Component } from 'react'
import Proptypes from 'prop-types'  // for props validation

import TodoItem from './TodoItem'

export default class Todos extends Component {
  render() {
    // console.log(this.props.todos)
    return this.props.todos.map( todo => (
      <TodoItem todo_item={todo}
                key={todo.id}
                markComplete={this.props.markComplete}
                delTodo={this.props.delTodo}/>
    ));

    // return (
    //   <div>
    //     <h4>Todos Component</h4>
    //       <TodoItem />
    //       <TodoItem />
    //       <TodoItem />
    //       <TodoItem />
    //   </div>
    // )
  }
}

// props validation
Todos.propTypes = {
  todos: Proptypes.array.isRequired,
  markComplete: Proptypes.func.isRequired,
  delTodo: Proptypes.func.isRequired,
}
