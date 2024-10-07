import React from 'react';

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  return (
    <li>
      <span>{todo.title}</span>
      <button onClick={() => onUpdate(todo.id, { ...todo, completed: !todo.completed })}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
