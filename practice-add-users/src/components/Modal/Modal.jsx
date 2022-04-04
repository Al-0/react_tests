import React from "react";
import Button from "../shared/Button/Button";
import styles from "./Modal.module.css";

export default function Modal(props) {
  const handleClick = () => {
    props.reset();
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{props.title}</h2>
        </div>
        <div className={styles.content}>{props.message}</div>
        <div className={styles.actions}>
          <Button type="button" text="Okay" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
