import React from 'react'
import imgHomeHeader from '../src/images/homeHeader.png'
import imgAbourHeader from '../src/images/aboutHeader.png'
import Comman from './Comman'
import Service from './Service'

function Home() {
    return (
        <>
            <Comman 
                brandTitle = 'Grow Your Bussiness with'  
                brandName = 'Sam Jagtap'
                brandDesc = 'We are the team of developer making websites'
                btnTitle = 'Get Started'
                imgHomeHeader = {imgHomeHeader}
                visit = '/service'
            />
            <Service />
            <Comman 
                brandTitle = 'Welcome to About Page'
                brandName = 'Sam Jagtap'
                brandDesc = 'We are the team of developer making websites'
                btnTitle = 'Contact Now'
                imgHomeHeader = {imgAbourHeader}
                visit = '/contact'
            />
        </>
    )
}

export default Home
