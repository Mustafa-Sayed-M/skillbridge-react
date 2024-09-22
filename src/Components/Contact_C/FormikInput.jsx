import { ErrorMessage } from 'formik';
import React from 'react'

function FormikInput({ label, ...inputData }) {
    return (
        <div className='formik-input'>
            <label htmlFor={inputData.id} className='font-medium'>{label}</label>
            <input
                {...inputData}
                className='mt-2 focus:outline-none rounded-md border border-gray-color bg-body-color p-2 w-full focus:border-primary-color transition-colors'
            />
            <ErrorMessage component={"div"} name={inputData.name} className='text-red-500 mt-2 capitalize transition' />
        </div>
    )
}

export default FormikInput;