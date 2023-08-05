import React, { Component } from "react";

import "../style/resourse.scss";
import img1 from "../media/testimg/1.jpeg"

class Resourse extends Component {

    render() {
        return (
            <div className="News">
                <div className="heading">
                    <p> - Resourse -</p>
                    <h1>  Study Stuff - ahead </h1>
                    <hr />
                    <div className="filter">
                        <h2>filter by tag</h2>
                        <div className="tags">
                            <span className="tag">All</span>
                            <span className="tag">Web dev</span>
                            <span className="tag">Compitative programing</span>
                            <span className="tag">Machine learning</span>
                        </div>
                    </div>

                </div>
                <div className="resouseitems">

                    <div className="item">
                        <img src={img1} alt="daknyabam" />

                        <h1> web development</h1>

                        <p>This is a road map for how to start learning web development and start thinking </p>
                        <button className="btn">
                            Read
                        </button>
                    </div>



                </div>

            </div>
        )


    }

}
export default Resourse;
