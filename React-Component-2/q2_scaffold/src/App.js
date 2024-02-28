// import "./styles.css";
// //create a object to store all the styles.
// export default function App() {
//   return (
//     <div className="App">
//       {/* Refactor the inline style to use the internal style. */}
//       <form
//         style={{
//           width: "60%",
//           margin: "50px auto",
//           display: "flex",
//           flexDirection: "column",
//           gap: 20
//         }}
//       >
//         {/* Refactor the inline style to use the internal style. */}
//         <h3 style={{ fontSize: "2rem", letterSpacing: 2 }}>Sign Up</h3>
//         <input style={{ padding: 10 }} placeholder="Username" />
//         <input style={{ padding: 10 }} placeholder="Email" />
//         <input style={{ padding: 10 }} placeholder="Password" />
//         {/* Refactor the inline style to use the internal style. */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: 20
//           }}
//         >
//           {/* Refactor the inline style to use the internal style. */}
//           <button
//             style={{
//               outline: "none",
//               paddingBlock: 5,
//               width: 100,
//               backgroundColor: "red",
//               color: "white",
//               cursor: "pointer"
//             }}
//           >
//             Cancel
//           </button>
//           {/* Refactor the inline style to use the internal style. */}
//           <button
//             style={{
//               outline: "none",
//               paddingBlock: 5,
//               width: 100,
//               backgroundColor: "red",
//               color: "white",
//               cursor: "pointer"
//             }}
//           >
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// const styles={
//     form: {
//         width: "60%",
//         margin: "50px auto",
//         display: "flex",
//         flexDirection: "column",
//         gap: 20
//     },
    
// }

import "./styles.css";

// Define styles as objects
const styles = {
  form: {
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  heading: {
    fontSize: "2rem",
    letterSpacing: 2,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
  },
  button: {
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer",
  },
};

export default function App() {
  return (
    <div className="App">
      {/* Use internal styles */}
      <form style={styles.form}>
        {/* Use internal styles */}
        <h3 style={styles.heading}>Sign Up</h3>
        <input style={{ padding: 10 }} placeholder="Username" />
        <input style={{ padding: 10 }} placeholder="Email" />
        <input style={{ padding: 10 }} placeholder="Password" />
        {/* Use internal styles */}
        <div style={styles.buttonContainer}>
          {/* Use internal styles */}
          <button style={styles.button}>Cancel</button>
          {/* Use internal styles */}
          <button style={styles.button}>Login</button>
        </div>
      </form>
    </div>
  );
}
