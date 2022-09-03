import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Products = () => {
  // const navigate = useNavigate();
  // navigate(1); //Go one page forward
  // navigate(-1); //Go one page back
  // navigate('/welcome'); // Equivalent to push
  // navigate('/welcome', {replace: true}); // Equivalent to replace
  
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
