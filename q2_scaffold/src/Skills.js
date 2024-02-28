// Create Skill component here to display your skills
// In this component there should be a list with each listitem as your skill.

// import React from "react";

// const skills = ["JavaScript", "React", "HTML", "CSS", "Node.js", "Express.js", "MongoDB"];

// const Skill = () => {
//   return (
//     <div className="skill-list">
//       <h2>My Skills</h2>
//       <ul>
//         {skills.map((skill, index) => (
//           <li key={index}>{skill}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Skill;

// import React from "react";

// const skills = ["JavaScript", "React", "HTML", "CSS", "Node.js", "Express.js", "MongoDB"];

// const Skill = () => {
//   return (
//     <div className="skill-list">
//       {/* <h2>My Skills</h2> */}
//       <ul>
//         <li><span>{skills[0]}</span></li>
//         <li><span>{skills[1]}</span></li>
//         <li><span>{skills[2]}</span></li>
//         <li><span>{skills[3]}</span></li>
//         <li><span>{skills[4]}</span></li>
//         <li><span>{skills[5]}</span></li>
//         <li><span>{skills[6]}</span></li>
//       </ul>
//     </div>
//   );
// };

// export default Skill;

import React from "react";

const Skill = () => {
  return (
    <div className="skill-list">
      {/* <h2>My Skills</h2> */}
      <ul className="skills-container">
        <li className="skill" style={{backgroundColor: '#00ff00'}}><span>JavaScript</span></li>
        <li className="skill" style={{backgroundColor: '#00ff00'}}><span>React</span></li>
        <li className="skill" style={{backgroundColor: '#00ff00'}}><span>HTML</span></li>
        <li className="skill" style={{backgroundColor: '#00ff00'}}><span>CSS</span></li>
        <li className="skill" style={{backgroundColor: '#00ff00'}}><span>Node.js</span></li>
        <li className="skill" style={{backgroundColor: '#00ff00'}}><span>Express.js</span></li>
        <li className="skill" style={{backgroundColor: '#00ff00'}}><span>MongoDB</span></li>
      </ul>
    </div>
  );
};

export default Skill;




