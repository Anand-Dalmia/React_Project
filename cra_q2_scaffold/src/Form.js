// // Export the Form component and also import the name and email from HomePage component

// import {name,email} from "./HomePage";

// function handleSubmit(e) {
//   e.preventDefault();
// }

// const Form = () => (
//   <>
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h3>Login Page</h3>
//         <input type="text" placeholder="Name" value={name} />
//         <br />
//         <br />
//         <input type="email" placeholder="Email" value={email} />
//         <br />
//         <br />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   </>
// );

// // export default handleSubmit;
// export {Form};

// Complete the Form Component and export it
import func from "./func";
import { name, email } from "./HomePage";
const Form = () => (
  <>
    <div>
      <form onSubmit={func}>
        {/* Create a h3, 2 inputs and 1 button here */}
        <h3>Login Page</h3>
        <input type="text" value={name}/><br/><br/>
        <input type="email" value={email}/><br/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  </>
);
export {Form};