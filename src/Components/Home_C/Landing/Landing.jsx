import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div className='landing h-[60vh]'>
            <div className='container h-full flex items-center justify-center'>
                {/* Text Area */}
                <div className='text-area text-center'>
                    {/* I Don't Know What Name For This! */}
                    <div className='any p-2 rounded-md bg-white flex justify-center gap-2 mb-3'>
                        {/* Icon Energy */}
                        <div className='icon bg-primary-color/20 flex items-center px-3 rounded-md'>
                            <i className="fa-solid fa-bolt text-primary-color"></i>
                        </div>
                        {/* Title Text */}
                        <h1 className='max-md:text-sm text-3xl font-bold'><span className='text-primary-color'>Unlock</span> Your Creative Potential</h1>
                    </div>
                    {/* Main Text */}
                    <h1 className='font-bold mb-2 max-md:text-lg text-2xl'>with Online Design and Development Courses.</h1>
                    <p>Learn from Industry Experts and Enhance Your Skills.</p>
                    {/* Links */}
                    <div className='links flex items-center justify-center gap-3 mt-5'>
                        {/* Explore Courses */}
                        <Link to={'/courses'} className='block bg-primary-color text-white rounded-md py-2 px-4'>Explore Courses</Link>
                        {/* View Pricing */}
                        <Link to={'/pricing'} className='block bg-white rounded-md py-2 px-4 shadow-sm'>View Pricing</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;