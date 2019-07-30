import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
 
class Todos extends React.Component{

  render(){
  return this.props.todoProp.map( (el) => (
   <TodoItem key={el.id} todoItemProp={el} markComplete={this.props.markComplete}
   delTodo={this.props.delTodo}/>
    )
  );
  }
}

Todos.propTypes = {
    todoProp: PropTypes.array.isRequired,
  
}

export default Todos;
 