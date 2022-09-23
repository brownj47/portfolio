import React from "react";
import './resume.css'

function Resume() {
    return (
        <main>
            <div className="res-text">
                <div className="col-1"></div>
                
                <div className="col-10">

                    <div className="indent">

                        <a className="btn text-dark bg-light downloadBtn" download href="/files/WebDevResumeJustusBrown.pdf">Download Resume</a>
                        <h4>Skills:</h4>

                        <div className="indent">
                            <ul>
                                <li>Full Stack Web Development</li>
                                <li>JavaScript (React.js, Node.js, Express.js,  Sequelize.js,  MongoDB, Mongoose.js)</li>
                                <li>HTML</li>
                                <li>CSS (Bootstrap, Materialize)</li>
                                <li>SQL/NoSQL</li>
                            </ul>
                        </div>

                        <h4>Work Experience:</h4>

                        <div className="indent">
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
                        </div>

                        <h4>Education:</h4>

                        <div className="indent">
                            <h5>University of Washington, Seattle:</h5>
                            <div className="indent">
                                <h6>- Full Stack Web Development Certificate:</h6>
                                <ul>
                                    <li>June 2022 - Sept 2022</li>
                                    <li>20 hrs classtime, 20 hrs homework/week, 12 weeks</li>
                                    <li>People’s Choice and Best Functionality for a Front-End Application, July 2022</li>
                                    <li>People’s Choice and Best UI/UX, Aug 2022</li>
                                </ul>
                                <h6>- BS in Biology</h6>
                                <ul>
                                    <li>June 2022 - Sept 2022</li>
                                    <li>Phi Beta Kappa - GPA: 3.87</li>
                                    <li>University Chorale</li>
                                    <li>Chamber Singers</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
                <div className="col-1"></div>

            </div>
        </main>
    )
}

export default Resume;