import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WeeklyInputTask from './WeeklyInputTask';
import WeeklyTask from './WeeklyTask';
import styles from '../styles/WeeklyTodo.module.css';

function WeeklyTodo() {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const [weeklyTasks, setWeeklyTasks] = useState(daysOfWeek.map(() => []));

  const handleAddTask = (dayIndex, newTask) => {
    const updatedTasks = [...weeklyTasks];
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    updatedTasks[dayIndex].push(task);
    setWeeklyTasks(updatedTasks);
  };

  const handleDeleteTask = (dayIndex, taskId) => {
    const updatedTasks = [...weeklyTasks];
    updatedTasks[dayIndex] = updatedTasks[dayIndex].filter((task) => task.id !== taskId);
    setWeeklyTasks(updatedTasks);
  };

  const handleCompleteTask = (dayIndex, taskId) => {
    const updatedTasks = [...weeklyTasks];
    updatedTasks[dayIndex] = updatedTasks[dayIndex].map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setWeeklyTasks(updatedTasks);
  };

  return (
    <div className={styles.weeklyTodo}>
      <Link to="/" className={styles.homeLink}>Return to Home</Link> 
      <h1>Weekly To-Do List</h1>

      <div className={styles['week-days']}>
        {daysOfWeek.map((day, dayIndex) => (
          <div key={dayIndex} className={`${styles['weekly-day']} ${styles[`day-${dayIndex + 1}`]}`}>
            <h2>{day}</h2>
            <WeeklyInputTask onAddTask={(newTask) => handleAddTask(dayIndex, newTask)} />
            {weeklyTasks[dayIndex].map((task) => (
              <WeeklyTask
                key={task.id}
                task={task}
                onDelete={() => handleDeleteTask(dayIndex, task.id)}
                onComplete={() => handleCompleteTask(dayIndex, task.id)}
              />
            ))}
            </div>
          ))}
        </div>
      </div>
    );
}

export default WeeklyTodo;
