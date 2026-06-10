import Task from './Task';

function TaskList() {
  return (
    <ul className="todo-list">
      <Task
        description="Completed task"
        created="created 17 seconds ago"
        completed={true}
        editing={false}
      />

      <Task
        description="Editing task"
        created="created 5 minutes ago"
        completed={false}
        editing={true}
      />

      <Task
        description="Active task"
        created="created 5 minutes ago"
        completed={false}
        editing={false}
      />
    </ul>
  );
}

export default TaskList;