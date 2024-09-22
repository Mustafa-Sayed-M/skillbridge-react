import React from 'react';

function PlanCard({ planData, priceDuration }) {

    const {
        name, // String
        price, // Object
        features, // Array
    } = planData;

    return (
        <div className='plan-card p-3 sm:p-5 bg-body-color rounded-md border border-gray-color'>
            {/* Plan Name */}
            <div className='plan-name bg-primary-color/10 p-2 text-center font-medium rounded-md border border-primary-color/20 mb-3'>{name}</div>
            {/* Price */}
            <div className='price text-center py-3 mb-3'>
                <span className='font-bold text-4xl'>${price[priceDuration === 'MONTHLY' ? "monthly" : "yearly"]}</span><sub>/ {priceDuration === "MONTHLY" ? "monthly" : "yearly"}</sub>
            </div>
            {/* Available Features */}
            <div className='available-features bg-white p-3 rounded-t-md border border-gray-color'>
                <p className='text-center mb-3'>Available Features</p>
                <ul className='space-y-2'>
                    {features.map((feature, index) => <li key={index} className='flex items-center gap-2 p-2 rounded-md border border-gray-color'>
                        <div className='available-icon p-1 bg-primary-color/20 rounded-md'>{feature.available ? (<i className="fa-solid fa-check fa-fw"></i>) : (<i className="fa-solid fa-xmark fa-fw"></i>)}</div>
                        <p>{feature.name}</p>
                    </li>)}
                </ul>
            </div>
            {/* Button Get Start */}
            <button
                type='button'
                className='bg-primary-color block w-full py-3 text-white rounded-b-md'
            >
                Get Started
            </button>
        </div>
    )
}

export default PlanCard;