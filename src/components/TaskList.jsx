import Task from './Task';

function TaskList({ tasks, toggleCompleted }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          completed={task.completed}
          editing={task.editing}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </ul>
  );
}

export default TaskList;