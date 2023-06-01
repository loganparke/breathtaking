import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <h3>
          <Link to="/make-it-breathtaking">Home</Link>
        </h3>
        <h3>
          <Link to="/make-it-breathtaking/tables">Tables</Link>
        </h3>
        <h3>
          <Link to="/make-it-breathtaking/tableTop">Table Top</Link>
        </h3>
        <h3>
          <Link to="/make-it-breathtaking/seating">Seating</Link>
        </h3>
        <h3>
          <Link to="/make-it-breathtaking/smallDetails">Small Details</Link>
        </h3>
        <h3>
          <Link to="/make-it-breathtaking/largeDetails">Large Details</Link>
        </h3>
        <h3>
          <Link to="/make-it-breathtaking/linen">Linen</Link>
        </h3>
        <h3>
          <Link to="/make-it-breathtaking/poleTents">Pole Tents</Link>
        </h3>
        <h3>
          <Link to="/make-it-breathtaking/termsCons">Terms and Conditions</Link>
        </h3>
        <h3>
          <Link to="/make-it-breathtaking/contact">Contact us</Link>
        </h3>
      </nav>
    </header>
  );
}

export default Header;
