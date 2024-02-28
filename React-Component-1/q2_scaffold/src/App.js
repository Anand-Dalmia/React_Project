// import "./styles.css";
// import React from "react";

// function App() {
//   return (
//     <div className="App">
//       <h1>Reach me</h1>
//       {/* Code here */}
//     </div>
//   );
// }

// export default App;

import React from "react";
import List from "./components/List"; // Import the List component

function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>Reach me</h1>
      {/* Render the List component */}
      <List />
    </div>
  );
}

export default App;

