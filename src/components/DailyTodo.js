import React, { useState } from 'react';
import InputTask from './InputTask';
import Task from './Task';
import styles from '../styles/DailyTodo.module.css'

function DailyTodo() {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleEditTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
    setEditingTaskId(null);
  };

  const handleAddTask = (newTask) => {
    if (editingTaskId !== null) {
      const updatedTasks = tasks.map((task) =>
        task.id === editingTaskId ? { ...task, text: newTask } : task
      );
      setTasks(updatedTasks);
      setEditingTaskId(null);
    } else {
      const task = {
        id: Date.now(),
        text: newTask,
        completed: false,
      };
      setTasks([...tasks, task]);
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
  
  return (
    <div className={styles.dailyTodo}>
      <h2>Daily To Do</h2>
      <InputTask onAddTask={handleAddTask} editingTaskId={editingTaskId} tasks={tasks} />
            <div className="task-list">
            {tasks.map((task) => (
        <Task
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
            onComplete={handleCompleteTask}
            onEdit={handleEditTask}
            isEditing={task.id === editingTaskId}
        />
        ))}
      </div>
    </div>
  );
}

export default DailyTodo;
