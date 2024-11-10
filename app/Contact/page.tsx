import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneForwarded } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import ContactCss from './Contact.module.css'; // Import custom CSS

const Contact = () => {
  return (
    <div className={ContactCss.contactContainer}>
      <div className={ContactCss.contactCardsContainer}>
        <div className={ContactCss.contactCard}>
          <HiOutlineMail className={ContactCss.icon} />
          <p className={ContactCss.contactLabel}>Email</p>
          <p className={ContactCss.contactInfo}>tahaawan598@gmail.com</p>
        </div>

        <div className={ContactCss.contactCard}>
          <FiPhoneForwarded className={ContactCss.icon} />
          <p className={ContactCss.contactLabel}>Phone Number</p>
          <p className={ContactCss.contactInfo}>03082520161</p>
        </div>

        <div className={ContactCss.contactCard}>
          <CiLocationOn className={ContactCss.icon} />
          <p className={ContactCss.contactLabel}>Location</p>
          <p className={ContactCss.contactInfo}>Karachi</p>
        </div>
      </div>

      <div className={ContactCss.contactFormContainer}>
        <h2 className={ContactCss.contactTitle}>Contact me</h2>
        <form action="/contact">
          <input
            type="text"
            placeholder="Enter Your Name"
            className={ContactCss.inputField}
          />
          <br />
          <input
            type="email"
            placeholder="Enter Your valid Email address"
            className={ContactCss.inputField}
          />
          <br />
          <textarea
            name="Message"
            className={ContactCss.textareaField}
            placeholder="Enter Your Message"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contact;
