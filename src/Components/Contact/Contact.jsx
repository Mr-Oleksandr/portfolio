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
                <h2>
                    Contact information
                </h2>
                <p>
                    if you are interested in the portfolio, write me an e-mail
                </p>
                <ul>
                    <li>
                        Address: Chernivtsi
                    </li>
                    <li>
                        Phone: +380964926330
                    </li>
                    <li>
                        Email: skovalov777@gmail.com
                    </li>
                </ul>
            </div>
            <div className="right">
                <form onSubmit={handleSubmit} action="">
                    <input type="email" id="email" placeholder='Email'/>
                    <textarea placeholder='Message'></textarea>
                    <button type="submit">Send</button>
                    {message && <span style={{color:'green'}}>Thanks, for message</span>}
                </form>
            </div>
        </div>
    );
};

export default Contact;
