// Header.js
'use client'
import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import { GetInTouch } from '../form/fullform/GetInTouch'

const Header = () => {
    return (

        <div className="">
            <Navbar />
            <div className=''>
                <Hero />
                <GetInTouch />
            </div>
        </div>
    )
}

export default Header
