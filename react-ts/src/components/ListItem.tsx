import { FC } from "react";
import classes from "./ListItem.module.css";

const ListItem: FC<{ text: string, id: string, onRemove: () => void }> = (props) => {
  return <li className={classes.item} onClick={props.onRemove}>{props.text}</li>;
};

export default ListItem;
