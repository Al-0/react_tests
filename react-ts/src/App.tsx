import { useState } from "react";

import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import Todo from "./models/todo";

function App() {
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

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemove={onRemoveHandler} />
    </div>
  );
}

export default App;
