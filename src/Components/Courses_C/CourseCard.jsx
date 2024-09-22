import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ courseData }) {

    const {
        name,
        duration,
        description,
        curriculum,
        teacher,
        level,
        images
    } = courseData.attributes;

    return (
        <div className='course-card p-5 rounded-md bg-white'>
            {/* Heading */}
            <div className='heading mb-7 flex items-center max-md:flex-col gap-3'>
                {/* Text Area */}
                <div className='textarea w-full space-y-2 max-md:text-center'>
                    {/* Name */}
                    <h1 className='font-bold text-xl'>{name}</h1>
                    {/* Description */}
                    <p className='text-gray-400'>{description}</p>
                </div>
                {/* Link View Course */}
                <Link
                    to={`/courses/${name.replace(/[\s/]+/g, "+")}/${courseData.id}`}
                    className='font-medium text-nowrap bg-body-color rounded-md block p-2 border border-gray-color max-md:w-full text-center sm:hover:border-primary-color sm:hover:text-white sm:hover:bg-primary-color transition'
                >
                    View Course
                </Link>
            </div>
            {/* Images */}
            <div className='images mb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                {images.data.map((image, index) => <img
                    src={image.attributes.url}
                    alt={name}
                    key={index}
                />)}
            </div>
            {/* Sub Info */}
            <div className='sub-info flex max-sm:flex-col gap-y-4 items-center justify-between mb-7'>
                {/* Duration and Level */}
                <div className='duration-level flex items-center gap-2 font-medium text-sm'>
                    {/* Duration */}
                    <div className='duration border border-gray-color rounded-md p-2'>{duration}</div>
                    {/* Level */}
                    <div className='level border border-gray-color rounded-md p-2'>{level}</div>
                </div>
                {/* Teacher Name */}
                <p className='font-medium'>{teacher}</p>
            </div>
            {/* Curriculum */}
            <div className='curriculum border border-gray-color rounded-md'>
                {/* Heading */}
                <div className='heading p-3 border-b border-b-gray-color'>
                    <h2 className='font-semibold'>Curriculum</h2>
                </div>
                {/* Body */}
                <div className='body p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
                    {curriculum.map((curriculumItem, index) => <div className='curriculum-item' key={index}>
                        <h1 className='font-bold text-4xl mb-2'>0{index + 1}</h1>
                        <p className='line-clamp-1'>{curriculumItem.name}</p>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default CourseCard;