import React from "react";
import "../css/Counter.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="min-header">
      <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
