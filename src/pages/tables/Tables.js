import { Link } from "react-router-dom";
import "./tables.css";

function Tables() {
  return (
    <div>
      <Link className="noUnderline" to="/tables/farmHouse">
        <h3 className="productLink" id="farmHouseTable">
          <p>farmHouse Table</p>
        </h3>
      </Link>
    </div>
  );
}

export default Tables;
