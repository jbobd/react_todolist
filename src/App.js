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
        completed: false
      },
      {
        id: 3,
        title: "tres ",
        completed: false
      }
    ]
  }

  render(){
  return (
    <div className="App">
      <Todos todoProp={this.state.todos} />
    </div>
  );
  }
}

export default App;
