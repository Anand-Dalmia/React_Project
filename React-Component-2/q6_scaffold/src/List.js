// import { Component } from "react";
// import { Todo } from "./Todo";

// export class List extends Component {
//   render() {
//     return (
//       <div className="list">
//         {/* Render the todo here from the props*/}
//       </div>
//     );
//   }
// }


// List.js

import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    return (
      <div className="list">
        {/* Mapping over todos array to render Todo components */}
        {this.props.todos.map((todo, index) => (
          <Todo key={index} todo={todo} index={index} onRemove={this.props.onRemove} />
        ))}
      </div>
    );
  }
}
