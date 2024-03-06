// import "./styles.css";
// import { Component } from "react";
// import { List } from "./List";
// import { Form } from "./Form";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: [
//         { text: "Do the laundry" },
//         { text: "Iron the clothes" },
//         { text: "Go for a walk" }
//       ]
//     };
//   }
//   handleAdd = (text) => {
//     // complete the function to add a new Todo to the list
//     const todo = new todo()
//     this.setState(props)
//   };

//   handleRemove = () => {
//     // complete the function to remove the Todo from the list
//   };
//   render() {
//     return (
//       <div className="App">
//         <span>Todo</span>
//         {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
//         <Form />
//         <List />
//       </div>
//     );
//   }
// }


// App.js

import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }

  handleAdd = (text) => {
    // Adding a new todo to the list
    const newTodo = { text: text };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  handleRemove = (index) => {
    // Removing a todo from the list
    const updatedTodos = [...this.state.todos];
    updatedTodos.splice(index, 1);
    this.setState({
      todos: updatedTodos
    });
  };

  render() {
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the handleAdd function as props to Form component */}
        <Form onAdd={this.handleAdd} />
        {/* Pass the todos list and handleRemove function as props to List component */}
        <List todos={this.state.todos} onRemove={this.handleRemove} />
      </div>
    );
  }
}
