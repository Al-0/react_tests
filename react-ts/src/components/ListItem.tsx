import { FC } from "react";
import classes from "./ListItem.module.css";

const ListItem: FC<{
  text: string;
  id: string;
  onRemove: (id: string) => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={() => props.onRemove(props.id)}>
      {props.text}
    </li>
  );
};

export default ListItem;
