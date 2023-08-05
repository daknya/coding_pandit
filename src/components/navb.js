import React from 'react';
import { Link } from 'react-router-dom'
import "../style/nav.scss"
// import img from "../media/img/logo.png"
import fb from "../media/img/fb.svg"
import ig from "../media/img/ig.svg"
import yt from "../media/img/yt.svg"

const Navbar = () => {



    function open() {
        const menu = document.getElementById('menu');
        menu.classList.toggle("toggleclass");
    }
    // const stickymenu = document.getElementById('open');


    // console.log("clint bottom is" + stickymenu.clientBottom);
    return (
        <>
            <div className='maincnt'>
                <div className='menu'>
                    <button className='btn' id='open' onClick={open}>Menu</button>
                    <div className='open' id='menu' onClick={open}>


                        <ul>
                            <li><Link to="/" className='Items'>
                                <h1>
                                    Home</h1>
                            </Link>
                            </li>
                            <li><Link to="/events" className='Items'>

                                <h1>  Events</h1>
                            </Link>
                            </li>
                            <li><Link to="/resources" className='Items'>
                                <h1>Resources</h1>
                            </Link>
                            </li>

                            <li><Link to="/ourteam" className='Items'>
                                <h1>
                                    Team
                                </h1>
                            </Link>

                            </li>
                            <li><Link to="/register" className='Items' >
                                <h1>
                                    Register
                                </h1>
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='logo' id='logo'>
                    {/* <img src={img} alt='logo' /> */}
                    <h1>
                        Coding Pandits
                    </h1>
                </div>

                <div className='social'>
                    <img src={fb} alt='fb' />
                    <img src={ig} alt='ig' />
                    <img src={yt} alt='yt' />

                </div>


            </div>
        </>
    )
}

export default Navbar;