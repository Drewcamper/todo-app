import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import '../css/todo.css'

import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
      <Typography className='Listitems'
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null
        }}
      >
        {todo.task}
      </Typography>
      <IconButton onClick={handleRemoveClick}>
         <DeleteIcon /> 
      </IconButton>
    </ListItem>
  );
}

export default Todo;