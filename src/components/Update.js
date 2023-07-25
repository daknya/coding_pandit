import React from "react";
import "../style/update.scss";

const Updates = () => {
    return (
        <>
            <div className="head">   <h1> upcomming events</h1></div>

            <div className="newcontainer">
                <div className="mover">

                    <div className="items">
                        <span className="data"> 14th sep</span>
                        <span className="event"> hackathon </span>
                        <span className="venue" > telcenter</span>
                        <button className="btn" > register</button>
                    </div>
                    <div className="items">
                        <span className="data"> 12th sep</span>
                        <span className="event"> hackathon </span>
                        <span className="venue" > telcenter</span>
                        <button className="btn" > register</button>

                    </div><div className="items">
                        <span className="data"> 11th sep</span>
                        <span className="event"> hackathon </span>
                        <span className="venue" > telcenter</span>
                        <button className="btn" > register</button>

                    </div>
                    <div className="items">
                        <span className="data"> 11th sep</span>
                        <span className="event"> hackathon </span>
                        <span className="venue" > telcenter</span>
                        <button className="btn" > register</button>

                    </div>
                </div>

            </div>
        </>
    )


}
export default Updates;