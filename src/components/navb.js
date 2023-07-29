import React from 'react';
import { Link } from 'react-router-dom'
import "../style/nav.scss"
// import img from "../media/img/logo.png"
import fb from "../media/img/fb.svg"
import ig from "../media/img/ig.svg"
import yt from "../media/img/yt.svg"

const Navbar = () => {
    return (
        <>
            <div className='maincnt'>
                <div className='menu'>
                    <button className='btn'>Menu</button>
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

                <ul className='linkcnt'>
                    <li><Link to="/" className='Items'>
                        home
                    </Link>
                    </li>
                    <li><Link to="/events" className='Items'>
                        events
                    </Link>
                    </li>
                    <li><Link to="/resources" className='Items'>
                        resources
                    </Link>
                    </li>

                    <li><Link to="/ourteam" className='Items'>
                        team
                    </Link>

                    </li>
                    <li><Link to="/register" className='Items' >
                        register
                    </Link>
                    </li>
                </ul>
            </div>


        </>
    )
}

export default Navbar;