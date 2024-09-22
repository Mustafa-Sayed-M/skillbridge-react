import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FaqCard from './Components/FaqCard';
import { openAllFaqsStore } from '../../../Store/Slices/staticDataSlice';

function Faqs() {

    const { faqs: { data } } = useSelector(state => state.staticData);

    const dispatch = useDispatch();
    const handleOpenAllFaqs = () => {
        dispatch(openAllFaqsStore())
    };

    return (
        <section className='faq p-5 bg-white rounded-md shadow-sm grid grid-cols-1 md:grid-cols-2 gap-5' id='faq'>
            {/* Text Area */}
            <div className='text-area'>
                <h1 className='mb-2 font-medium text-xl'>Frequently Asked Questions</h1>
                <p className='text-gray-500'>Still you have any questions? Contact our Team via support@skillbridge.com</p>
                <button
                    type='button'
                    title='Open All Faqs'
                    aria-label='Open All Faqs'
                    className='py-2 px-5 border rounded-md mt-7'
                    onClick={handleOpenAllFaqs}
                >
                    See All Faqs
                </button>
            </div>
            {/* Faq Cards Wrapper */}
            <div className='faq-cards-wrapper space-y-3'>
                {data.map((faqItem, index) => <FaqCard
                    key={index}
                    faqData={faqItem}
                />)}
            </div>
        </section>
    )
}

export default Faqs;