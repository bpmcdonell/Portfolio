import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMutation } from '@apollo/client';
import { SUBMIT_FORM } from '../utils/mutations';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// function ContactForm() {
//     // Hook to manage form data
//     const [formState, setFormState] = useState({ name: '', email: '', message: '' });
//     // Hook to manage error messages
//     const [errorMessage, setErrorMessage] = useState('');
//     // Destructure formState object into its named properties
//     const { name, email, message } = formState;

//     // Hook to manage form submission
//     const [postFormRes] = useMutation(SUBMIT_FORM);


//     // Function to update formState when user types into form fields
//     function handleChange(e) {
//         // Validate email
//         if (e.target.name === 'email') {
//             const isValid = validateEmail(e.target.value);
//             // isValid conditional statement
//             if (!isValid) {
//                 setErrorMessage('Your email is invalid.');
//             } else {
//                 setErrorMessage('');
//             }
//         } else {
//             // Conditional statement to check if message is blank
//             if (!e.target.value.length) {
//                 setErrorMessage(`${e.target.name} is required.`);
//             } else {
//                 setErrorMessage('');
//             }
//         }
//         // Conditional statement to check if error message is blank
//         if (!errorMessage) {
//             // Update formState with new form input value
//             setFormState({ ...formState, [e.target.name]: e.target.value });
//         }
//     }

//     // Function to handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const { data } = await postFormRes({
//                 variables: { ...formState },
//             });
//             console.log(data);
//         }
//         catch (e) {
//             console.error(e);
//         }

//         // Conditional statement to check if error message is blank
//         if (!errorMessage) {
//             console.log('Submit Form', formState);
//         }
//     }


//     return (
//         <section className="contact">
//             <div className="contactDiv">
//                 <h3>Contact Me:</h3>
//                 <form id="contact-form" onSubmit={handleSubmit}>
//                     <div>
//                         <label htmlFor="name">Name:</label>
//                         <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
//                     </div>
//                     <div>
//                         <label htmlFor="email">Email address:</label>
//                         <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
//                     </div>
//                     <div>
//                         <label htmlFor="message">Message:</label>
//                         <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
//                     </div>
//                     {errorMessage && (
//                         <div>
//                             <p className="errorText">{errorMessage}</p>
//                         </div>
//                     )}
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         </section>
//     );
// }

function ContactForm() {
    // Hook to manage form data
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // Hook to manage error messages
    const [errorMessage, setErrorMessage] = useState('');
    // Destructure formState object into its named properties
    const { name, email, message } = formState;

    // Hook to manage form submission
    const [postFormRes, { error, data }] = useMutation(SUBMIT_FORM);


    // Function to update formState when user types into form fields
    function handleChange(e) {
        // Validate email
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            // Conditional statement to check if message is blank
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        // Conditional statement to check if error message is blank
        if (!errorMessage) {
            // Update formState with new form input value
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await postFormRes({
                variables: { ...formState },
            });
            console.log(data);
        }
        catch (e) {
            console.error(e);
        }

        // Conditional statement to check if error message is blank
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }

    }


    return (
        <section className="contact">
            <div className="contactDiv">
                <h3>Contact Me:</h3>
                {data ? (
                    <p>
                        Success! You may now head{" "}
                        <Link to="/">back to the homepage.</Link>
                    </p>
                ) : (
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="email">Email address:</label>
                            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                        </div>

                        {errorMessage && (
                            <div>
                                <p className="errorText">{errorMessage}</p>
                            </div>
                        )}
                        <button type="submit">Submit</button>
                    </form>
                )}
            </div>
        </section>
    );
}

export default ContactForm;