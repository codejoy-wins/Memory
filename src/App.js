import React from 'react';
import './App.css';
import Todo from './Todo'
import todoData from './todoData'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      todos: todoData,
      color: "",
      background: ""
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick(id){
    console.log("clicked", id)
    this.setState(prevState=>{
      const updatedTodos = prevState.todos.map(todo=>{
        if(todo.id===id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  handleChange(event){
    console.log("handling change")
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render(){
    const todos = this.state.todos.map(todo=>{
      return(
        <Todo completed={todo.completed} key={todo.id} id={todo.id} desc={todo.desc} handleClick={this.handleClick}/>
      )
    })
    return (
      <div className="App">
        <header>
          <h1> From Memory </h1>
        </header>
        <main>
          {todos}
          <form>
            <input type="text" name="color" placeholder="color" onChange={this.handleChange}></input>
            <input type="text" name="background" placeholder="background" onChange={this.handleChange}></input>
          </form>
          <h1 style={{color:this.state.color, background: this.state.background}}>Hello World</h1>

          <h4 style={{color:this.state.color}}>{this.state.color} text</h4>
          <h4 style={{color:this.state.background}}>{this.state.background} background</h4>
          <p> I was able to do all of this from memory.  This application uses state, and tracks your every keystroke to provide dynamic styling and conditional rendering.  </p>
        </main>
        <footer>
          <h3><a href="https://maxjann.com">Jann Software</a></h3>
        </footer>
      </div>
    );
  }
}

export default App;
