import { Send } from 'lucide-react';
import React from 'react';

export default function ContactForm() {
  return (
    <form className="contact-form glass-panel">
      <label>
        Name
        <input type="text" name="name" placeholder="Your name" />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="you@example.com" />
      </label>
      <label>
        Message
        <textarea name="message" rows="6" placeholder="Write your message" />
      </label>
      <button className="button primary" type="button">
        Send Message <Send size={17} />
      </button>
    </form>
  );
}
