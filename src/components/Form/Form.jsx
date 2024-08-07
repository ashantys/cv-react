import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Form () {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
    return(
    <div className="p-5 row bg-white rounded-4">
      <h1 className="p-2">Contact Me</h1>
        <form ref={form} onSubmit={sendEmail}>
        <div class="mb-3">
          <label>Name</label>
          <input class="form-control" type="text" name="user_name" />
        </div>
        <div class="mb-3">
          <label>Email</label>
          <input class="form-control" type="email" name="user_email" />
        </div>
        <div class="mb-3">
        <label>Message</label>
          <textarea class="form-control" name="message" />
        </div>
        <button type="submit" class="btn btn-dark">Submit</button>
        </form>
    </div>
    );

}