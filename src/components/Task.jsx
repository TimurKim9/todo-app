function Task({
  id,
  description,
  completed,
  editing,
  toggleCompleted,
}) {
  return (
    <li className={`${completed ? 'completed' : ''} ${editing ? 'editing' : ''}`}>
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

        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>

      {editing && (
        <input
          type="text"
          className="edit"
          defaultValue={description}
        />
      )}
    </li>
  );
}

export default Task;