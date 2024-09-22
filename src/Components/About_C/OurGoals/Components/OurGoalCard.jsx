import React from 'react';

function OurGoalCard({ ourGoalData }) {

    const {
        icon,
        name,
        description
    } = ourGoalData;

    return (
        <div className='our-goal-card bg-white p-3 rounded-md space-y-3'>
            {/* Icon */}
            <div className='icon text-2xl text-primary-color bg-primary-color/10 border border-primary-color/20 w-fit p-2 rounded-md'>
                <i className={icon}></i>
            </div>
            {/* Icon */}
            <h3 className='name font-semibold'>{name}</h3>
            {/* Icon */}
            <p className='description text-gray-500'>{description}</p>
        </div>
    )
}

export default OurGoalCard;