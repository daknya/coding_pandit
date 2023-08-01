import React, { Component } from "react";

import "../style/hero.scss"
class Hero extends Component {

  render() {
    return (
      <>
        <div className="hero">
          <div className="left-element">

            <h1>Puru's word</h1>
            <h1>Wrong</h1>
            <h1>Life</h1>
            <h1>Interesting</h1>
          </div>

          <div className="right-element ">
            <button className="btn"> Join us </button>
          </div>

        </div>

      </>
    )


  }

}
export default Hero;
