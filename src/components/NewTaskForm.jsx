import { useState } from 'react';

function NewTaskForm({ addTask }) {
  const [text, setText] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && text.trim() !== '') {
      addTask(text);
      setText('');
    }
  };

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      value={text}
      onChange={(event) => setText(event.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}

export default NewTaskForm;