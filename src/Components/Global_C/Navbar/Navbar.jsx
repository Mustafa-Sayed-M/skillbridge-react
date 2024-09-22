import React from 'react';
import NavbarLinks from './Components/NavbarLinks';
import NavbarAuth from './Components/NavbarAuth';
import NavbarMenuToggler from './Components/NavbarMenuToggler';

function Navbar() {
    return (
        <nav className='flex items-center justify-between md:w-full relative'>
            {/* Navbar Links */}
            <NavbarLinks />
            {/* Navbar Right Box */}
            <div className='navbar-right-box flex items-center gap-3'>
                {/* Navbar Auth */}
                <NavbarAuth />
                {/* Navbar Menu Toggler */}
                <NavbarMenuToggler />
            </div>
        </nav>
    )
}

export default Navbar;