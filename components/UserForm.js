//enables client-side rendering
 
'use client';
//imports useState hook to manage form data and UI state
import { useState } from 'react';
//UserForm component handles user input and displays a message
export default function UserForm() {
    // state to store user's name input
    const [user, setName] = useState("");
    //state to control whether the greeting is shown
    const [show, setShow] = useState(false);
    //function runs when the form is submitted 
    const handleSubmit = (e) => {
        e.preventDefault(); //prevents page reload
        setShow(true); //shows greeting message
    };

    return (
        //container for the form
        <div className="user-card">
            {/* Form element with submit handler */}
        <form onSubmit={handleSubmit}>
            {/* Input field for the user name*/}
            <input
                type="text"
                placeholder="Name"
                value={user}
                onChange={(e) => setName(e.target.value)}
            />
            {/* Submit button*/}
            <button type="submit">Submit</button>
        </form>
        {/* Conditional rendering: shows greeting only after form is submitted*/}
        {show && <h3>Hello, {user}!</h3>}
        </div>
    );
}