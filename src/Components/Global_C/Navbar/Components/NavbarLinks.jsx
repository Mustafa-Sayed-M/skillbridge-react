import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    {
        to: "/",
        label: "Home"
    },
    {
        to: "/courses",
        label: "Courses"
    },
    {
        to: "/about",
        label: "About"
    },
    {
        to: "/pricing",
        label: "Pricing"
    },
    {
        to: "/contact",
        label: "Contact"
    }
]

function NavbarLinks() {
    return (
        <ul className='flex items-center gap-1 max-md:hidden'>
            {links.map((link, index) => <li key={index}>
                <NavLink
                    to={link.to}
                    className={({ isActive }) => {
                        return `${isActive ? "bg-gray-color" : "sm:hover:bg-gray-color"} rounded-md p-2 transition`;
                    }}
                >
                    {link.label}
                </NavLink>
            </li>)}
        </ul>
    )
}

export default NavbarLinks;