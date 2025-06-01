// Header.js
'use client'
import React from 'react'
import Hero from './Hero'
import { GetInTouch } from '../form/fullform/GetInTouch'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div>
            <Navbar />
            <Hero />
        </div>
    )
}

export default Header
