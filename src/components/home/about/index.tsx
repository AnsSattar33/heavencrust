import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className="bg-[url('/images/worldMap_freePick.jpg')] bg-center py-10" >
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-4'>
                <section className="w-1/2">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
                        <p className="text-xl  text-center mb-6">
                            HeavenCrust LLC is a leading 3PL provider dedicated to delivering exceptional logistics solutions tailored to your business needs.
                        </p>
                        <p className="text-xl text-center">
                            Our mission is to simplify your supply chain, ensuring timely and efficient delivery of your products while providing unparalleled customer service.
                        </p>
                    </div>
                </section>
                <div className='w-1/2 flex items-end justify-center'>
                    <Image src={'/images/aboutImage.png'} alt='aboutImage' width={495} height={504} />
                </div>
            </div>
        </div >
    )
}

export default About