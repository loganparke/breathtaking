import { Link } from "react-router-dom";
import "./seating.css";

function Seating() {
  return (
    <div className="tablesPageWrap">
      <Link className="noUnderline tableLink" to="/seating/vintageSofas">
        <h3 className="productLink" id="vintageSofas">
          <p>
            Vintage <br></br> Sofas
          </p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/seating/crossBackChair">
        <h3 className="productLink" id="crossBackChair">
          <p>
            Cross Back <br></br> Chair
          </p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/seating/chiavariChair">
        <h3 className="productLink" id="chiavariChair">
          <p>
            Chiavari <br></br> Chair
          </p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/seating/modernSofas">
        <h3 className="productLink" id="modernSofas">
          <p>
            Modern <br></br> sofas
          </p>
        </h3>
      </Link>
    </div>
  );
}

export default Seating;
