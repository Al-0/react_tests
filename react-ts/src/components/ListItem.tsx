import { FC } from "react";
import classes from "./ListItem.module.css";

const ListItem: FC<{ text: string }> = (props) => {
  return <li className={classes.item}>{props.text}</li>;
};

export default ListItem;
