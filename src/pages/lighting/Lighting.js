import { Link } from "react-router-dom";
import "./lighting.css";

function Lighting() {
  return (
    <div className="tablesPageWrap">
      <Link className="noUnderline tableLink" to="/lighting/candles">
        <h3 className="productLink" id="lighting1">
          <p>
            Candles <br></br>
          </p>
        </h3>
      </Link>
      <Link className="noUnderline tableLink" to="/lighting/loveLight">
        <h3 className="productLink" id="lighting2">
          <p>
            Love <br></br> Light
          </p>
        </h3>
      </Link>
    </div>
  );
}

export default Lighting;
