import React from "react";
import ListItem from "./ListItem";
import Todo from "../models/todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <ListItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
