import React from 'react'
import LandingText from '../Components/Shared_C/LandingText'
import FormContact from '../Components/Contact_C/FormContact'
import ContactHelper from '../Components/Contact_C/ContactHelper'

function Contact() {
    return (
        <div className='contact-page'>
            <div className='container py-10'>
                {/* Landing Text */}
                <LandingText
                    title={"Contact Us"}
                    description={"Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."}
                />
                <div className='container-wrapper shadow-sm rounded-md bg-white grid grid-cols-1 lg:grid-cols-3 gap-5 items-center'>
                    <FormContact />
                    <ContactHelper />
                </div>
            </div>
        </div>
    )
}

export default Contact