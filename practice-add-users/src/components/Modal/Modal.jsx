import React from "react";
import * as ReactDOM from "react-dom";
import Button from "../shared/Button/Button";
import { Card } from "../shared/Card/Card";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h2>{props.title}</h2>
      </div>
      <div className={styles.content}>{props.message}</div>
      <div className={styles.actions}>
        <Button type="button" text="Okay" onClick={props.onConfirm} />
      </div>
    </div>
  );
};

export default function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.reset} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onConfirm={props.reset}
          message={props.message}
          title={props.title}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}
