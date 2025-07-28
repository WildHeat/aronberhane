import React from "react";

const ContactForm: React.FC = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Just in case you want to get in touch ;)</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;
