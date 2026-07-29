import { useState, useEffect } from 'react';
import './index.css';

import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        const tasks = data.map((task) => ({
          id: task.id,
          description: task.title,
          completed: task.completed,
          editing: false,
        }));

        setTasks(tasks);
      });
  }, []);

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const updateTask = (id, description) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, description }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  const clearCompleted = () => {
    setTasks(
      tasks.filter((task) => !task.completed)
    );
  };

  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      completed: false,
      editing: false,
    };

    setTasks([newTask, ...tasks]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Active') {
      return !task.completed;
    }

    if (filter === 'Completed') {
      return task.completed;
    }

    return true;
  });

  const activeTasksCount = tasks.filter(
    (task) => !task.completed
  ).length;


  return (
    <section className="todoapp">

      <header className="header">
        <h1>todos</h1>

        <NewTaskForm
          addTask={addTask}
        />
      </header>


      <section className="main">

        <TaskList
          tasks={filteredTasks}
          toggleCompleted={toggleCompleted}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />


        <Footer
          filter={filter}
          setFilter={setFilter}
          activeTasksCount={activeTasksCount}
          clearCompleted={clearCompleted}
        />

      </section>

    </section>
  );
}

export default App;