import React, { useState } from 'react';
import styles from '../styles/Task.module.css';

function Task({ task, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEditInputChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
    onEdit(task.id, editedText);
  };

  return (
    <div className={`task card p-3 mb-3 ${styles.task}`}>
      <div className="d-flex justify-content-between">
        <span className={`task-text ${task.completed ? 'completed' : ''}`}>
          {isEditing ? (
            <input
              type="text"
              value={editedText}
              onChange={handleEditInputChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSaveEdit();
                }
              }}
            />
          ) : (
            task.text
          )}
        </span>
        <div className={`d-flex ${styles.buttons}`}>
          {isEditing ? (
            <button className="btn btn-primary mx-1" onClick={handleSaveEdit}>
              Spremi
            </button>
          ) : (
            <>
              <button className="btn btn-primary mx-1" onClick={() => setIsEditing(true)}>
                Uredi
              </button>
              <button className="btn btn-danger mx-1" onClick={() => onDelete(task.id)}>
                Izbriši
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
  
}


export default Task;