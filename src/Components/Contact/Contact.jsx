import React, {useState} from 'react';
import './Contact.scss'
const Contact = () => {
    const [message, setMessage] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake-hand.png" alt=""/>
            </div>
            <div className="right">
                <h2>
                    Contact
                </h2>
                <form onSubmit={handleSubmit} action="">
                    <input type="text" placeholder='Email'/>
                    <textarea placeholder='Message'></textarea>
                    <button type="submit">Send</button>
                    {message && <span style={{color:'green'}}>Thanks, for message</span>}
                </form>
            </div>
        </div>
    );
};

export default Contact;
