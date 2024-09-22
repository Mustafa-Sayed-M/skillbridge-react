import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import LandingText from '../../../Components/Shared_C/LandingText';
import { useDispatch, useSelector } from 'react-redux';
import { GET_COURSE_API } from '../../../Store/Slices/courseSlice';

function Course() {

    const { courseId } = useParams();
    const dispatch = useDispatch();

    const { courseData: { data } } = useSelector(state => state.course);

    useEffect(() => {
        dispatch(GET_COURSE_API({ courseId }));
    }, [dispatch, courseId]);

    // Destructing Data:
    const {
        name,
        description,
        curriculum,
    } = data.attributes;

    return (
        <div className={`course-${courseId}`}>
            <div className='container py-10'>
                {/* Landing Text */}
                <LandingText
                    title={name}
                    description={description}
                />
                {/* Curriculum */}
                <div className='curriculum-container grid grid-cols-1 md:grid-cols-2 gap-3'>
                    {curriculum?.map((curriculumItem, index) => <div className='curriculum-item bg-white p-3 rounded-md shadow-md space-y-4' key={index}>
                        {/* Number */}
                        <h1 className='font-bold text-4xl text-right'>0{index + 1}</h1>
                        {/* Name */}
                        <h2 className='font-medium'>{curriculumItem.name}</h2>
                        {/* Lessons */}
                        <div className='lessons'>
                            {curriculumItem?.lessons?.map((lessonsItem, index) => <div className='lessons-items p-3 rounded-md border border-gray-color space-y-2 flex items-center justify-between gap-2' key={index}>
                                {/* Name */}
                                <h4>{lessonsItem.name}</h4>
                                {/* Duration */}
                                <div className='duration bg-gray-color py-2 px-4 rounded-md'>
                                    <i class="fa-regular fa-clock me-2"></i>
                                    <span>{lessonsItem.duration}</span>
                                </div>
                            </div>)}
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Course;