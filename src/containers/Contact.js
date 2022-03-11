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
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    return(
        <div className="outer-form">
            <form>
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
    )
}

export default Contact;