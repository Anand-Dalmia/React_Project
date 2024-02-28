// Create About component here to display the a small content here.
// In this component use paragraph tag (p) to display the content

// import { Component } from "react";
// class About extends Component {
//     render() {
//       return (
//         <div className="about">
//           {/* <h3>About Us</h3> */}
//           <p>
//             Hi, my name is Anand Dalmia. I am full stack web developer and 
//             I have developed serveral projects with React. I am also familiar with
//             Java and SQL.
//           </p>
//         </div>
//       );
//     }
//   }

//   export default About;

import React from "react";

const About = () => {
  return (
    <div className="about">
      {/* <h2>About Me</h2> */}
      <p>
        Hi, my name is Anand Dalmia. I am full stack web developer and 
        I have developed serveral projects with React. I am also familiar 
        with Java and SQL.
      </p>
     
    </div>
  );
};

export default About;

