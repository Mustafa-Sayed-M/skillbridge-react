import React from 'react'
import Benefits from '../Components/Home_C/Benefits/Benefits'
import Testimonials from '../Components/Home_C/Testimonials/Testimonials'
import OurPricing from '../Components/Shared_C/OurPricing/OurPricing'
import Faqs from '../Components/Shared_C/Faqs/Faqs'
import OurCourses from '../Components/Home_C/OurCourses/OurCourses'

function Home() {
    return (
        <div className='home-page'>
            <div className='container py-10 space-y-10'>
                {/* Benefits */}
                <Benefits />
                {/* Our Courses */}
                <OurCourses />
                {/* Testimonials */}
                <Testimonials />
                {/* Our Pricing */}
                <OurPricing />
                {/* Faqs */}
                <Faqs />
            </div>
        </div>
    )
}

export default Home