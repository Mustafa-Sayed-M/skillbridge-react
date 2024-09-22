import React from 'react';

function LandingText({ title, description }) {
    return (
        <div className='landing-text py-10 mb-10 border-b border-b-gray-color'>
            <div className='content-container items-center grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                {/* Title */}
                <h1 className='font-bold text-4xl'>{title}</h1>
                {/* Description */}
                <p className='text-gray-500'>{description}</p>
            </div>
        </div>
    )
}

export default LandingText;