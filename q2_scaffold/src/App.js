import "./styles.css";
import { Component } from "react";

import About from "./About";
import Hero from "./Hero";
import Skill from "./Skills";
// Use Hero, Skills and About component to display your information
class App extends Component {
  render() {
    return (
      <>
      {/* render your component here  */}
      
      <Hero/>
      <Skill/>
      <About/>
      </>

    )}
}
export default App;