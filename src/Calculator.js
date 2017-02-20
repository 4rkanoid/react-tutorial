import React, {Component} from 'react';
import { connect } from 'react-redux'
import Todo from './CalculatorRow';
import {add} from './actions/todo-actions';

const Calculator = ({todos, onTodoClick}) => (<div>
  <ul>
      {todos.map((todo, index) => <Todo key={"todo-" + todo.title + '-' + (todo.id || index)} todo={todo} />)}
  </ul>

  <button onClick={() => onTodoClick('LALALALALAL')}>ADD TODO</button>
</div>);


const mapStateToProps = ({todos}) => ({todos});

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (text) => dispatch(add(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
