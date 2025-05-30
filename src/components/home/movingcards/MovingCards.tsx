import { InfiniteMovingCards } from '@/components/ui/InfiniteMovingCards'
import React from 'react'

const MovingCards = () => {

    type Item = {
        quote: string;
        title: string;
    };

    type ITEMS = Item[];

    const items: ITEMS = [

        {
            quote: 'With over two decades of shipping to major retailers like Sephora and Ulta, we help brands build frictionless B2B retail relationships handling everything from inventory management to EDI compliance.',
            title: "B2B Retail",
        },
        {
            quote: 'Our fast and flexible warehousing, product storage solutions, high accuracy pick-and-pack services, rapid delivery and real-time tracking give ecommerce brands a competitive leg up.',
            title: "Ecommerce Fulfillment",
        },
        {
            quote: 'Go beyond storage and distribution with our custom packaging and product services and specialized kitting to transform standard operations into a strategic advantage.',
            title: "Value Added Services",
        },
        {
            quote: 'Committed to keeping retail partners happy and your costs down, our quality control services leave nothing to chance. From presentation and packaging standards compliance to first article inspection, damage and quality inspections and certified destruction, we make sure you’re in a good place with the partners that matter.',
            title: "Quality Control",
        },
        {
            quote: 'Strategic locations, a robust network of shipping and transportation providers, pinpoint accuracy and decades of experience get your goods where they need to go – on time and often at discount – so you can pass savings on to your customers.',
            title: "Subscription Boxes",
        },
        {
            quote: 'Good 3PLs move boxes from point A to point B. Great ones build collaborative partnerships with their brands, solving challenges, uncovering insights, implementing feedback and making strategic recommendations.',
            title: "Fulfillment Delivered",
        },
        {
            quote: 'Strategic locations, a robust network of shipping and transportation providers, pinpoint accuracy and decades of experience get your goods where they need to go – on time and often at discount – so you can pass savings on to your customers.',
            title: "Shipping Cost Savings",
        },

    ];

    return (
        <div className='mx-auto container my-20 bg-gray-100'>
            <div>
                <h1 className='text-5xl font-bold text-orange-500 my-10'>What We DO</h1>
            </div>
            <div>
                <InfiniteMovingCards items={items} className='' />
            </div>
        </div>
    )
}

export default MovingCards