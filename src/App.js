import React from 'react';
import './App.css';
import Todos from './components/Todos';
 
class App extends React.Component{
  state = {
    todos:[
      {
        id: 1,
        title: "uno",
        completed: false
      },
      {
        id: 2,
        title: "dos",
        completed: true
      },
      {
        id: 3,
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
        )}
    )
  }

  render(){
  return (
    <div className="App">
      <Todos todoProp={this.state.todos} markComplete={this.markComplete} />
    </div>
  );
  }
}

export default App;
