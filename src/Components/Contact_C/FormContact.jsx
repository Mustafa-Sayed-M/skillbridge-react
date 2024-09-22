import { ErrorMessage, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikInput from './FormikInput';

const inputsData = [
    {
        type: "text",
        label: "First Name",
        name: "firstName",
        id: "firstName",
        autoComplete: "on",
        placeholder: "Enter First Name",
    },
    {
        type: "text",
        label: "Last Name",
        name: "lastName",
        id: "lastName",
        autoComplete: "on",
        placeholder: "Enter Last Name",
    },
    {
        type: "email",
        label: "Email",
        name: "email",
        id: "email",
        autoComplete: "on",
        placeholder: "Enter Your Email",
    },
    {
        type: "tel",
        label: "Phone",
        name: "phone",
        id: "phone",
        autoComplete: "on",
        placeholder: "Enter Phone Number",
    },
    {
        type: "text",
        label: "Subject",
        name: "subject",
        id: "subject",
        autoComplete: "on",
        placeholder: "Enter Your Subject",
    },
];

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
};

const validationSchema = {
    firstName: Yup.string().required().min(2).max(16),
    lastName: Yup.string().min(2).max(16),
    email: Yup.string().email().required(),
    phone: Yup.number().required(),
    subject: Yup.string().required().min(6).max(32),
    message: Yup.string().required().min(20).max(100),
};

function FormContact() {
    return (
        <div className='form-contact lg:col-span-2 p-5 border-e border-e-gray-color'>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object(validationSchema)}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <form onSubmit={handleSubmit}>
                        {/* Inputs Container */}
                        <div className='inputs-container mb-7 grid grid-cols-1 md:grid-cols-2 gap-2'>
                            {inputsData.map((input, index) => <FormikInput
                                key={index}
                                {...{
                                    ...input,
                                    onChange: handleChange,
                                    onBlur: handleBlur
                                }}
                            />)}
                            {/* Message Area */}
                            <div className='message-area md:col-span-2'>
                                <label htmlFor='message'>Message</label>
                                <textarea
                                    id='message'
                                    name='message'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder='Your Message'
                                    style={{ resize: "none" }}
                                    className='mt-2 h-[200px] focus:outline-none rounded-md border border-gray-color bg-body-color p-2 w-full focus:border-primary-color transition-colors'
                                > </textarea>
                                <ErrorMessage name='message' component={"div"} className='text-red-500 mt-2' />
                            </div>
                        </div>
                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className='bg-primary-color text-white py-2 px-4 block mx-auto rounded-md'
                        >
                            Send Your Message
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default FormContact;