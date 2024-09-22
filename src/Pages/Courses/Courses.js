import React from 'react'
import { useSelector } from 'react-redux'
import CourseCard from '../../Components/Courses_C/CourseCard';
import LandingText from '../../Components/Shared_C/LandingText';

function Courses() {

    const { coursesData: { data } } = useSelector(state => state.courses);

    return (
        <div className='courses-page'>
            <div className='container py-10'>
                {/* Landing Text */}
                <LandingText
                    title={"Online Courses on Design and Development"}
                    description={"Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey."}
                />
                {/* Courses Container */}
                <div className='courses-container space-y-10'>
                    {data.map((course, index) => <CourseCard
                        courseData={course}
                        key={index}
                    />)}
                </div>
            </div>
        </div>
    )
}

export default Courses