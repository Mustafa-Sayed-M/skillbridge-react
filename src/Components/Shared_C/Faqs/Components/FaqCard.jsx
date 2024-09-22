import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openSingleFaqStore } from '../../../../Store/Slices/staticDataSlice';

function FaqCard({ faqData }) {

    const {
        id,
        quiz,
        answer
    } = faqData;

    const { faqs: { allOpen, faqsOpen } } = useSelector(state => state.staticData);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(openSingleFaqStore(id));
    };

    return (
        <div className={`faq-card px-3 py-7 cursor-pointer rounded-md border border-gray-color transition-colors ${faqsOpen.includes(id) && "border-primary-color bg-primary-color/10"}`} onClick={handleClick}>
            {/* Quiz */}
            <div className='quiz flex items-center justify-between gap-3'>
                {/* Quiz Text */}
                <p> {quiz}</p>
                {/* Quiz Toggler */}
                <button
                    type='button'
                    aria-label='Quiz Toggler'
                    className={`bg-primary-color/40 border border-primary-color/80 rounded-md py-2 px-4 text-gray-500`}
                >
                    <i className={`fa-solid fa-plus transition ${(allOpen || faqsOpen.includes(id)) && "rotate-45"}`}></i>
                </button>
            </div>
            {/* Answer */}
            <div className={`border-t border-t-gray-color py-4 mt-4 ${!(allOpen || faqsOpen.includes(id)) && "hidden"}`}>
                <p className='text-gray-500'>{answer}</p>
            </div>
        </div>
    )
}

export default FaqCard;