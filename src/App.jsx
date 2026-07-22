import { useState } from 'react';
import './index.css';

import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: 'Completed task',
      completed: true,
    },
    {
      id: 2,
      description: 'Editing task',
      completed: false,
    },
    {
      id: 3,
      description: 'Active task',
      completed: false,
    },
  ]);

  // const editTask = (id) => {
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id
  //         ? { ...task, editing: !task.editing }
  //         : task
  //     )
  //   );
  // };
  const updateTask = (id, description) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, description, editing: false }
          : task
      )
    );
  };
  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };
  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>

      <section className="main">
        <TaskList
          tasks={tasks}
          toggleCompleted={toggleCompleted}
          // editTask={editTask}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />

        <Footer />
      </section>
    </section>
  );
}

export default App;