import React, { useRef } from 'react';
import './form.css';
import emailjs from '@emailjs/browser';

const Form = () => {
  const contactForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4am808m', 'template_fo948bf', contactForm.current, 'JLlZHdARt2Uvm4PdA')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={contactForm} onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Envoyer" className='button' />
    </form>
  );
};

export default Form;