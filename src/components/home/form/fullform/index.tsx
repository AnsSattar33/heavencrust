import React from 'react'
import { GetInTouch } from './GetInTouch'

const ContactUs = () => {
    return (
        <div className='md:container md:mx-auto px-3 space-y-8'>
            <h1 className='md:text-5xl text-3xl font-bold text-orange-500'>Contact Us</h1>
            <GetInTouch />
        </div>
    )
}

export default ContactUs