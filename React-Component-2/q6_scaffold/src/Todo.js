// import { Component } from "react";

// export class Todo extends Component {
//   render() {
//     return (
//       <div className="todo">
//         <p>{this.props.todo.text}</p>
//         {/* Add the onClick event to handle removal of the todos */}
//         <button>x</button>
//       </div>
//     );
//   }
// }




import { Component } from "react";

export class Todo extends Component {
  handleRemove = () => {
    // Passing the index of the todo to be removed via props
    this.props.onRemove(this.props.index);
  };

  render() {
    return (
      <div className="todo">
        <p>{this.props.todo.text}</p>
        {/* Using onClick to handle todo removal */}
        <button onClick={this.handleRemove}>x</button>
      </div>
    );
  }
}
