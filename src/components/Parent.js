import React, { useState } from 'react';


const TodoItem = ({ todo }) => {
  return (
    <div>
      <span>{todo.text}</span>
    </div>
  );
};

// Parent component
const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a todo app', completed: false },
    { id: 3, text: 'Deploy to production', completed: false }
  ]);

  // Function to mark a todo item as completed
  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
          {!todo.completed && (
            <button onClick={() => completeTodo(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </div>
  );
};

export default TodoList;