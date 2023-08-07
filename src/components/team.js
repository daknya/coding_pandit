import React, { Component } from "react";

import "../style/Team.scss";
import img1 from "../media/testimg/1.jpeg"

class Team extends Component {

    render() {
        return (
            <div className="Team">
                <div className="heading">
                    <p> - Team -</p>
                    <h1> Meet Our People</h1>
                    <hr />
                    <h3>

                    </h3>

                </div>
                <div className="Teamitems">

                    <div className="item">
                        <img src={img1} alt="daknyabam" />
                        <h1>Daknya bam</h1>
                        <p>Lovely person</p>
                    </div>



                </div>

            </div>
        )


    }

}
export default Team;
