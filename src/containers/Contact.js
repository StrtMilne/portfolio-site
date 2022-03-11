import React from "react";
import { useState } from 'react';
import { send } from 'emailjs-com';
import "../static/Form.css";

const Contact = function () {

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });

    const [sent, setSent] = useState(false);
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_mozaq7f',
            'template_b3pbj8r',
            toSend,
            'cESo17c8ALgaeja9m'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });

        setSent(true);
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    return(
        <div className="outer-page">
            <h1 className="header-contact">Contact</h1>
            <h4 className="text">If you'd like to get in touch please use the form below.</h4>
            <h4 className="text">It directs to my email, so if you'd prefer to get in touch directly, please do at strtmilne@gmail.com.</h4>
            <div className="outer-form">
                <form onSubmit={onSubmit} className="contact-form">
                    <input
                        type='text'
                        name='from_name'
                        placeholder='Your name'
                        value={toSend.from_name}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name='message'
                        placeholder='Your message'
                        className="message"
                        value={toSend.message}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type='text'
                        name='reply_to'
                        placeholder='Your email'
                        value={toSend.reply_to}
                        onChange={handleChange}
                        required
                    />
                    <button type='submit' className="submit">Submit</button>
                </form>  
            </div>
            {sent? <h3 className="thanks">Thank you for your email! I'll respond as soon as I can!</h3>: null}
        </div>
    )
}

export default Contact;