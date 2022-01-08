import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <Link to='/'>
            <div>
                <button>Home</button>
            </div>
        </Link>
    )
}

export default NavBar
