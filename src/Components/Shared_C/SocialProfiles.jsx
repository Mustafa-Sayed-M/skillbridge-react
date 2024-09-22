import React from 'react';

const socialLinks = [
    {
        icon: "fa-brands fa-facebook fa-fw",
        href: "https://www.facebook.com/mustafacoder9/",
    },
    {
        icon: "fa-brands fa-linkedin fa-fw",
        href: "https://www.linkedin.com/in/mustafa-sayed-65a40027a/",
    },
    {
        icon: "fa-brands fa-github fa-fw",
        href: "https://github.com/Mustafa-Sayed-M",
    },
];

function SocialProfiles({ className }) {
    return (
        <ul className={`social-profiles flex items-center gap-2 ${className}`}>
            {socialLinks.map((link, index) => <li key={index}>
                <a href={link.href} target='_blank' rel="noreferrer" className='text-xl sm:hover:text-white transition-colors p-2 rounded-md bg-primary-color/10 border border-primary-color/20 sm:hover:bg-primary-color'>
                    <i className={link.icon}></i>
                </a>
            </li>)}
        </ul>
    )
}

export default SocialProfiles;