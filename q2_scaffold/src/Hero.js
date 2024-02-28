// Create component here to display the Basic information such as 
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon

// import { Component } from "react";

// let nameRef= React.createRef();
// let emailRef= React.createRef();
// let phoneRef= React.createRef();
// let address= React.createRef();

// let name= "Anand Dalmia";
// let email= "ananddalmia@getMaxListeners.com";
// let addressValue= "ABC , xyz street";
// let phone= "9504107277";


// class Hero extends Component{
//     render(){
//         return(
//             <>
//             <div className="hero">
//              <div>
//                 <span> Name: {name} </span>
                
//              </div>
//              <div>
//                 <span>Email: {email} </span>
//              </div>
//              <div>
//                 <span>Phone: {phone} </span>
//              </div>
//              <div>
//                 <span>Address: {addressValue} </span>
//              </div>
//                 {/* <input type="text" value={name}/>
//                 <input type="email" value={email}/>
//                 <input type="text" value={addressValue}></input>
//                 <input type="tel" value={phone}/> */}
//             </div>
//             </>
//         )
//     }
// }

// export default Hero;

// import React from "react";

// const Hero = () => {
//   return (
//     <div className="hero">
//       {/* <h2>Basic Information</h2> */}
//       <h4>Name: John Doe</h4>
//       <p>Email: johndoe@example.com</p>
//       <p>Phone: 123-456-7890</p>
//       <p>Address: 123 Main Street, City, Country</p>
//     </div>
//   );
// };

// export default Hero;

import { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <h3>Name: Your Name</h3>
        <p>Email: youremail@gmail.com</p>
        <p>Phone: 1234567890</p>
        <p>Address: ABC, xyz street.</p>
      </div>
    );
  }
}

export default Hero;

