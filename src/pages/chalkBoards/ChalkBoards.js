import { Link } from "react-router-dom";
import "./ChalkBoards.css";

function ChalkBoards() {
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

export default ChalkBoards;
