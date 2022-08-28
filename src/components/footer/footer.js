import React from 'react';
import './footer.css'

function Footer(){
    return(
        <>
        <div className='spacer' style={{minHeight: '40px'}}></div>
        <footer className='fixed-bottom text-center'>

            <p className='m-2'>Made by Justus Brown in 2022</p>

            <button className='btn bg-dark'>
            <a href='https://www.linkedin.com/in/justus-b-8a1158108/' target='_blank'rel='noopener noreferrer'>LinkedIn</a>
            </button>

            <button className='btn bg-dark'>
            <a href='https://github.com/brownj47' target='_blank'rel='noopener noreferrer'>Github</a>
            </button>



        </footer>
        </>
    )
}

export default Footer;