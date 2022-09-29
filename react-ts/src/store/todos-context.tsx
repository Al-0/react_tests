import { createContext, FC, ReactNode, useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: FC<{ children: ReactNode }> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (newTodoText: string) => {
    const newTodo = new Todo(newTodoText);

    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  const onRemoveHandler = (id: string) => {
    setTodos((prevState) => {
      const updatedTodos = prevState.filter((todo) => todo.id !== id);

      return updatedTodos;
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: onRemoveHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
