import { createSlice } from "@reduxjs/toolkit";

const staticDataSlice = createSlice({
    name: "staticData",
    initialState: {
        achievements: [
            {
                icon: "fa-solid fa-crown fa-fw",
                name: "Trusted by Thousands",
                description: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals."
            },
            {
                icon: "fa-solid fa-medal fa-fw",
                name: "Award-Winning Courses",
                description: "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies."
            },
            {
                icon: "fa-regular fa-message fa-fw",
                name: "Positive Student Feedback",
                description: "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials."
            },
            {
                icon: "fa-solid fa-bolt fa-fw",
                name: "Industry Partnerships",
                description: "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies"
            },
        ],
        ourGoals: [
            {
                icon: "fa-solid fa-industry fa-fw",
                name: "Provide Practical Skills",
                description: "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field."
            },
            {
                icon: "fa-solid fa-book-bookmark fa-fw",
                name: "Foster Creative Problem-Solving",
                description: "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation."
            },
            {
                icon: "fa-solid fa-shapes fa-fw",
                name: "Promote Collaboration and Community",
                description: "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together."
            },
            {
                icon: "fa-solid fa-circle-exclamation fa-fw",
                name: "Stay Ahead of the Curve",
                description: "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills."
            },
        ],
        ourPricing: [
            {
                name: "Free Plan",
                price: {
                    monthly: "0",
                    yearly: "0",
                },
                features: [
                    {
                        name: "Access to selected free courses.",
                        available: true
                    },
                    {
                        name: "Limited course materials and resources.",
                        available: true
                    },
                    {
                        name: "Basic community support.",
                        available: true
                    },
                    {
                        name: "No certification upon completion.",
                        available: true
                    },
                    {
                        name: "Ad-supported platform.",
                        available: true
                    },
                    {
                        name: "Access to exclusive Pro Plan community forums.",
                        available: false
                    },
                    {
                        name: "Early access to new courses and updates.",
                        available: false
                    },
                ]
            },
            {
                name: "Pro Plan",
                price: {
                    monthly: "79",
                    yearly: "1079",
                },
                features: [
                    {
                        name: "Access to selected free courses.",
                        available: true
                    },
                    {
                        name: "Limited course materials and resources.",
                        available: true
                    },
                    {
                        name: "Basic community support.",
                        available: true
                    },
                    {
                        name: "No certification upon completion.",
                        available: true
                    },
                    {
                        name: "Ad-supported platform.",
                        available: true
                    },
                    {
                        name: "Access to exclusive Pro Plan community forums.",
                        available: true
                    },
                    {
                        name: "Early access to new courses and updates.",
                        available: true
                    },
                ]
            },
        ],
        benefits: [
            {
                id: 1,
                name: "Flexible Learning Schedule",
                description: "Fit your coursework around your existing commitments and obligations."
            },
            {
                id: 2,
                name: "Expert Instruction",
                description: "Learn from industry experts who have hands-on experience in design and development."
            },
            {
                id: 3,
                name: "Diverse Course Offerings",
                description: "Explore a wide range of design and development courses covering various topics."
            },
            {
                id: 4,
                name: "Updated Curriculum",
                description: "Access courses with up-to-date content reflecting the latest trends and industry practices."
            },
            {
                id: 5,
                name: "Practical Projects and Assignments",
                description: "Develop a portfolio showcasing your skills and abilities to potential employers."
            },
            {
                id: 6,
                name: "Interactive Learning Environment",
                description: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding."
            },
        ],
        testimonials: [
            {
                content: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
                author: "Sarah L",
                image: "https://img.freepik.com/free-photo/brunette-girl-posing_23-2148108748.jpg?t=st=1726931497~exp=1726935097~hmac=ec065c26d6cfe0870667b18cf5bcafcd474d2169782c5e178068d3a63cc42de6&w=740"
            },
            {
                content: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
                author: "Emily R",
                image: "https://img.freepik.com/free-photo/front-view-female-seaside_23-2148523914.jpg?t=st=1726931568~exp=1726935168~hmac=c4c403bef986d2156da90a0e043a7e1d644c2f1ecb71db6b042fc51af1f70542&w=740"
            },
            {
                content: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
                author: "Jason M",
                image: "https://img.freepik.com/free-photo/close-up-portrait-man-looking-camera-outdoors_23-2148283854.jpg?t=st=1726931584~exp=1726935184~hmac=8e240f3d0bbe2de988397883c92e51fd9e67b0edce556d39e68ce0226674e58f&w=740"
            },
            {
                content: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
                author: "Michael K",
                image: "https://img.freepik.com/free-photo/medium-shot-stylish-man-posing_23-2148895163.jpg?t=st=1726931593~exp=1726935193~hmac=e52d529e4b0b4e018773b15533408feb8992c0d247f315ee97c30fa7c85237cf&w=740"
            },
        ],
        faqs: {
            data: [
                {
                    id: 1,
                    quiz: "Can I enroll in multiple courses at once?",
                    answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
                },
                {
                    id: 2,
                    quiz: "What kind of support can I expect from instructors?",
                    answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
                },
                {
                    id: 3,
                    quiz: "Are the courses self-paced or do they have specific start and end dates?",
                    answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
                },
                {
                    id: 4,
                    quiz: "Are there any prerequisites for the courses?",
                    answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
                },
                {
                    id: 5,
                    quiz: "Can I download the course materials for offline access?",
                    answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
                },
            ],
            faqsOpen: []
        }
    },
    reducers: {
        openSingleFaqStore: (state, action) => {
            if (state.faqs.faqsOpen.includes(action.payload)) {
                state.faqs.faqsOpen = state.faqs.faqsOpen.filter(item => item !== action.payload)
            } else {
                state.faqs.faqsOpen.push(action.payload)
            }
            state.faqs.allOpen = false
        },
        openAllFaqsStore: (state) => {
            if (state.faqs.faqsOpen.length !== state.faqs.data.length) {
                state.faqs.faqsOpen = [];
                state.faqs.data.forEach(item => state.faqs.faqsOpen.push(item.id));
            } else {
                state.faqs.faqsOpen = [];
            }
        },
    }
});

export default staticDataSlice.reducer;

export const {
    // # Navbar
    handleNavbarMenuStore,
    // # Faqs
    openSingleFaqStore,
    openAllFaqsStore
} = staticDataSlice.actions;