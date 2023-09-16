import { Link } from "react-router-dom";
import "./linen.css";

function Linen() {
  return (
    <div className="tablesPageWrap">
      <Link className="noUnderline tableLink" to="/tables/farmHouse">
        <h3 className="productLink" id="linen1">
          <p>linen</p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/tables/farmHouse">
        <h3 className="productLink" id="linen1">
        <p>decor</p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/tables/farmHouse">
        <h3 className="productLink" id="linen1">
        <p>Farm House <br></br> Table</p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/tables/farmHouse">
        <h3 className="productLink" id="linen1">
        <p>Farm House <br></br> Table</p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/tables/farmHouse">
        <h3 className="productLink" id="linen1">
        <p>Farm House <br></br> Table</p>
        </h3>
      </Link>
    </div>
  );
}

export default Linen;
