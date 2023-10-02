import React from 'react';
import styles from '../styles/WeeklyTask.module.css';
import { FaBolt } from 'react-icons/fa';

function WeeklyTask({ task, onDelete }) {
  return (
    <div className={`${styles.weeklyTask} ${styles.taskCard}`}>
      <div className="d-flex flex-column align-items-center">
        <FaBolt className={`${styles.lightningIcon}`} />
        <span className={`task-text ${task.completed ? 'completed' : ''}`}>
          {task.text}
        </span>
        <button className={`btn btn-danger mx-1 ${styles.deleteButton}`} onClick={() => onDelete(task.id)}>
          Izbriši
        </button>
      </div>
    </div>
  );
}

export default WeeklyTask;
