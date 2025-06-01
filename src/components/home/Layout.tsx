import React from 'react'
import Header from './header'
import Shipping from './shipping/Layout'
import About from './about'
import { InfiniteMovingCards } from '../ui/InfiniteMovingCards'
import MovingCards from './movingcards/MovingCards'
import Footer from './footer/Footer'
import { Button } from '../ui/button'
import { GetInTouch } from './form/fullform/GetInTouch'
import ContactUs from './form/fullform'
import WharehouseLocation from './location'

const HomePage = () => {

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Shipping />
            </div>
            <div className='flex flex-col space-y-20'>
                <About />
                <div className='bg-orange-500 py-10'>
                    <div className='container mx-auto flex items-center justify-between'>
                        <h1 className='text-white text-4xl font-bold capitalize'>
                            Transparent, Reliable, and Built and Growth
                        </h1>
                        <div className=''>
                            <Button className='bg-white text-orange-500 text-3xl uppercase hover:bg-gray-100 p-8'>Contact Us</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <MovingCards />
            </div>
            <div>
                <ContactUs />
            </div>
            <div>
                <WharehouseLocation />
            </div>
            <div >
                <Footer />
            </div>
        </div >
    )
}

export default HomePage