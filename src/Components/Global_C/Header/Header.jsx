import React from 'react';
import Logo from '../../Shared_C/Logo';
import Navbar from '../Navbar/Navbar';
import NavbarMenu from '../Navbar/Components/NavbarMenu';

function Header() {
    return (
        <header className='relative'>
            <div className='container border-b border-b-gray-color flex items-center justify-between gap-7 py-3'>
                {/* Logo */}
                <Logo />
                {/* Navbar */}
                <Navbar />
            </div>
            {/* Navbar Menu */}
            <NavbarMenu />
        </header>
    )
}

export default Header;