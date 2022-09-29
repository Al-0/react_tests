import { FC, FormEvent, useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const toDoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredText = toDoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={toDoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
