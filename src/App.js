import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import Addtodo from './components/AddTodo';
import uuid from 'uuid';
 
class App extends React.Component{
  state = {
    todos:[
      {
        id: uuid.v4(),
        title: "uno",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "dos",
        completed: true
      },
      {
        id: uuid.v4(),
        title: "tres ",
        completed: false
      }
    ]
  }

  //marcar y desmarcar como completado
  markComplete = (id) => {
    this.setState(
      { todos: this.state.todos.map( (a) =>{
          if(a.id === id){
            a.completed = !a.completed;
          }
          return a;
        }
        )
      }
    )
  }

  //borrar todo. devuelve un nuevo array con los todos que no coincidan con el Id recibido
  delTodo = (id) => {
    this.setState(
      {
        todos: [...this.state.todos.filter( a => a.id !== id)]
      }
    )
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      complteded:false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render(){
  return (
    
    <div className="App">
      <div className="container">
        <Header/>
        <Addtodo addTodo={this.addTodo}/>
        <Todos todoProp={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    </div>
  );
  }
}

export default App;
