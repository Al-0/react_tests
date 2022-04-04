import React from "react";
import { Card } from "../shared/Card/Card";
import styles from "./UserList.module.css";

export const UserList = (props) => {
  return (
    <div>
      {props.users.length && (
        <Card>
          <div className={styles.users}>
            <ul>
              {props.users.map((user) => {
                return (
                  <li key={user.id}>
                    {user.username} ({user.age} year{user.age !== 1 ? "s" : ""} old)
                  </li>
                );
              })}
            </ul>
          </div>
        </Card>
      )}
    </div>
  );
};
