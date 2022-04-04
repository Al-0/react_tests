import React, { useState } from "react";
import { Card } from "../shared/Card/Card";
import Modal from "../Modal/Modal"
import Button from "../shared/Button/Button";
import styles from "./AddUser.module.css";

export default function AddUser(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (age === "" || username === "") {
      setErrorMessage("You must provide a valid username and age");
    } else if (age < 0 || age > 100) {
      setErrorMessage("Age can only be in the 0 to 100 range.");
    } else {
      props.handleUsersChange({
        username: username,
        age: Number(age),
        id: Math.random().toString(),
      });

      setAge("");
      setUsername("");
    }
  };

  const resetModal = () => {
    setErrorMessage('');
  }

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      {errorMessage !== '' &&
        <Modal message={errorMessage} reset={resetModal}/>
      }
      <Card>
        <form onSubmit={handleSubmit}>
          <div className={styles.input}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            ></input>
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              id="age"
              name="age"
              step="1"
              value={age}
              onChange={handleAgeChange}
            ></input>
            <Button type="submit" text="Add user" />
          </div>
        </form>
      </Card>
    </div>
  );
}
