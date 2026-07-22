import { useState } from 'react';
function Task({
  id,
  description,
  completed,
  toggleCompleted,
  updateTask,
  deleteTask,
}) {
  const [editing, setEditing] = useState(false);
  
  return (
    <li
      className={`${completed ? 'completed' : ''} ${
        editing ? 'editing' : ''
      }`}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => toggleCompleted(id)}
        />

        <label>
          <span className="description">{description}</span>
        </label>

        <button
          className="icon icon-edit"
          onClick={() => setEditing(!editing)}
        ></button>

        <button
          className="icon icon-destroy"
          onClick={() => deleteTask(id)}
        ></button>
      </div>

      {editing && (
        <input
          type="text"
          className="edit"
          defaultValue={description}
          onKeyDown={(event) => {
          if (event.key === 'Enter') {
            updateTask(id, event.target.value);
            setEditing(false);
          }
        }}
        />
      )}
    </li>
  );
}

export default Task;