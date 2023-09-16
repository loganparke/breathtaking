import { Link } from "react-router-dom";
import "./floral.css";

function Floral() {
  return (
    <div className="tablesPageWrap">
      <Link className="noUnderline" to="/floral/roses">
        <h3 className="productLink" id="roses">
          <p>Roses</p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/floral/hydrangeas">
        <h3 className="productLink" id="hydrangeas">
          <p>Hydrangeas</p>
        </h3>
      </Link>
    </div>
  );
  return (
    <div className="tablesPageWrap">
      <Link className="noUnderline tableLink" to="/tables/farmHouse">
        <h3 className="productLink" id="chalk1">
          <p>Floral <br></br>Backdrop</p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/tables/farmHouse">
        <h3 className="productLink" id="chalk1">
        <p>Farm House <br></br> Table</p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/tables/farmHouse">
        <h3 className="productLink" id="chalk1">
        <p>Farm House <br></br> Table</p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/tables/farmHouse">
        <h3 className="productLink" id="chalk1">
        <p>Farm House <br></br> Table</p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/tables/farmHouse">
        <h3 className="productLink" id="chalk1">
        <p>Farm House <br></br> Table</p>
        </h3>
      </Link>
    </div>
  );
}

export default Floral;
