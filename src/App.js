import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from './services/api';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos().then(data => setTodos(data));
  }, []);

  // Add a new todo
  const handleAddTodo = (newTodo) => {
    addTodo(newTodo).then(addedTodo => {
      setTodos([...todos, addedTodo]);
    });
  };

  // Update an existing todo
  const handleUpdateTodo = (id, updatedTodo) => {
    updateTodo(id, updatedTodo).then((newTodo) => {
      setTodos(todos.map(todo => (todo.id === id ? newTodo : todo)));
    });
  };

  // Delete a todo
  const handleDeleteTodo = (id) => {
    deleteTodo(id).then(() => {
      setTodos(todos.filter(todo => todo.id !== id));
    });
  };

  return (
    <div className="App">
      <h1>Todo List</h1>

      {/* Display the count of todo items */}
      <h2>Total Todos: {todos.length}</h2>

      <AddTodo onAdd={handleAddTodo} />
      <TodoList todos={todos} onUpdate={handleUpdateTodo} onDelete={handleDeleteTodo} />
    </div>
  );
}

export default App;
