import React from 'react';
import { Link } from 'react-router-dom'
import "../style/nav.scss"
import img from "../media/img/logo.png"
const Navbar = () => {
    return (
        <>
            <div className='maincnt'>
                <div className='logo' id='logo'>
                    <img src={img} alt='logo' />
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