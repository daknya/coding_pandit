import React from "react";
import Hero from '../components/hero'
import Navbar from "../components/navb";
import Gallery from "../components/gallery";
import Footer from "../components/footer"
import Updates from "../components/Update";
function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Updates />

            <Gallery />
            <Footer />
        </>
    );
}

export default Home;
