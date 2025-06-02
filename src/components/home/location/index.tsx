import React from 'react'
import Location from './Location'

const WharehouseLocation = () => {
    return (
        <div className='md:py-10 py-5 px-3 md:container md:mx-auto'>
            <div className='pb-10'>
                <h1 className='md:text-4xl text-3xl text-orange-500 font-bold'>Our Location</h1>
            </div>
            <div className='border-orange-500 border-2'>
                <Location />
            </div>
        </div>
    )
}

export default WharehouseLocation
