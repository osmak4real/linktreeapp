import React from 'react';
import styles from './Header.module.css';
import { ArrowShare, Icon } from '../../icons';
import profile_img from '../../images/profile__img.png';
const Header = () => {
  return (
    <header className={styles['App__header']}>
      <div className={styles['container']}>
        <div className={styles['main__header__container']}>
          <div className={styles['header__container']}>
            <a
              className={styles['avatar__link']}
              href="https://twitter.com/tmoni5"
            >
              <img
                className={styles['profile__img']}
                id="profile__img"
                src={profile_img}
                alt=""
              />
            </a>
            <h4 id="twitter" className={styles.name}>
              TOLUWASE OLUWAMAKINDE
            </h4>
            <h4 id="slack" className={styles.slack}>
              osmak
            </h4>
          </div>
          <div className={styles.round}>
            <ArrowShare />
            <Icon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
