import React from 'react';
import Footer from '../Footer/Footer';
import styles from './Contact.module.css';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section className={styles['main__section']}>
      <div className={styles['main__section__container']}>
        <div className={styles['content']}>
          <div className={styles['section__container']}>
            <div className={styles['header']}>
              <h3>Contact Me</h3>
              <p>
                Hi there,contact me to ask me about anything you have in mind
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
