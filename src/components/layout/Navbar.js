import React from 'react'

const Navbar = ({icon}) => {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={icon}/>Github Finder
                </h1>
            </nav>
        )
}
Navbar.defaultProps={
    icon:'fab fa-github'
}

export default Navbar
