// import "./styles.css";
import React from "react";
// import styled, { css } from "styled-components";
import { ButtonView } from "./ButtonVariants.styled";

export default function App() {
  return (
    <div className="App">
      <h3>Button Variants</h3>
      <div>
        <h3>Outlined Button</h3>
        {/* Usage of ButtonView without the 'filled' prop */}
        <ButtonView>Outlined</ButtonView>
      </div>
      <div>
        <h3>Filled Button</h3>
        {/* Usage of ButtonView with the 'filled' prop and additional styles */}
        <ButtonView filled bg="cyan" color="red">
          Filled
        </ButtonView>
      </div>
    </div>
  );
}

// export default function App() {
//   return (
//     <div className="App">
//       <h3>Button Variants</h3>
//       <div>
//         <h3>Outlined Button</h3>
//         <ButtonView>Outlined</ButtonView>
//       </div>
//       <div>
//         <h3>Filled Button</h3>
//         <ButtonView filled bg="cyan" color="red">
//           Filled
//         </ButtonView>
//       </div>
//     </div>
//   );
// }