import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

function Task({
  id = 0,
  description = '',
  completed = false,
  created = new Date(),
  toggleCompleted = () => {},
  updateTask = () => {},
  deleteTask = () => {},
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
          <span className="created">
            created {formatDistanceToNow(new Date(created))} ago
          </span>
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

Task.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  created: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]),
  toggleCompleted: PropTypes.func,
  updateTask: PropTypes.func,
  deleteTask: PropTypes.func,
};

export default Task;