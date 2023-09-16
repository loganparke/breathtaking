import { Link } from "react-router-dom";
import "./tables.css";

function Tables() {
  return (
    <div className="tablesPageWrap">
      <Link className="noUnderline tableLink" to="/tables/farmHouse">
        <h3 className="productLink" id="farmHouseTable">
          <p>
            Farm House <br></br> Table
          </p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/tables/decorTable">
        <h3 className="productLink" id="decorTable">
          <p>
            Decor <br></br> Table
          </p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/tables/rusticTable">
        <h3 className="productLink" id="rusticTable">
          <p>
            Rustic <br></br> Table
          </p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/tables/woodTable">
        <h3 className="productLink" id="woodTable">
          <p>
            Wood Side<br></br> Table
          </p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/tables/farmHouse">
        <h3 className="productLink" id="farmHouseTable">
          <p>
            Farm House <br></br> Table
          </p>
        </h3>
      </Link>
    </div>
  );
}

export default Tables;
