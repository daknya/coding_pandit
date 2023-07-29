import React from "react";
import "../style/update.scss";

const Updates = () => {
    const news = [
        {
            id: "1",
            date: '12-01-11',
            time: "4:30",
            venue: "tel center",
            linl: 'google.com',
            description: "daknya"
        },
        {
            id: "2",
            date: '12-01-11',
            linl: 'google.com',
            time: "4:30",
            venue: "tel center",
            description: "alimuni talk puru shottam"
        },
        {
            id: "2",
            linl: 'go.com',
            date: '12-01-11',
            time: "5:50",
            venue: "cse block",
            description: "speech by chandrashker"
        }

    ]




    

    const Newsitems = () => {

        return news.map((items, index) => {
            return (
                <div className="items">
                    <div><p>

                        <span className="data"> {items.date}{items.time}</span>
                        <span className="event"> {items.description} </span>
                        <span className="venue" > {items.venue}</span>
                    </p>
                    </div>
                    <button className="btn" >{items.link}</button>
                </div>

            )

        }
        )


    }



    console.log(typeof (items))
    return (
        <><div className="allnews">

            <div className="head">
                <h1> events</h1>

            </div>
            <div className="newcontainer">
                <Newsitems />
            </div>
        </div>



        </>
    )


}
export default Updates;