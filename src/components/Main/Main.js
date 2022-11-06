import React from 'react';
import styles from './Main.module.css';
import { links } from '../../data';
import { Slack, Github } from '../../icons';
const Main = () => {
  return (
    <main className={styles.main}>
      {links.map((linkItem) => {
        const { id, title, link } = linkItem;
        return (
          <a id={id} className={styles.btn} key={id} href={link}>
            <span className={styles.links}>{title}</span>
          </a>
        );
      })}
      <div className={styles['btn__container']}>
        <a id="slack" href="_">
          <Slack />
        </a>
        <a id="github" href="https://github.com/osmak4real">
          <Github />
        </a>
      </div>
    </main>
  );
};

export default Main;
