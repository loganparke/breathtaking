import React from "react";
import heroImage from "../../assets/IMG_3047.jpg";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="heroImage">
        <h1>
          welcome to <br></br>Make It Breathtaking
          <br></br>
          <span>Northern Utah wedding and event rentals.</span>
        </h1>
      </div>
      <section className="homeItems">
        <Link className="noUnderline  homeLink" to="/tables">
          <h3 className="productLink" id="tables">
            <p>Tables</p>
          </h3>
        </Link>
        <Link className="noUnderline homeLink" to="/seating">
          <h3 className="productLink" id="seating">
            <p>Seating</p>
          </h3>
        </Link>
        <Link className="noUnderline homeLink" to="/backDrops">
          <h3 className="productLink" id="tableTop">
            <p>Back Drops</p>
          </h3>
        </Link>
        <Link className="noUnderline homeLink" to="/lighting">
          <h3 className="productLink" id="smallDetails">
            <p>Lighting</p>
          </h3>
        </Link>
        <Link className="noUnderline homeLink" to="/chalkBoards">
          <h3 className="productLink" id="largeDetails">
            <p>Chalkboards & Signs</p>
          </h3>
        </Link>
        <Link className="noUnderline homeLink" to="/Linen">
          <h3 className="productLink" id="linen">
            <p>Linen</p>
          </h3>
        </Link>
        <Link className="noUnderline homeLink" to="/floral">
          <h3 className="productLink" id="floral">
            <p>Floral</p>
          </h3>
        </Link>
      </section>
    </div>
  );
}

export default Home;
