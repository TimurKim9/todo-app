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
      editing: false,
    },
    {
      id: 2,
      description: 'Editing task',
      completed: false,
      editing: true,
    },
    {
      id: 3,
      description: 'Active task',
      completed: false,
      editing: false,
    },
  ]);

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
        />
        <Footer />
      </section>
    </section>
  );
}

export default App;