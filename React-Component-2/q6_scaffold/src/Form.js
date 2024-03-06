// import { Component } from "react";

// export class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: ""
//     };
//   }

//   handleChange = (e) => {
//     this.setState({
//       text: e.target.value
//     });
//   };

//   render() {
//     return (
//       <div className="form">
//         <input
//           onChange={this.handleChange}
//           value={this.state.text}
//           placeholder="Whats on your mind?"
//           required
//         />
//         {/* Add onclick event on the button to add the todos */}
//         <button>Add</button>
//       </div>
//     );
//   }
// }

// Form.js

import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Passing the text to the handleAdd function via props
    this.props.onAdd(this.state.text);
    // Clearing the input field after adding todo
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div className="form">
        {/* Using onSubmit to handle form submission */}
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="What's on your mind?"
            required
          />
          {/* Using type="submit" to submit the form */}
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
