import React, { Component } from "react";

import "../style/hero.scss"
class Hero extends Component {

  render() {
    return (
      <>
        <div className="hero">
          <div className="left-element">
            <h3> We are</h3>
            <h1> Coding Pandit</h1>
            <div className="aboutp">
              -
              <p> We are an enthusiastic group of coders from National Institute of Technology, Arunachal Pradesh.</p>
              <p> We want to replace code fear with inspiration and motivation to learn. We believe that coding can</p>
              <p> be really fun and also understand the importance of quantitative skills for professional development.</p>
              -
            </div>
          </div>

          <div className="right-element ">
            <button className="btn"> Join us </button>
          </div>
          <div className="scroll"></div>
          {/* <div className="spacer layer" >
          </div> */}
        </div>

      </>
    )


  }

}
export default Hero;
