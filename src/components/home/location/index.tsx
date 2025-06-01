import React from 'react'
import Location from './Location'

const WharehouseLocation = () => {
    return (
        <div className='py-10 container mx-auto'>
            <div className='pb-10'>
                <h1 className='text-4xl text-orange-500 font-bold'>Our Location</h1>
            </div>
            <div className='border-orange-500 border-2'>
                <Location />
            </div>
        </div>
    )
}

export default WharehouseLocation
