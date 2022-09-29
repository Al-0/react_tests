import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import ListItem from "./ListItem";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const { items, removeTodo } = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <ListItem
          key={item.id}
          text={item.text}
          id={item.id}
          onRemove={removeTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
