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
                        <p>Welcome to my Portfolio! My name is Justus Brown. I am a recent graduate of the University of Washington's Biology program. Although I originally intended to pursue a career in medicine, I decided to pivot from that career path, and took part in UW's Full Stack Web Development Bootcamp. </p>
                        <p>I am most interested in working with the intersection of biology/medicine and software. </p>
                    </div>
                </div>
                <div className='col-md-2'></div>
            </div>
        </main>
    )
}

export default About;