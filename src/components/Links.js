import React from "react";
import { Link } from "react-router-dom";

const Links = () => (
  <nav>
    <Link to="/">Home </Link>
    <Link to="/material">Material Home </Link>
    <Link to="/contact">Contact </Link>
  </nav>
);

export default Links;
