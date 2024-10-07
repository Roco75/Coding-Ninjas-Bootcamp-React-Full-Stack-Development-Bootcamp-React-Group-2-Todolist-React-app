import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleAddTodo = () => {
    const newTodo = { title, completed: false };
    onAdd(newTodo);
    setTitle('');
  };

  return (
    <div>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="New todo" 
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default AddTodo;
