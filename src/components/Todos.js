import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
 
class Todos extends React.Component{
  render(){
  return this.props.todoProp.map( (el) => (
   <TodoItem key={el.id} todoItemProp={el}/>
    )
  );
  }
}

Todos.propTypes = {
    todoProp: PropTypes.array.isRequired
}

export default Todos;
 