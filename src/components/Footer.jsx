import TasksFilter from './TasksFilter';
import PropTypes from 'prop-types';

function Footer({
  filter = 'All',
  setFilter = () => {},
  activeTasksCount = 0,
  clearCompleted = () => {},
}) {
  return (
    <footer className="footer">

      <span className="todo-count">
        {activeTasksCount} items left
      </span>

      <TasksFilter
        filter={filter}
        setFilter={setFilter}
      />

      <button
        className="clear-completed"
        onClick={clearCompleted}
      >
        Clear completed
      </button>

    </footer>
  );
}

Footer.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  activeTasksCount: PropTypes.number,
  clearCompleted: PropTypes.func,
};

export default Footer;