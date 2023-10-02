import React from 'react';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <div className={`text-center py-3 ${styles.header}`}>
      <h1 className={`${styles.title} display-4 text-danger`}>To Do List</h1>
    </div>
  );
}

export default Header;
