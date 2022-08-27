import React from "react";
import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <section>
      <h1>Products page</h1>
      <ul>
        <li>
          <Link to='/products/p1'>Book</Link>
        </li>
        <li>
          <Link to='/products/p2'>Pen</Link>
        </li>
        <li>
          <Link to='/products/p3'>Laptop</Link>
        </li>
      </ul>
    </section>
  );
};
