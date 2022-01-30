import React from 'react'
import Navbar from '../../components/navbar/homepage-navbar/navbar.component'
import HomeScreen from '../../components/homescreen/homescreen.component'

const Homepage = () => {
    return (
        <div className='homepage'>
            <Navbar />
            <HomeScreen />
        </div>
    )
}

export default Homepage
