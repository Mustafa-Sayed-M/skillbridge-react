import React from 'react'
import Achievements from '../Components/About_C/Achievements/Achievements'
import OurGoals from '../Components/About_C/OurGoals/OurGoals'
import LandingText from '../Components/Shared_C/LandingText'

function About() {
    return (
        <div className='about-page'>
            <div className='container py-10'>
                {/* Landing Text */}
                <LandingText
                    title={"About Skill bridge"}
                    description={"Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape."}
                />
                <div className='content space-y-16'>
                    {/* Achievements */}
                    <Achievements />
                    {/* Our Goals */}
                    <OurGoals />
                </div>
            </div>
        </div>
    )
}

export default About