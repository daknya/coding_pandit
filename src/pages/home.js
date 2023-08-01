import React from "react";
import Hero from '../components/hero'
import Navbar from "../components/navb";
import Gallery from "../components/gallery";
import Footer from "../components/footer"
import Updates from "../components/Update";
import "../style/home.scss"
import EventOrganised from "../components/organised";
function Home() {


    return (
        <>
            <div className="homenh">
                <Navbar />
                <Hero />
            </div>
            <Updates />
            <EventOrganised />

            <Gallery />
            <Footer />
        </>
    );
}

export default Home;
