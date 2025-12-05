
import { useState } from 'react'
import './About.css'

import { IconUserCircle } from '@tabler/icons-react';

function About() {
    const [isEmailVisible, setIsEmailVisible] = useState(true);

    function showEmailInformation() {
        console.log("Show email information")
        setIsEmailVisible(!isEmailVisible)
    }


    return(
        <div className='text-center'>
            <h1><IconUserCircle size={40} stroke={2} /> About Page</h1>
            <p>At J's Online Store, our mission is to offer quality music products and a simple, reliable shopping experience. We carefully select musical items that add value to everyday life and strive to make online shopping easy, enjoyable, and trustworthy for every customer.</p>
            
            { 
                isEmailVisible == true 
                ? <p>JsMusicStore@Music.com</p> 
                : <p>Click the button to see my email address</p>
            }

            <button className='btn btn-dark' onClick={showEmailInformation}>
                {
                    isEmailVisible == true 
                    ? "Hide my email" 
                    : "Show my email"
                }
            </button>
        </div>
    )
    
}

export default About