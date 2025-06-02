import React from 'react'
import ShippingCard from './card/ShippingCard'
import ShippingInfo from './info/ShippingInfo'
import { Barcode, Handshake, LocateFixed, MonitorCog, Scaling, Truck, Users, Warehouse } from 'lucide-react'


const ShippingLayout = () => {
    const shippingCardData = [

        {
            id: 1,
            icon: <Barcode className=' text-white' size={40} />,
            // alt: 'customizedSolution',
            // width: 40,
            // height: 200,
            heading: 'Live Inventory Tracking',
            description: 'Stay updated with accurate, real-time stock levels.'
        },
        {
            id: 2,
            icon: <LocateFixed className='text-white' size={40} />,
            // img: '/shipping/CustomizedSolution.png',
            // alt: 'customizedSolution',
            // width: 40,
            // height: 100,
            heading: 'Skilled Warehouse Personnel',
            description: 'Our expert team ensures efficient handling and storage.'
        },
        {
            id: 3,
            icon: <Warehouse className='text-white' size={40} />,
            // img: '/shipping/CustomizedSolution.png',
            // alt: 'customizedSolution',
            // width: 40,
            // height: 100,
            heading: 'Intuitive Warehouse Management System',
            description: 'Simplified operations through an easy-to-use WMS.'
        },
        {
            id: 4,
            icon: <Truck className='text-white' size={40} />,
            // img: '/shipping/CustomizedSolution.png',
            // alt: 'customizedSolution',
            // width: 40,
            // height: 200,
            heading: 'Comprehensive Truckload & LTL Options',
            description: 'Flexible freight solutions for every shipment size.'
        },
        {
            id: 5,
            icon: <MonitorCog className='text-white' size={40} />,
            // img: '/shipping/FlatFeeManagement.png',
            // alt: 'FlatFeeManagement',
            // width: 40,
            // height: 200,
            heading: 'Round-the-Clock Product Monitoring',
            description: 'TAccess product status any time, day or night.'
        },
        {
            id: 6,
            icon: <Users className='text-white' size={40} />,
            // img: '/shipping/RealSupport.png',
            // alt: 'RealSupport',
            // width: 40,
            // height: 200,
            heading: 'Exceptional Customer Support',
            description: 'We go above and beyond to meet your needs.'
        },
        {
            id: 7,
            icon: <Scaling className='text-white' size={40} />,
            // img: '/shipping/Seamless Integration.png',
            // alt: 'Seamless Integration',
            // width: 40,
            // height: 200,
            heading: 'Flexible and Scalable Offerings',
            description: 'Solutions that grow with your business.'
        },
        {
            id: 8,
            icon: <Handshake className='text-white' size={40} />,
            // img: '/shipping/worldWideShipping.png',
            // alt: 'worlwideShipping',
            // width: 40,
            // height: 200,
            heading: 'Expert Customs Handling',
            description: 'Smooth and timely clearance for international shipments.'
        }
    ]

    return (
        <div className='flex py-10 md:py-20 container mx-auto px-4 md:flex-col gap-4'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                <div className='w-full md:w-1/2'>
                    <ShippingInfo />
                </div>
                <div className='w-full md:w-1/2'>
                    {
                        shippingCardData.map((card) => (
                            <div key={card.id} className="p-2">
                                <ShippingCard imgIcon={card.icon} imgHeading={card.heading} imgDescription={card.description} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ShippingLayout
