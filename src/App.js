import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'; 
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import Addtodo from './components/AddTodo';
import About from './components/pages/about';
//import uuid from 'uuid';
import axios from 'axios';
 
class App extends React.Component{
  state = {
    todos:[]
  } 

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState( {todos: res.data}))
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then( res => 
        this.setState( 
          {
            todos: [...this.state.todos.filter( a => a.id !== id)]
          }
        ) 
      )
    
  }

 /* addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      complteded:false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }
  */
 addTodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos',
  {
    title, completed:false
  })
  .then(res=> this.setState({ todos: [...this.state.todos, res.data]}));
}

  render(){
  return (
    <Router>  
      <div className="App">
        <div className="container">
          <Header/>
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Addtodo addTodo={this.addTodo}/>
              <Todos  todoProp={this.state.todos} 
                      markComplete={this.markComplete}
                      delTodo={this.delTodo}/>
             </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
  }
}

export default App;
