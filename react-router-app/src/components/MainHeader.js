import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

export const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink className={(navData) => navData.isActive ? 'active': ''} to="/welcome">Welcome</NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive ? 'active': ''} to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
