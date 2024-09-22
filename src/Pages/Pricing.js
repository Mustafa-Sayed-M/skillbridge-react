import React from 'react';
import LandingText from '../Components/Shared_C/LandingText';
import OurPricing from '../Components/Shared_C/OurPricing/OurPricing';
import Faqs from '../Components/Shared_C/Faqs/Faqs';

function Pricing() {
    return (
        <div className='pricing'>
            <div className='container py-10'>
                {/* Landing Text */}
                <LandingText
                    title={"Our Pricing"}
                    description={"Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."}
                />
                {/* Our Pricing */}
                <OurPricing />
                {/* Faqs */}
                <Faqs />
            </div>
        </div>
    )
}

export default Pricing;