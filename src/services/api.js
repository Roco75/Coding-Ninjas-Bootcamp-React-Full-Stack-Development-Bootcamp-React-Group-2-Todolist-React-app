const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// Fetch todos
export const fetchTodos = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.slice(0, 10); // Get first 10 todos
};

// Add a new todo
export const addTodo = async (newTodo) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  return response.json();
};

// Update an existing todo
export const updateTodo = async (id, updatedTodo) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedTodo),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  return response.json();
};

// Delete a todo
export const deleteTodo = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};
