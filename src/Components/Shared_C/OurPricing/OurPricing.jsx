import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PlanCard from './Components/PlanCard';
import PlanToggler from './Components/PlanToggler';

function OurPricing() {

    const { ourPricing } = useSelector(state => state.staticData);
    const [priceDuration, setPriceDuration] = useState("MONTHLY");

    const handleTogglerPriceDuration = () => {
        setPriceDuration(priceDuration === "MONTHLY" ? "YEARLY" : "MONTHLY");
    };

    return (
        <div className='our-pricing space-y-5 py-5'>
            {/* Plans Toggler */}
            <PlanToggler
                className={'mx-auto'}
                priceDuration={priceDuration}
                handleTogglerPriceDuration={handleTogglerPriceDuration}
            />
            {/* Plans Container */}
            <div className='plans-container grid grid-cols-1 md:grid-cols-2 gap-5 shadow-sm rounded-md bg-white p-3 sm:p-5'>
                {ourPricing.map((plan, index) => <PlanCard
                    key={index}
                    planData={plan}
                    priceDuration={priceDuration}
                />)}
            </div>
        </div>
    )
}

export default OurPricing;