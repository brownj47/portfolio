import React, {  useState } from "react";
import About from "../components/about/about";
import Project from "../components/project/project";
import Contact from "../components/contact";
import Resume from "../components/resume";
import './home.css'


function Home() {

    const [page, setPage] = useState('About')

    function whatToRender(target) {
        if (target === 'Portfolio') {
            return <Project />
        } else if (target === 'Resume') {
            return <Resume />
        } else if (target === 'Contact') {
            return <Contact />
        }
        return <About />
    }

    return (
        <>
            <nav className='row justify-content-around text-center'>
                <div className='col-sm-12 col-md-3'>
                    <button className={`btn ${page === 'About' ? 'active bg-dark' : ''}`} onClick={() => setPage('')}>About</button>
                </div>
                <div className='col-sm-12 col-md-3'>
                    <button className="btn" onClick={() => setPage('Portfolio')}>Portfolio</button>
                </div>
                <div className='col-sm-12 col-md-3'>
                    <button className="btn" onClick={() => setPage('Resume')}>Resume</button>
                </div>
                <div className='col-sm-12 col-md-3'>
                    <button className="btn" onClick={() => setPage('Contact')}>Contact</button>
                </div>
            </nav>
            <br />

            {whatToRender(page)}

        </>

    )




}
export default Home;