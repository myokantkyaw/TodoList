import React, { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Add a new todo
  const handleAddTodo = () => {
    if (input.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  // Toggle complete
  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Delete todo
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className='body'>
      <h2> Todo List</h2>
      <div style={styles.inputSection}>
        <input className='Input'
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a todo"
        />
        <button className='Add' onClick={handleAddTodo}>Add</button>
      </div>

      <ul className='list'>
        {todos.map(todo => (
          <li key={todo.id} className='list-item'>
            <span className='span'
              onClick={() => toggleComplete(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} className='Delete'>
              ✕
              </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  deleteBtn: {
    background: 'red',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  }
};
