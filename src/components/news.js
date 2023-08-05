import React, { Component } from "react";

import "../style/New.scss";
import img1 from "../media/testimg/1.jpeg"

class News extends Component {

    render() {
        return (
            <div className="News">
                <div className="heading">
                    <p> - Events -</p>
                    <h1> What's Comming?  *_* </h1>
                    <hr />
                </div>
                <div className="newsitems">

                    <div className="left">
                        <img src={img1} alt="daknyabam" />
                        <div>
                            <p>29-50-9099</p>
                            <p> 30 august </p>
                        </div>

                    </div>
                    <div className="right">
                        <h3>Css battle clash of designers </h3>
                        <h3> telcenter </h3>

                        <button className="btn">
                            Register
                        </button>
                    </div>

                </div>
                <hr />
                <div className="newsitems">

                    <div className="left">
                        <img src={img1} alt="daknyabam" />
                        <div>
                            <p>29-50-9099</p>
                            <p> 30 august </p>
                        </div>

                    </div>
                    <div className="right">
                        <h3>Css battle clash of designers </h3>
                        <h3> telcenter </h3>

                        <button className="btn">
                            Register
                        </button>
                    </div>

                </div>
                <hr />
                <div className="newsitems">

                    <div className="left">
                        <img src={img1} alt="daknyabam" />
                        <div>
                            <p>29-50-9099</p>
                            <p> 30 august </p>
                        </div>

                    </div>
                    <div className="right">
                        <h3>Css battle clash of designers </h3>
                        <h3> telcenter </h3>

                        <button className="btn">
                            Register
                        </button>
                    </div>

                </div>
            </div>
        )


    }

}
export default News;
