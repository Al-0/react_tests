import React, { useState, useRef } from "react";
import { Card } from "../shared/Card/Card";
import Modal from "../Modal/Modal"
import Button from "../shared/Button/Button";
import { Wrapper } from "../Helper/Wrapper";
import styles from "./AddUser.module.css";

export default function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = nameInputRef.current.value;
    const age = ageInputRef.current.value;

    if (age.trim() === "" || username.trim() === "") {
      setErrorMessage("You must provide a valid username and age");
    } else if (age < 0 || age > 100) {
      setErrorMessage("Age can only be in the 0 to 100 range.");
    } else {
      props.handleUsersChange({
        username: username,
        age: Number(age),
        id: Math.random().toString(),
      });
    }

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const resetModal = () => {
    setErrorMessage('');
  }

  return (
    <Wrapper>
      {errorMessage !== '' &&
        <Modal message={errorMessage} reset={resetModal} title='Invalid input'/>
      }
      <Card>
        <form onSubmit={handleSubmit}>
          <div className={styles.input}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              ref={nameInputRef}
            ></input>
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              id="age"
              name="age"
              step="1"
              ref={ageInputRef}
            ></input>
            <Button type="submit" text="Add user" />
          </div>
        </form>
      </Card>
    </Wrapper>
  );
}
