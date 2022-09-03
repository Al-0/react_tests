import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Welcome = () => {
  return (
    <section>
      <h1>Welcome page</h1>
      <Link to="new-user">New user</Link>
      <Outlet />
    </section>
  );
};
