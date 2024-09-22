import React from 'react';

function TestimonialCard({ testimonialData }) {

    const {
        content,
        author,
        image
    } = testimonialData;

    return (
        <div className='testimonial-card bg-white p-4 rounded-md space-y-5 shadow-sm'>
            {/* Content */}
            <p className='text-gray-500 line-clamp-3'>{content}</p>
            {/* Foot */}
            <div className='foot flex items-center justify-between'>
                {/* Author Data */}
                <div className='author-data flex items-center gap-2'>
                    {/* Author Image */}
                    <img
                        src={image}
                        alt='author'
                        className='rounded-md w-12'
                    />
                    {/* Author Name */}
                    <p className='font-medium text-gray-700'>{author}</p>
                </div>
                {/* Read More */}
                <button
                    type='button'
                    title='Read More'
                    aria-label='Read More'
                    className='font-medium bg-gray-color rounded-md py-2 px-5 sm:hover:bg-primary-color sm:hover:text-white transition-colors'
                >
                    Read Full Story
                </button>
            </div>
        </div>
    )
}

export default TestimonialCard;