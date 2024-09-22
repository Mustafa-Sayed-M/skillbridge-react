import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleNavbarMenuStore } from '../../../../Store/Slices/appSlice';
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

function NavbarMenu() {

    const { navbarMenu: { open } } = useSelector(state => state.app);

    const dispatch = useDispatch();

    useEffect(() => {

        const handleClickOutSide = () => {
            if (open) dispatch(handleNavbarMenuStore(!open));
        };

        document.addEventListener('click', handleClickOutSide);

        return () => {
            document.removeEventListener('click', handleClickOutSide);
        };

    }, [dispatch, open]);


    return (
        <div
            onClick={e => e.stopPropagation()}
            className={`navbar-menu md:hidden absolute top-full left-0 w-full bg-white z-50 shadow-md ${open ? "translate-y-0" : "scale-x-0 translate-y-4 opacity-0"} transition duration-300`}
        >
            <div className='container py-2'>
                <ul className='space-y-1'>
                    {links.map((link, index) => <li key={index}>
                        <NavLink
                            to={link.to}
                            className={({ isActive }) => {
                                return `${isActive ? "bg-gray-color" : "sm:hover:bg-gray-color"} rounded-md p-2 block transition`;
                            }}
                        >
                            {link.label}
                        </NavLink>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default NavbarMenu;