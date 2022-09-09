import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
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
      <IconButton className='xBtn' onClick={handleRemoveClick}>x
         {/*<CloseIcon />*/} 
      </IconButton>
    </ListItem>
  );
}

export default Todo;