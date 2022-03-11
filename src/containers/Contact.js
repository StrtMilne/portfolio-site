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
        <>
            <p>If you'd like to get in touch please use the form below</p>
            <p>It directs to my email, so if you'd prefer to get in touch directly, please do at strtmilne@gmail.com</p>
            <div className="outer-form">
                <form onSubmit={onSubmit}>
                    <input
                        type='text'
                        name='from_name'
                        placeholder='Your name'
                        value={toSend.from_name}
                        onChange={handleChange}
                    />
                    {/* <input
                        type='text'
                        name='to_name'
                        placeholder='to name'
                        value={toSend.to_name}
                        onChange={handleChange}
                    /> */}
                    <textarea
                        name='message'
                        placeholder='Your message'
                        className="message"
                        value={toSend.message}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name='reply_to'
                        placeholder='Your email'
                        value={toSend.reply_to}
                        onChange={handleChange}
                    />
                    <button type='submit' className="submit">Submit</button>
                </form>  
            </div>
            {sent? <h3>Thank you for your email! I'll respond as soon as I can!</h3>: null}
        </>
    )
}

export default Contact;