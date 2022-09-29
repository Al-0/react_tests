import React from "react";
import ListItem from "./ListItem";
import Todo from "../models/todo";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <ListItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
