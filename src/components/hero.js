import React, { Component } from "react";

import "../style/hero.scss"
class Hero extends Component {

  render() {
    return (
      <>
        <div className="hero">
          <div className="left-element">
            <h3> HELLO THERE !</h3>
            <h1> WE ARE CODING PANDIT</h1>
            <p>Group of nerds</p>
          </div>

          <div className="right-element ">
            <button> join us </button>
          </div>
          {/* <div className="spacer layer" >
          </div> */}
        </div>

      </>
    )


  }

}
export default Hero;
