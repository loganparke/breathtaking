import { Link } from "react-router-dom";
import "./seating.css";

function Seating() {
  return (
  <div className="tablesPageWrap">
    <Link className="noUnderline tableLink" to="/tables/farmHouse">
      <h3 className="productLink" id="vintageSofas">
        <p>Vintage <br></br> Sofas</p>
      </h3>
    </Link>
    <Link className="noUnderline tableLink" to="/tables/farmHouse">
      <h3 className="productLink" id="vintageSofas">
      <p>Farm House <br></br> Table</p>
      </h3>
    </Link>
    <Link className="noUnderline tableLink" to="/tables/farmHouse">
      <h3 className="productLink" id="vintageSofas">
      <p>Farm House <br></br> Table</p>
      </h3>
    </Link>
    <Link className="noUnderline tableLink" to="/tables/farmHouse">
      <h3 className="productLink" id="vintageSofas">
      <p>Farm House <br></br> Table</p>
      </h3>
    </Link>
    <Link className="noUnderline tableLink" to="/tables/farmHouse">
      <h3 className="productLink" id="vintageSofas">
      <p>Farm House <br></br> Table</p>
      </h3>
    </Link>
  </div>
);
}

export default Seating;
