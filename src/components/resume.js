import React from "react";

function Resume() {
    return (
        <main>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">

            <h2>Resume</h2>

            <h4>Skills:</h4>
            <ul>
                <li>Front End and Back End development.</li>
                <li>JavaScript (Node.js, Express,  Sequelize, React, MongoDB, Mongoose)</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SQL</li>
            </ul>

            <h4>Work Experience:</h4>

            <h5>Dermatology Arts, Bellevue - Medical Assitant: Feb 2021 - Sept 2021</h5>
            <ul>
                <li>Led and trained a team of Medical Assistants</li>
                <li>Assisted in surgical procedures</li>
                <li>Took patient vitals and medical histories</li>
                <li>Took inventory and ordered Medical supplies for the clinic</li>
                <li>Documented patient and physician interactions</li>
            </ul>
            <h5>Varlamos Pizzeria, Seattle - Server:  Sept 2018- Feb 2021</h5>
            <ul>
                <li>Focused under pressure</li>
                <li>Triaged tasks by order of importance and urgency</li>
                <li>Served customers and prepared food</li>
            </ul>

            <h4>Education:</h4>

            <h5>University of Washington, Seattle:</h5>
            <h6>Full Stack Web Development Certificate:</h6>
            <ul>
                <li>June 2022 - Sept 2022</li>
                <li>20 hrs classtime, 20 hrs homework/week</li>
                <li>People’s Choice and Best Functionality for a Front-End Application, July 2022</li>
                <li>People’s Choice and Best UI/UX, Aug 2022</li>
            </ul>
            <h6>BS in Biology</h6>
            <ul>
                <li>June 2022 - Sept 2022</li>
                <li>Phi Beta Kappa - GPA: 3.87</li>
                <li>University Chorale</li>
                <li>Chamber Singers</li>
            </ul>
                </div>
                <div className="col-1"></div>
            </div>
        </main>
    )
}

export default Resume;