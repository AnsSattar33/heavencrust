import Image from 'next/image'
import React from 'react'


const ShippingInfo = () => {
    return (
        <div className='flex flex-col items-start justify-center bg-gray-100 p-8 space-y-6'>
            <div className='self-start'>
                <h1 className='text-6xl uppercase font-bold text-orange-500 leading-tight'>
                    <span className="block">The Shipping </span>
                    <span className='block'></span>
                    <span className="block">Solution For You</span>
                </h1>
            </div>
            <div className='selft-center text-xl w-4/6'>
                <p>As e-commerce founders ourselves, we’ve felt the frustration of dealing with surprise fees, and late shipments. That’s why we built Flat Fee Shipping: A 3PL experience that actually works for growing brands.</p>
            </div>
            <div className='flex flex-col items-start justify-center space-y-4 w-full'>
                <div className='self-start'>
                    <h3 className='text-3xl font-bold uppercase opacity-40'>Shipping Made Easy</h3>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                    <div className='flex items-center justify-between w-full'>
                        <Image src={'/shipping/UPS.png'} alt={'DHL'} width={50} height={100} loading='lazy' />
                        <Image src={'/shipping/unitedStatesPostalSErvice.png'} alt={'unitedStatesPostalSErvice'} width={250} height={100} loading='lazy' />
                    </div>
                    <div className='flex items-center justify-between gap-8 w-full'>
                        <Image src={'/shipping/FedEx.png'} alt={'FedEx'} width={120} height={200} loading='lazy' />
                        <Image src={'/shipping/DHL.png'} alt={'DHL'} width={200} height={200} loading='lazy' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ShippingInfo