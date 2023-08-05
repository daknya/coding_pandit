import React, { Component } from "react";
// import img1 from "../media/testimg/1.jpeg"
// // import img2 from "../media/testimg/2.jpg"
// import img3 from "../media/testimg/3.jpg"
// import img4 from "../media/testimg/4.jpg"
// import img5 from "../media/testimg/5.jpg"
import "../style/hero.scss"
class Hero extends Component {

  render() {
    return (
      <>
        <div className="hero">
          <div className="left-element">

            <h1>Imagination</h1>
            <h1>Wrong</h1>
            <h1>Life</h1>
            <h1>Interesting</h1>
          </div>

          {/* <img src={img1} alt="itsandimagefuck" className="floatimg1 img"></img>
          <img src={img3} alt="itsandimagefuck" className="floatimg2 img "></img>
          <img src={img4} alt="itsandimagefuck" className="floatimg3 img"></img>
          <img src={img5} alt="itsandimagefuck" className="floatimg4 img"></img> */}

          <div className="right-element ">
            <button className="btn"> Join us </button>
          </div>

        </div>

      </>
    )


  }

}
export default Hero;
