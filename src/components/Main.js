import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Main.module.css';

function Main() {
  return (
    <div className={styles.container}>
      <h1>Here, you can organize your tasks on a daily and weekly basis.</h1>

      <div className={styles.sections}>
        <div className={styles.section}>
          <h2>Daily Tasks</h2>
          <p>In the Daily Tasks section, you can easily add, edit, and delete your daily tasks.</p>
          <p>This helps you stay organized and efficient in your day-to-day activities.</p>
          <Link to="/daily" className={styles.link}>Go to Daily Tasks</Link>
        </div>

        <div className={styles.section}>
          <h2>Weekly Tasks</h2>
          <p>In the Weekly Tasks section, you can assign tasks to specific days of the week and remove them as they are completed or no longer needed.</p>
          <p>"You can distribute tasks for each day of the week, allowing you to better structure and track your long-term commitments."</p>
          <Link to="/weekly" className={styles.link}>Go to Weekly Tasks</Link>
        </div>
      </div>
    </div>
  );
}

export default Main;

