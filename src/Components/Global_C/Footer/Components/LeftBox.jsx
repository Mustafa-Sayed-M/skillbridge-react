import React from 'react';
import Logo from '../../../Shared_C/Logo';

const linksList = [
    { href: "mailto:mustafacoder9@gmail.com", label: "mustafacoder9@gmail.com", icon: "fa-solid fa-envelope" },
    { href: "https://wa.link/3hazb0", label: "01122124968", icon: "fa-solid fa-phone" },
    { href: "https://google/maps", label: "Al-Qalawiba, Kafr Hamza", icon: "fa-solid fa-location-dot" },
]

function LeftBox() {
    return (
        <div className='left-box'>
            <div className='flex items-center gap-2'>
                <Logo />
                <p className='font-medium'>Skill Bridge</p>
            </div>
            <ul className='mt-5 space-y-2'>
                {linksList.map((link, index) => <li key={index}>
                    <a className="font-medium line-clamp-1 text-gray-500 hover:text-primary-color transition" href={link.href} target='_blank' rel="noreferrer">
                        <i className={`${link.icon} me-2 fa-fw`}></i>
                        <span>{link.label}</span>
                    </a>
                </li>)}
            </ul>
        </div>
    )
}

export default LeftBox;