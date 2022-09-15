import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './nav.css'

function Nav() {

    const startPageUrlArray = window.location.href.split('/')
    console.log(startPageUrlArray)
    const pageOnLoad = startPageUrlArray[startPageUrlArray.length-1] 

    const [currentPage, setCurrentPage] = useState(pageOnLoad)

    return (
        <>
            <nav className="navbar navbar-expand-lg resp-nav">
                <div className="container-fluid ">
                    <button className="navbar-toggler nav-toggle-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggle">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center">
                            <li className="nav-item">
                                <Link to='/' className={`nav-link ${currentPage === 'home' ? 'active' : ''}`} aria-current="page" onClick={() => { setCurrentPage('home') }}> About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/projects' className={`nav-link ${currentPage === 'projects' ? 'active' : ''}`} aria-current="page" onClick={() => { setCurrentPage('projects') }}> Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/resume' className={`nav-link ${currentPage === 'resume' ? 'active' : ''}`} aria-current="page" onClick={() => { setCurrentPage('resume') }}> Resume</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`} aria-current="page" onClick={() => { setCurrentPage('contact') }}> Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>

    )
}

export default Nav;