/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ylxhr7i',
      'template_gsmzp9f',
      form.current,
      'beUF79nOI3zHq9hw4'
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h4>Get In Touch </h4>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>akhtersha007@gmail.com</h5>
            <a href="mailto:akhtersha007@gmail.com">Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 7417763954</h5>
            <a href="https://api/whatsapp.com/send?phone=+917417763954">
              Send a Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            name="name"
            type="text"
            placeholder="Your Full Name"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
