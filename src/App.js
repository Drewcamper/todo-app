import {Typography} from "@mui/material";
import React, { useEffect, useState } from "react";
import TodoForm from "./components/js/TodoForm";
import TodoList from "./components/js/TodoList";
import "./App.css"

const LOCAL_STORAGE_KEY = "react-todo-list-todos";


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <Typography className='title'style={{ padding: 16 }} variant="h1">
        React Todo
      </Typography>      
      <TodoForm addTodo={addTodo} />
        <div className="List">
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
      </div>
    </div>
  );
}

export default App;

