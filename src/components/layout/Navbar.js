import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({icon}) => {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={icon}/>Github Finder
                </h1>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        )
}
Navbar.defaultProps={
    icon:'fab fa-github'
}

export default Navbar
