import React from 'react';
import logoImage from '../../Assets/Logo.png';
import { Link } from 'react-router-dom';

function Logo({ className }) {
    return (
        <Link
            to={'/'}
            className={`app-logo ${className}`}
        >
            <img
                width={40}
                alt='Logo'
                src={logoImage}
            />
        </Link>
    )
}

export default Logo;