import React from "react";
import ListItem from "./ListItem";
import Todo from "../models/todo";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[], onRemove: (id:string) => void  }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <ListItem key={item.id} text={item.text} id={item.id} onRemove={props.onRemove}/>
      ))}
    </ul>
  );
};

export default Todos;
