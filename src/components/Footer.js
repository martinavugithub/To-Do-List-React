import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <p>Martina Popović</p>
            <p>Email: martinavu1@gmail.com</p>
            <p>
              GitHub: 
              <a href="https://github.com/martinavugithub" className={styles.githubLink}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
