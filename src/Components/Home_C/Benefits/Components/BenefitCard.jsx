import React from 'react';

function BenefitCard({ benefitData }) {

    const {
        id,
        name,
        description
    } = benefitData;

    return (
        <div className='benefit-card p-4 bg-white rounded-md shadow-sm'>
            {/* Benefit Number */}
            <h1 className='text-5xl text-right font-bold mb-3 py-2'>0{id}</h1>
            {/* Benefit Name */}
            <h2 className='text-lg mb-2 font-medium'>{name}</h2>
            {/* Benefit Description */}
            <p className='text-gray-500 mb-3'>{description}</p>
            {/* Learn More */}
            <button
                type='button'
                aria-label='Learn More'
                title='Learn More'
                className='text-primary-color text-2xl py-2 block ms-auto'
            >
                <i className="fa-solid fa-arrow-right -rotate-45"></i>
            </button>
        </div>
    )
}

export default BenefitCard;