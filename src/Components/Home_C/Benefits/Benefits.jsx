import React from 'react';
import { useSelector } from 'react-redux';
import BenefitCard from './Components/BenefitCard';

function Benefits() {

    const { benefits } = useSelector(state => state.staticData);

    return (
        <div className='benefits py-5' id='benefits'>
            {/* Heading Text */}
            <div className='heading-text space-y-2 mb-10'>
                <h1 className='font-semibold text-2xl'>Benefits</h1>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
            </div>
            {/* Benefits Cards Wrapper */}
            <div className='benefits-cards-wrapper grid grid-cols-1 md:grid-cols-2 gap-3'>
                {benefits.map((benefitItem, index) => <BenefitCard
                    key={index}
                    benefitData={benefitItem}
                />)}
            </div>
        </div>
    )
}

export default Benefits;