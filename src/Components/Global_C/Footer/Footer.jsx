import React from 'react';
import Copyrights from './Components/Copyrights';
import LinksComponent from './Components/LinksComponent';
import LeftBox from './Components/LeftBox';
import SocialProfiles from '../../Shared_C/SocialProfiles';

const homeLinksList = [
    { to: "benefits", label: "Benefits" },
    { to: "courses", label: "Our Courses" },
    { to: "testimonials", label: "Our Testimonials" },
    { to: "faq", label: "Our FAQ" }
];

const aboutLinksList = [
    { to: "company", label: "Company" },
    { to: "achievements", label: "Achievements" },
    { to: "goals", label: "Our Goals" }
];


function Footer() {
    return (
        <footer className='py-5 bg-white'>
            <div className='container'>
                {/* Content Container */}
                <div className='content-container py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {/* Left Box */}
                    <LeftBox />
                    {/* Home */}
                    <LinksComponent navigateTo={'/'} linksList={homeLinksList} title={"Home"} />
                    {/* About */}
                    <LinksComponent navigateTo={'/about'} linksList={aboutLinksList} title={"About Us"} />
                    {/* Social Profiles */}
                    <div className=''>
                        <h3 className="font-medium mb-5">Social Profiles</h3>
                        <SocialProfiles />
                    </div>
                </div>
                {/* Copyrights */}
                <Copyrights />
            </div>
        </footer>
    )
}

export default Footer;