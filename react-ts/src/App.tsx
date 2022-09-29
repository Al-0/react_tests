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

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
