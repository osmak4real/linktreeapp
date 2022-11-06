import React from 'react';
import styles from './Footer.module.css';
import { Logo } from '../../icons';
import img from '../../images/I4G.png';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__container']}>
        <Logo />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={img} alt='' />
      </div>
    </footer>
  );
};

export default Footer;
