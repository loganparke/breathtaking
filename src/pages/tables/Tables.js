import { Link } from "react-router-dom";
import "./tables.css";

function Tables() {
  return (
    <div className="tablesPageWrap">
      <Link className="noUnderline tableLink" to="/tables/farmHouse">
        <h3 className="productLink" id="farmHouseTable">
          <p>Farm House <br></br> Table</p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/tables/farmHouse">
        <h3 className="productLink" id="farmHouseTable">
        <p>Farm House <br></br> Table</p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/tables/farmHouse">
        <h3 className="productLink" id="farmHouseTable">
        <p>Farm House <br></br> Table</p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/tables/farmHouse">
        <h3 className="productLink" id="farmHouseTable">
        <p>Farm House <br></br> Table</p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/tables/farmHouse">
        <h3 className="productLink" id="farmHouseTable">
        <p>Farm House <br></br> Table</p>
        </h3>
      </Link>
    </div>
  );
}

export default Tables;
