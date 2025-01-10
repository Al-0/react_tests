import { useState } from "react";

export default function Player({ name, symbol, isActive, onEditPlayer }) {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState(name);

  const editingHandler = () => {
    setIsEditing((editing) => !editing);

    if (isEditing){
      onEditPlayer(symbol, userName);
    }
  }

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  }

  return (
    <li className={isActive ? 'active' : null}>
      <span className="player">
        {!isEditing && <span className="player-name">{userName}</span>}
        {isEditing && <input type="text" required value={userName} onChange={userNameHandler}/>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editingHandler}>{isEditing ? "Save" :"Edit"}</button>
    </li>
  );
}
