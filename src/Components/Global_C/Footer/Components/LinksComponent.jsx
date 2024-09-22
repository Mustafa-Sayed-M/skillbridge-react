import React from 'react';
import { useNavigate } from 'react-router-dom';

function LinksComponent({ navigateTo, title, linksList }) {
    const navigate = useNavigate();

    const handleScroll = (e, to) => {
        e.preventDefault();
        navigate(navigateTo); // Navigate to home page
        setTimeout(() => {
            const section = document.getElementById(to);
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        }, 0); // Delay to ensure the page navigation is complete
    };

    return (
        <div className="links-component">
            <h3 className="font-medium mb-3">{title}</h3>
            <ul>
                {linksList.map((link, index) => (
                    <li key={index}>
                        <a href={`#${link.to}`} onClick={(e) => handleScroll(e, link.to)} className='block py-1 font-medium text-gray-500 hover:text-primary-color transition'>
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LinksComponent;