import React from 'react'
import imgAbourHeader from '../src/images/aboutHeader.png'
import Comman from './Comman'

function About() {
    return (
        <>
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

export default About
