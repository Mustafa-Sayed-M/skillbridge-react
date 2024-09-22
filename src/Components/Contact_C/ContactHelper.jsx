import React from 'react';
import SocialProfiles from '../Shared_C/SocialProfiles';

function ContactHelper() {
    return (
        <div className='contact-helper p-5 grid md:grid-cols-2 lg:grid-cols-1 gap-3'>
            {/* Email */}
            <a href='mailto:mustafacoder9@gmail.com' target='_blank' rel="noreferrer" className='block bg-body-color border border-gray-color py-5 rounded-md text-center space-y-2 sm:hover:text-primary-color transition-colors'>
                {/* Icon */}
                <i className="fa-solid fa-envelope fa-fw text-xl"></i>
                {/* Text */}
                <p>mustafacoder9@gmail.com</p>
            </a>
            {/* Phone */}
            <a href='https://wa.link/20sq6e' target='_blank' rel="noreferrer" className='block bg-body-color border border-gray-color py-5 rounded-md text-center space-y-2 sm:hover:text-primary-color transition-colors'>
                {/* Icon */}
                <i className="fa-solid fa-phone fa-fw text-xl"></i>
                {/* Text */}
                <p>01122124968</p>
            </a>
            {/* Location */}
            <a href='https://www.google.com/maps' target='_blank' rel="noreferrer" className='block bg-body-color border border-gray-color py-5 rounded-md text-center space-y-2 sm:hover:text-primary-color transition-colors'>
                {/* Icon */}
                <i className="fa-solid fa-location-dot fa-fw text-xl"></i>
                {/* Text */}
                <p>Qalyubia, Kafr Hamza</p>
            </a>
            {/* Social Profiles */}
            <div className='social-profiles bg-body-color border border-gray-color py-5 rounded-md text-center space-y-4'>
                <SocialProfiles className={"justify-center"} />
                <p>Social Profiles</p>
            </div>
        </div>
    )
}

export default ContactHelper;