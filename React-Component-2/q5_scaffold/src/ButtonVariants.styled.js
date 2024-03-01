import styled from "styled-components";

// Complete the below given ButtonView style Component

// export const ButtonView = styled.button`
//    /* Default styles */
//     background-color: #fff;
//     color: #000;
//     border: 2px solid #000;
//     padding: 8px 16px;
//     cursor: pointer;
//     font-size: 16px;
    
//     /* Conditional styles based on props */
//     ${(props) =>
//         props.filled &&
//         css`
//         background-color: ${props.bg};
//         color: ${props.color};
//         border: none;
//         `}
// `;


// import styled from "styled-components";

export const ButtonView = styled.button`
outline: none;
height: 50px;
width: 250px;
font-size: 1.5rem;
font-weight: bold;
text-transform: uppercase;
background-color: ${(props) => (props.filled ? props.bg || "#000" : "#fff")};
color: ${(props) => (props.filled ? props.color || "#fff" : "#000")};
border: ${(props) => (props.filled ? "none" : "3px solid #000")};
cursor: pointer;
`;
