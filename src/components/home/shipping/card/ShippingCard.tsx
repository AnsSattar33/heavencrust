import Image from 'next/image'
import React from 'react'

type Props = {
    // imgSrc: string;
    // imgAlt: string;
    // imgWidth: number;
    // imgHeight: number;
    imgIcon: React.ReactElement
    imgHeading: string;
    imgDescription: string;
}

const ShippingCard: React.FC<Props> = ({ imgDescription, imgHeading, imgIcon }) => {
    // Default values for props
    // if (!imgSrc) imgSrc = '/shipping/CustomizedSolution.png';
    // if (!imgAlt) imgAlt = 'Shipping Image';
    // if (!imgWidth) imgWidth = 300;
    // if (!imgHeight) imgHeight = 200;

    return (
        <div className="flex justify-between items-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className='bg-orange-500 p-4'>
                {/* <Image src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} loading='lazy' /> */}
                <div className='flex items-center justify-center'>
                    {imgIcon}
                </div>
            </div>
            <div className='p-2 bg-white w-full flex flex-col items-start px-10 '>
                <div>
                    <h1 className="text-xl font-semibold">{imgHeading}</h1>
                </div>
                <div>
                    <p>{imgDescription}</p>
                </div>
            </div>

        </div>
    );
};

export default ShippingCard