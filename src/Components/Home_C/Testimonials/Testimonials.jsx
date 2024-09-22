import React from 'react';
import { useSelector } from 'react-redux';
import TestimonialCard from './Components/TestimonialCard';

function Testimonials() {

    const { testimonials } = useSelector(state => state.staticData);

    return (
        <section className='testimonials py-5' id='testimonials'>
            {/* Heading Text */}
            <div className='heading-text space-y-2 mb-10'>
                <h1 className='font-semibold text-2xl'>Our Testimonials</h1>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
            </div>
            {/* Testimonials Cards Wrapper */}
            <div className='testimonials-cards-wrapper grid grid-cols-1 md:grid-cols-2 gap-3'>
                {testimonials.map((testimonialItem, index) => <TestimonialCard
                    key={index}
                    testimonialData={testimonialItem}
                />)}
            </div>
        </section>
    )
}

export default Testimonials;