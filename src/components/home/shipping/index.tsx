import React from 'react'
import ShippingCard from './card/ShippingCard'
import ShippingInfo from './info/ShippingInfo'
import Image from 'next/image'

const ShippingLayout = () => {

    const shippingCardData = [

        {
            id: 1,
            img: '/shipping/CustomizedSolution.png',
            alt: 'customizedSolution',
            width: 80,
            height: 200,
            heading: 'Customized Solution',
            description: 'Tailored shipping solutions to meet your unique business needs.'
        },
        {
            id: 2,
            img: '/shipping/FlatFeeManagement.png',
            alt: 'FlatFeeManagement',
            width: 80,
            height: 200,
            heading: 'Flat Fee Management',
            description: 'Transparent pricing with no hidden fees, ensuring predictable costs.'
        },
        {
            id: 3,
            img: '/shipping/RealSupport.png',
            alt: 'RealSupport',
            width: 80,
            height: 200,
            heading: 'Real Support',
            description: 'Dedicated support team available to assist you with any shipping issues.'
        },
        {
            id: 4,
            img: '/shipping/Seamless Integration.png',
            alt: 'Seamless Integration',
            width: 80,
            height: 200,
            heading: 'Seamless Integration',
            description: 'Easy integration with your existing e-commerce platforms for smooth operations.'
        },
        {
            id: 5,
            img: '/shipping/worldWideShipping.png',
            alt: 'worlwideShipping',
            width: 80,
            height: 200,
            heading: 'Worldwide Shipping',
            description: 'Global shipping solutions to expand your business reach across borders.'
        }
    ]

    return (
        <div className='flex py-20 container mx-auto px-4 flex-col gap-4'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                <div className='w-1/2'>
                    <ShippingInfo />
                </div>
                <div className='w-1/2'>
                    {
                        shippingCardData.map((card) => (
                            <div key={card.id} className="p-4">
                                <ShippingCard imgSrc={card.img} imgAlt={card.alt} imgWidth={card.width} imgHeight={card.height} imgHeading={card.heading} imgDescription={card.description} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ShippingLayout
