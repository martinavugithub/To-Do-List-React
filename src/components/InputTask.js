import React, { useState } from 'react';
import styles from '../styles/InputTask.module.css';

function InputTask({ onAddTask }) {
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
      <div className={`input-group ${styles.inputGroup}`}>
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
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            onClick={handleAddTask}
          >
            Add task
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputTask;
