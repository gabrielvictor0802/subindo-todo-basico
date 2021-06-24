import React, { Component } from "react";

import "./App.css"

class App extends Component {
  state = {
    task: "",
    taskList: []
  }
  
  limpar = (id) => {
    this.setState({
      taskList: this.state.taskList.filter((item) => {
        return item.id !== id;
      }),
    });
  };

  add = (event) => {
    if (this.state.task.length > 0) {
      this.setState({
        taskList: this.state.taskList.concat({task:this.state.task, id: Date.now()}),
        task:""
      }); 
    }
    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({
      task: event.target.value
    });
  };

  render() {
    return (
    <form onSubmit={this.add}>
      <div className = "todo1">
        <h1>Todo Basico VNW</h1>
        <div className = "escrever">
        <input onChange={this.handleChange} placeholder ="Escreva Aqui" value = {this.state.task}/>
        <button onClick={this.add}>add</button>
        </div>
       <div>
          {this.state.taskList.map((item) => (
            <ul className = "lista">
              <li className = "lista2"> 
                {item.task}
                <button onClick={ () => {this.limpar(item.id)}}>x</button> 
              </li>
            </ul>
          ))}
        </div>
      </div>
    </form>
    );
  }
}

export default App;
