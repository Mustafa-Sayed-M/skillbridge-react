import React from 'react';
import { useSelector } from 'react-redux';
import AchievementCard from './Components/AchievementCard';

function Achievements() {

    const { achievements } = useSelector(state => state.staticData);

    return (
        <div className='achievements' id='achievements'>
            {/* Heading Text */}
            <div className='heading-text space-y-2 mb-10'>
                <h1 className='font-semibold text-2xl'>Achievements</h1>
                <p className='text-gray-500'>Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements</p>
            </div>
            {/* Achievements Cards */}
            <div className='achievements-cards grid grid-cols-1 md:grid-cols-2 gap-3'>
                {achievements.map((achievement, index) => <AchievementCard
                    achievementData={achievement}
                    key={index}
                />)}
            </div>
        </div>
    )
}

export default Achievements;