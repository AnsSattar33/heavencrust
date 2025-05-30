import Image from 'next/image'
import React from 'react'

type Props = {
    imgSrc: string;
    imgAlt: string;
    imgWidth: number;
    imgHeight: number;
    imgHeading: string;
    imgDescription: string;
}

const ShippingCard: React.FC<Props> = ({ imgSrc, imgAlt, imgWidth, imgHeight, imgDescription, imgHeading }) => {
    // Default values for props
    if (!imgSrc) imgSrc = '/shipping/CustomizedSolution.png';
    if (!imgAlt) imgAlt = 'Shipping Image';
    if (!imgWidth) imgWidth = 300;
    if (!imgHeight) imgHeight = 200;

    return (
        <div className="flex justify-between items-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className='bg-orange-500 p-4'>
                <Image src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} loading='lazy' />
            </div>
            <div className='p-4 bg-white w-full flex flex-col items-center justify-end space-y-2'>
                <div>
                    <h1 className="text-3xl font-semibold">{imgHeading}</h1>
                </div>
                <div>
                    <p>{imgDescription}</p>
                </div>
            </div>

        </div>
    );
};

export default ShippingCard