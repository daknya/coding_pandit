import React from "react";
import "../style/update.scss";

const Updates = () => {
    const news = [
        {
            id: "1",
            date: '12-01-11',
            time: "4:30",
            venue: "tel center",
            link: 'google.com',
            author: "daknya",

            description: "daknya"
        },
        {
            id: "2",
            date: '12-01-11',
            link: 'google.com',
            time: "4:30",
            author: "Puru don",

            venue: "tel center",
            description: "Alimuni talk Google Ceo Purushottam"
        },
        {
            id: "3",
            link: 'go.com',
            date: '12-01-11',
            time: "5:50",
            venue: "cse block",
            author: "Chandrashaker",
            description: "speech by Chandrashker"
        }

    ]






    const Newsitems = () => {

        return news.map((items, index) => {
            return (
                <div className="items" key={news.id}>
                    <div className="info">
                        <span className="data"> {items.date} {items.time} </span>
                        <span className="event"> {items.author} </span>
                        <span className="venue" > {items.venue} </span>
                    </div>
                    <hr />
                    <div className="description">
                        <h3 className="event"> {items.description} </h3>
                        <a href={items.linl}>
                            <button className="btn">
                                Register
                            </button>
                        </a>
                    </div>
                </div>

            )

        }
        )


    }



    console.log(typeof (items))
    return (
        <><div className="allnews">

            <div className="head">
                <h1> Events</h1>

            </div>
            <div className="newcontainer">
                <Newsitems />
            </div>
        </div>



        </>
    )


}
export default Updates;