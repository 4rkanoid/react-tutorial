import React, {Component} from 'react';


export default class Calculator extends Component {
  render () {
    const todo = this.props.todo;
    return <li className="todo">{todo.text}</li>;
  }
}
