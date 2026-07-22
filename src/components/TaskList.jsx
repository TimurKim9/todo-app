import Task from './Task';

function TaskList({
  tasks,
  toggleCompleted,
  updateTask,
  deleteTask,
}) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          completed={task.completed}
          toggleCompleted={toggleCompleted}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;