import { FC } from "react";

const ListItem: FC<{ text: string }> = (props) => {
  return <li>{props.text}</li>;
};

export default ListItem;
