import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <div className={`text-center py-3 ${styles.header}`}>
<h1 className={`${styles.title} display-4 text-danger`}>To Do List</h1>
      <nav>
        <Link to="/daily">Daily To-Do</Link>
        <Link to="/weekly">Weekly To-Do</Link>
      </nav>
    </div>
  );
}

export default Header;
