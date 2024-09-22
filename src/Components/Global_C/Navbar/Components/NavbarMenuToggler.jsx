import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleNavbarMenuStore } from '../../../../Store/Slices/appSlice';

function NavbarMenuToggler() {

    const { navbarMenu: { open } } = useSelector(state => state.app);

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(handleNavbarMenuStore(!open));
    };

    return (
        <button
            type=''
            aria-label=''
            title=''
            onClick={handleClick}
            className='text-xl md:hidden'
        >
            <div className={`bars-icon overflow-hidden h-[20px] flex flex-col ${open ? "justify-center" : "justify-between"}`}>
                <span style={{
                    transformOrigin: "center",
                }} className={`bg-primary-color w-10 h-1 rounded-md block transition duration-300 ${open && "-rotate-45"}`}></span>
                <span className={`bg-primary-color w-10 h-1 rounded-md block transition duration-300 ${open && "translate-x-full"}`}></span>
                <span style={{
                    transformOrigin: open ? "center" : "right center",
                }} className={`bg-primary-color w-10 ${!open ? "scale-75" : "rotate-45"} self-end h-1 rounded-md block transition duration-300`}></span>
            </div>
        </button>
    )
}

export default NavbarMenuToggler;