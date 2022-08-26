import React from 'react';
import './footer.css'

function Footer(){
    return(
        <>
        <div className='spacer' style={{minHeight: '40px'}}></div>
        <footer className='fixed-bottom text-center '>
            <p className='m-2'>Made By <a href='https://www.linkedin.com/in/justus-b-8a1158108/'>Justus Brown</a> in 2022</p>
        </footer>
        </>
    )
}

export default Footer;