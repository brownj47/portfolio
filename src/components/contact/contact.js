import React, { useState } from "react";
import './contact.css'

function Contact() {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    // const [submit, setSubmit] = useState('')


    function handleChange(e) {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;

        // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
        return name === 'email' ? setEmail(value) : setName(value);
    }


    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        alert(`Thank you for your submission ${name}. As of now, this form is not attached to a backend. This means that your form input was not saved. I am working on the backend functions at this time. 
        - Justus`)

        // Alert the user their first and last name, clear the inputs
        setName('');
        setEmail('');
    };

    return (
        <main>
            <form className="contact-form" onSubmit={(e) => handleFormSubmit(e)}>
                <br/>
                <h2>Contact Form</h2>
                <label className="form-text" htmlFor='name'>Name: </label>
                <br />
                <input className="form-text" type='text' placeholder="Name" name="name" onChange={handleChange} value={name} />

                <br />
                <label className="form-text" htmlFor='email'>Email: </label>
                <br />
                <input className="form-text" type='email' placeholder="Email" onChange={handleChange} value={email} name="email" />

                <br />
                <button type="submit" className="btn sub-btn text-light" >Submit</button>
            </form>
        </main>
    )
}

export default Contact;