import React from 'react';

function Nav(){
    return(
        <nav className='bg-danger row justify-content-around text-center'>
            <div className='col-sm-12 col-md-3 bg-warning'>
                <p>About</p>
            </div>
            <div className='col-sm-12 col-md-3 bg-warning'>
                <p>Portfolio</p>
            </div>
            <div className='col-sm-12 col-md-3 bg-warning'>
                <p>Resume</p>
            </div>
            <div className='col-sm-12 col-md-3 bg-warning'>
                <p>Contact</p>
            </div>
        </nav>
        
    )
}

export default Nav;