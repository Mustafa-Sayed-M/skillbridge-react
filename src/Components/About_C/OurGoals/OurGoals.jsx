import React from 'react';
import { useSelector } from 'react-redux';
import OurGoalCard from './Components/OurGoalCard';

function OurGoals() {

    const { ourGoals } = useSelector(state => state.staticData);

    return (
        <div className='our-goals' id='goals'>
            {/* Heading Text */}
            <div className='heading-text space-y-2 mb-10'>
                <h1 className='font-semibold text-2xl'>Our Goals</h1>
                <p className='text-gray-500'>At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
                    Through our carefully crafted courses, we aim to</p>
            </div>
            {/* Achievements Cards */}
            <div className='achievements-cards grid grid-cols-1 md:grid-cols-2 gap-3'>
                {ourGoals.map((goalItem, index) => <OurGoalCard
                    ourGoalData={goalItem}
                    key={index}
                />)}
            </div>
        </div>
    )
}

export default OurGoals;