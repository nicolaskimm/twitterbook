import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <ul>
    <li>
      <Link to="/">twitters</Link>
    </li>
    <li>
      <Link to="/articles">articles</Link>
    </li>
    <li>
      <Link to="/notes">notes</Link>
    </li>
  </ul>
);

export default Navigation;
