import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import textlogo from "../../assets/textLogo.svg";

function Header() {
  return (
    <header>
      <nav className="navWrap">
        <img id="textLogo" src={textlogo} />
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <h3>
          <Link to="/tables">Tables</Link>
        </h3>
        <h3>
          <Link to="/seating">Seating</Link>
        </h3>
        <h3>
          <Link to="/backDrops">Back Drops</Link>
        </h3>
        <h3>
          <Link to="/lighting">Lighting</Link>
        </h3>
        <h3>
          <Link to="/chalkBoards">Chalkboards & Signs</Link>
        </h3>
        <h3>
          <Link to="/linen">Linen & Decor</Link>
        </h3>
        <h3>
          <Link to="/floral">Floral</Link>
        </h3>
        <h3 className="altCTA">
          <Link to="/contact">Contact us</Link>
        </h3>
      </nav>
    </header>
  );
}

export default Header;
