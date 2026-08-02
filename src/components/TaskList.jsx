import Task from './Task';
import PropTypes from 'prop-types';

function TaskList({
  tasks = [],
  toggleCompleted = () => {},
  updateTask = () => {},
  deleteTask = () => {},
}) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          completed={task.completed}
          created={task.created}
          toggleCompleted={toggleCompleted}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  toggleCompleted: PropTypes.func,
  updateTask: PropTypes.func,
  deleteTask: PropTypes.func,
};

export default TaskList;