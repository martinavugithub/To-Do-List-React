import React, { useState } from 'react';
import styles from '../styles/WeeklyInputTask.module.css';

function WeeklyInputTask({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <div className={styles.inputTaskContainer}>
      <div className={styles.inputFieldContainer}>
        <input
          type="text"
          className={`form-control ${styles.inputField}`}
          placeholder="Insert task..."
          value={task}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddTask();
            }
          }}
        />
      </div>
      <div className={styles.addButtonContainer}>
        <button
          className={`btn btn-primary ${styles.addButton}`}
          onClick={handleAddTask}
        >
          Add task
        </button>
      </div>
    </div>
  );
}

export default WeeklyInputTask;

