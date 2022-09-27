import React from 'react';
import './about.css'
import profpic from './SurfDay.jpeg'

function About() {
    return (
        <main className='text-center'>
            <h3>About Me</h3>
            <br/>
            <div className='row content'>
                <div className='col-1 col-md-2'></div>
                <div className='col-10 col-md-8'>
                    <img className='content-img' src={profpic} alt="Justus before a day of surfing" />
                </div>
                <div className='col-1 col-md-2'></div>
            </div>
            <br/>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-8'>
                    <div className='about-text text-start'>
                        <p>Welcome to my Portfolio! My name is Justus Brown. 

                         I am a Full Stack Web Developer with a background in Biology and Healthcare.</p>
                         
                         <p>I recently graduated from the University of Washington’s Full Stack Web Development Certificate Program. I am interested in roles in the intersection of technology and biology.</p>   
                            
                         <p>I am a creative, thorough problem-solver with a ready-to-learn attitude, and a passion for utility, beauty, and a positive user experience.</p>
                    </div>
                </div>
                <div className='col-md-2'></div>
            </div>
        </main>
    )
}

export default About;