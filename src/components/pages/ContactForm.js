import React, { useState } from 'react';
import styles from './ContactForm.module.css';
const ContactForm = () => {
  const title = 'TOLUWASE OLUWAMAKINDE';
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isEmail, setIsEmail] = useState('');
  const [isTextArea, setIsTextArea] = useState('');
  const [error, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !firstName.length ||
      !lastName.length ||
      !isEmail.length ||
      !isTextArea.length
    ) {
      setIsError(true);
    }
    if (firstName && lastName && isEmail && isTextArea) {
      alert('Submitted');
      setFirstName('');
      setLastName('');
      setIsEmail('');
      setIsTextArea('');
      setIsError(false);
    }
  };
  return (
    <form className={styles['form']} onSubmit={handleSubmit}>
      <div className={styles['first__row']}>
        <div className={styles['inner__first__row']}>
          <label htmlFor="first">First Name</label>
          <div className={styles['input__box']}>
            <input
              className={styles['input__text']}
              id="first_name"
              type="text"
              name="first"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          {error && firstName.length <= 0 ? (
            <small className={styles.small}>Please enter your first name</small>
          ) : (
            ''
          )}
        </div>
        <div className={styles['inner__first__row']}>
          <label htmlFor="last">Last Name</label>
          <div className={styles['input__box']}>
            <input
              className={styles['input__text']}
              id="last_name"
              name="last"
              type="text"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          {error && lastName.length <= 0 ? (
            <small className={styles.small}>Please enter your last name</small>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className={styles['email__section']}>
        <label htmlFor="email">Email</label>
        <div className={styles['input__box']}>
          <input
            className={styles['input__text']}
            type="email"
            name="email"
            id="email"
            placeholder="yourname@gmail.com"
            value={isEmail}
            onChange={(e) => setIsEmail(e.target.value)}
          />
        </div>
        {error && isEmail.length <= 0 ? (
          <small className={styles.small}>Please enter your email</small>
        ) : (
          ''
        )}
      </div>
      <div className="message__section">
        <label htmlFor="message">Message</label>
        <div className={styles['text__area__box']}>
          <textarea
            className={styles['text__area']}
            id="message"
            name="message"
            placeholder="Send me a message and i'll reply as soon as possible..."
            value={isTextArea}
            onChange={(e) => setIsTextArea(e.target.value)}
          ></textarea>
        </div>
        {error && isTextArea.length <= 0 ? (
          <small className={styles.small}>Please enter a message</small>
        ) : (
          ''
        )}
      </div>

      <div className={styles['input__checkbox']}>
        <label>
          <input type="checkbox" />
          <span className={styles['check__box']}></span>
        </label>
        <span className={styles['supporting__text']}>
          You agree to provide your data to {title} who may contact you
        </span>
      </div>
      <button className={styles['btn__submit']} id="btn__submit" type="submit">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
