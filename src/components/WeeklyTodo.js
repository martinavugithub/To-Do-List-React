import React, { useState } from 'react';
import WeeklyInputTask from './WeeklyInputTask';
import WeeklyTask from './WeeklyTask';

function WeeklyTodo() {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const [weeklyTasks, setWeeklyTasks] = useState(daysOfWeek.map(() => []));

  const handleEditTask = (dayIndex, taskId, newText) => {
    const updatedTasks = [...weeklyTasks];
    updatedTasks[dayIndex] = updatedTasks[dayIndex].map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setWeeklyTasks(updatedTasks);
  };

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
    <div className="weeklyTodo">
      <h1>Weekly To-Do List</h1>
  
      {daysOfWeek.map((day, dayIndex) => (
        <div key={dayIndex} className="weekly-day">
          <h2>{day}</h2>
          <WeeklyInputTask onAddTask={(newTask) => handleAddTask(dayIndex, newTask)} />
          {weeklyTasks[dayIndex].map((task) => (
            <WeeklyTask
              key={task.id}
              task={task}
              onDelete={() => handleDeleteTask(dayIndex, task.id)}
              onEdit={(newText) => handleEditTask(dayIndex, task.id, newText)}
              onComplete={() => handleCompleteTask(dayIndex, task.id)}
            />
          ))}
        </div>
      ))}
    </div>
  );
  
}

export default WeeklyTodo;
